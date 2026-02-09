import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";

interface ConnectFormProps {
  triggerClassName?: string;
  triggerText?: string;
}

export default function ConnectForm({ triggerClassName, triggerText = "Начать отслеживание" }: ConnectFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    commanderName: "",
    apiKey: "",
    colonyName: "",
    system: "",
    platform: "pc",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Подключение к API:", formData);
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className={triggerClassName}>
          {triggerText}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-neutral-900 border-orange-500/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
            <Icon name="Rocket" className="text-orange-500" size={28} />
            Подключение к Elite Dangerous
          </DialogTitle>
          <DialogDescription className="text-neutral-400">
            Введите данные вашего аккаунта для начала отслеживания прогресса колонии
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="commanderName" className="text-white">
              Имя командира
            </Label>
            <Input
              id="commanderName"
              placeholder="CMDR Yuri Gagarin"
              value={formData.commanderName}
              onChange={(e) => setFormData({ ...formData, commanderName: e.target.value })}
              className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apiKey" className="text-white flex items-center gap-2">
              API ключ Frontier
              <a 
                href="https://www.frontierstore.net/developer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1"
              >
                <Icon name="ExternalLink" size={12} />
                Получить ключ
              </a>
            </Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="••••••••••••••••••••••••••••"
              value={formData.apiKey}
              onChange={(e) => setFormData({ ...formData, apiKey: e.target.value })}
              className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
              required
            />
            <p className="text-xs text-neutral-500">
              Ключ хранится локально и используется только для получения данных вашей колонии
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="colonyName" className="text-white">
              Название колонии
            </Label>
            <Input
              id="colonyName"
              placeholder="Arcturus Prime"
              value={formData.colonyName}
              onChange={(e) => setFormData({ ...formData, colonyName: e.target.value })}
              className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="system" className="text-white">
              Система
            </Label>
            <Input
              id="system"
              placeholder="HD 85512"
              value={formData.system}
              onChange={(e) => setFormData({ ...formData, system: e.target.value })}
              className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="platform" className="text-white">
              Платформа
            </Label>
            <Select value={formData.platform} onValueChange={(value) => setFormData({ ...formData, platform: value })}>
              <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-neutral-800 border-neutral-700">
                <SelectItem value="pc" className="text-white">PC</SelectItem>
                <SelectItem value="xbox" className="text-white">Xbox</SelectItem>
                <SelectItem value="playstation" className="text-white">PlayStation</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-transparent border-neutral-700 text-white hover:bg-neutral-800"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
            >
              <Icon name="Zap" size={16} className="mr-2" />
              Подключить
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
