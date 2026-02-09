import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Dashboard() {
  const constructionPhases = [
    { name: "Инфраструктура", progress: 87, status: "active" },
    { name: "Производство", progress: 64, status: "active" },
    { name: "Жилые модули", progress: 42, status: "active" },
    { name: "Защита", progress: 28, status: "pending" },
    { name: "Торговля", progress: 15, status: "pending" },
  ];

  const resources = [
    { name: "Сплавы", delivered: 12847, required: 15000, icon: "Box" as const },
    { name: "Полимеры", delivered: 8934, required: 10000, icon: "Package" as const },
    { name: "Керамика", delivered: 6521, required: 8500, icon: "Boxes" as const },
  ];

  const timeToNextMilestone = {
    days: 4,
    hours: 12,
    minutes: 37,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            ПРОГРЕСС СТРОИТЕЛЬСТВА
          </h2>
          <p className="text-xl text-neutral-400">Колония "Arcturus Prime" • Система HD 85512</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <Card className="bg-neutral-900/50 border-orange-500/20 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Icon name="Timer" className="text-orange-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-neutral-400 uppercase">До следующей вехи</p>
                <p className="text-3xl font-bold text-white">
                  {timeToNextMilestone.days}д {timeToNextMilestone.hours}ч
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-neutral-900/50 border-blue-500/20 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Icon name="Users" className="text-blue-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-neutral-400 uppercase">Активных командиров</p>
                <p className="text-3xl font-bold text-white">142</p>
              </div>
            </div>
          </Card>

          <Card className="bg-neutral-900/50 border-green-500/20 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Icon name="TrendingUp" className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-neutral-400 uppercase">Общий прогресс</p>
                <p className="text-3xl font-bold text-white">47%</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon name="Building" className="text-orange-500" size={28} />
              Этапы строительства
            </h3>
            <div className="space-y-6">
              {constructionPhases.map((phase, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{phase.name}</span>
                    <span className="text-orange-400 font-bold">{phase.progress}%</span>
                  </div>
                  <Progress 
                    value={phase.progress} 
                    className="h-3 bg-neutral-800"
                  />
                  <p className="text-xs text-neutral-500 uppercase">
                    {phase.status === "active" ? "В процессе" : "Ожидание"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Icon name="Package" className="text-blue-500" size={28} />
              Доставка ресурсов
            </h3>
            <div className="space-y-6">
              {resources.map((resource, index) => {
                const percentage = Math.round((resource.delivered / resource.required) * 100);
                return (
                  <Card key={index} className="bg-neutral-900/30 border-neutral-800 p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon name={resource.icon} className="text-blue-400" size={20} />
                      <span className="text-white font-medium flex-1">{resource.name}</span>
                      <span className="text-sm text-neutral-400">
                        {resource.delivered.toLocaleString()} / {resource.required.toLocaleString()}
                      </span>
                    </div>
                    <Progress 
                      value={percentage} 
                      className="h-2 bg-neutral-800"
                    />
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-orange-900/20 to-neutral-900/20 border-orange-500/30 p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
                <Icon name="Rocket" className="text-orange-500" size={32} />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">Следующая цель</h4>
                <p className="text-neutral-400">Завершение производственного блока</p>
              </div>
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 uppercase tracking-wide">
              Внести вклад
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}