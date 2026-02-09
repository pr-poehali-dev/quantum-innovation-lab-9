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
    colonyName: "",
    system: "",
    platform: "pc",
    eddn: true,
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
            Подключение через EDDN — открытая сеть обмена данными Elite Dangerous. API ключи не требуются.
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

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Icon name="Info" className="text-orange-400 mt-0.5" size={20} />
              <div>
                <h4 className="text-orange-400 font-semibold mb-1 font-['Rajdhani']">Подключение через EDDN</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Elite Dangerous Data Network — это открытая сеть для обмена данными между командирами.
                  Не требует API ключей и работает на всех платформах.
                </p>
                <a 
                  href="https://eddn.edcd.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1 mt-2"
                >
                  <Icon name="ExternalLink" size={12} />
                  Подробнее о EDDN
                </a>
              </div>
            </div>
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