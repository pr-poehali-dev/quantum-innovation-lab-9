import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function ResourceStats() {
  const resources = [
    {
      category: "Строительные материалы",
      items: [
        { name: "Сплавы", delivered: 12847, required: 15000, priority: "high", unit: "т" },
        { name: "Керамические композиты", delivered: 6521, required: 8500, priority: "high", unit: "т" },
        { name: "Полимеры", delivered: 8934, required: 10000, priority: "medium", unit: "т" },
        { name: "Кристаллические решётки", delivered: 3245, required: 5000, priority: "medium", unit: "т" },
      ],
    },
    {
      category: "Энергетика",
      items: [
        { name: "Силовые генераторы", delivered: 89, required: 120, priority: "high", unit: "шт" },
        { name: "Суперконденсаторы", delivered: 234, required: 300, priority: "medium", unit: "шт" },
        { name: "Реакторные компоненты", delivered: 45, required: 80, priority: "low", unit: "шт" },
      ],
    },
    {
      category: "Электроника",
      items: [
        { name: "Процессоры", delivered: 1567, required: 2000, priority: "medium", unit: "шт" },
        { name: "Микроконтроллеры", delivered: 4321, required: 5000, priority: "low", unit: "шт" },
        { name: "Биокомпьютеры", delivered: 67, required: 150, priority: "high", unit: "шт" },
      ],
    },
    {
      category: "Жизнеобеспечение",
      items: [
        { name: "Воздушные фильтры", delivered: 890, required: 1000, priority: "high", unit: "шт" },
        { name: "Водные процессоры", delivered: 234, required: 400, priority: "medium", unit: "шт" },
        { name: "Продовольствие (криоупаковка)", delivered: 15670, required: 20000, priority: "medium", unit: "т" },
      ],
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500/20 text-red-400 border-red-500/50";
      case "medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      case "low":
        return "bg-green-500/20 text-green-400 border-green-500/50";
      default:
        return "bg-neutral-500/20 text-neutral-400 border-neutral-500/50";
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "high":
        return "Высокий";
      case "medium":
        return "Средний";
      case "low":
        return "Низкий";
      default:
        return priority;
    }
  };

  return (
    <div className="min-h-screen bg-black py-20 px-6 border-t border-orange-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4 font-['Orbitron'] tracking-wider uppercase">
            СТАТИСТИКА РЕСУРСОВ
          </h2>
          <p className="text-lg text-neutral-500 font-['Rajdhani'] tracking-wide">МАТЕРИАЛЫ ДЛЯ СТРОИТЕЛЬСТВА КОЛОНИИ</p>
        </div>

        <div className="space-y-12">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-neutral-950/50 rounded-none p-6 border border-orange-500/20">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Package" className="text-orange-500" size={24} />
                <h3 className="text-xl font-bold text-orange-400 font-['Rajdhani'] tracking-wider uppercase">{category.category}</h3>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-orange-500/20">
                      <TableHead className="text-orange-400 font-semibold font-['Rajdhani'] tracking-wider uppercase">Материал</TableHead>
                      <TableHead className="text-orange-400 font-semibold font-['Rajdhani'] tracking-wider uppercase">Доставлено</TableHead>
                      <TableHead className="text-orange-400 font-semibold font-['Rajdhani'] tracking-wider uppercase">Требуется</TableHead>
                      <TableHead className="text-orange-400 font-semibold font-['Rajdhani'] tracking-wider uppercase">Прогресс</TableHead>
                      <TableHead className="text-orange-400 font-semibold font-['Rajdhani'] tracking-wider uppercase">Приоритет</TableHead>
                      <TableHead className="text-orange-400 font-semibold font-['Rajdhani'] tracking-wider uppercase text-right">Осталось</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {category.items.map((item, itemIndex) => {
                      const percentage = Math.round((item.delivered / item.required) * 100);
                      const remaining = item.required - item.delivered;
                      
                      return (
                        <TableRow key={itemIndex} className="border-orange-500/10">
                          <TableCell className="font-medium text-neutral-300 font-['Rajdhani']">{item.name}</TableCell>
                          <TableCell className="text-neutral-400 font-['Rajdhani']">
                            {item.delivered.toLocaleString()} {item.unit}
                          </TableCell>
                          <TableCell className="text-neutral-400 font-['Rajdhani']">
                            {item.required.toLocaleString()} {item.unit}
                          </TableCell>
                          <TableCell className="min-w-[200px]">
                            <div className="space-y-1">
                              <Progress value={percentage} className="h-2 bg-neutral-200" />
                              <span className="text-xs text-neutral-600">{percentage}%</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={getPriorityColor(item.priority)}>
                              {getPriorityText(item.priority)}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-semibold text-neutral-900">
                            {remaining.toLocaleString()} {item.unit}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <Icon name="AlertCircle" className="text-red-600" size={20} />
              </div>
              <h4 className="text-lg font-bold text-red-900">Высокий приоритет</h4>
            </div>
            <p className="text-3xl font-bold text-red-600">8 позиций</p>
            <p className="text-sm text-red-700 mt-2">Критически важные материалы</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg p-6 border border-yellow-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Icon name="Clock" className="text-yellow-600" size={20} />
              </div>
              <h4 className="text-lg font-bold text-yellow-900">Средний приоритет</h4>
            </div>
            <p className="text-3xl font-bold text-yellow-600">5 позиций</p>
            <p className="text-sm text-yellow-700 mt-2">Требуется в ближайшее время</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <Icon name="CheckCircle" className="text-green-600" size={20} />
              </div>
              <h4 className="text-lg font-bold text-green-900">Низкий приоритет</h4>
            </div>
            <p className="text-3xl font-bold text-green-600">2 позиции</p>
            <p className="text-sm text-green-700 mt-2">Доставка по графику</p>
          </div>
        </div>
      </div>
    </div>
  );
}