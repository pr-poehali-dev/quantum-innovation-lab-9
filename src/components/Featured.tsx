import ConnectForm from "@/components/ConnectForm";

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-black border-t border-orange-500/10">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/exterior.png"
          alt="Space station construction"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-xs tracking-widest text-orange-500 font-['Rajdhani']">ПОЛНЫЙ КОНТРОЛЬ СТРОИТЕЛЬСТВА</h3>
        <p className="text-xl lg:text-3xl mb-8 text-neutral-300 leading-relaxed font-['Rajdhani'] font-light">
          Отслеживайте прогресс строительства, статистику ресурсов и вклад каждого командира.
          Получайте уведомления о важных этапах и планируйте развитие колонии.
        </p>
        <ConnectForm 
          triggerClassName="bg-orange-500 text-black border border-orange-500 px-6 py-3 text-sm transition-all duration-300 hover:bg-transparent hover:text-orange-500 cursor-pointer w-fit uppercase tracking-wider font-semibold font-['Rajdhani']"
          triggerText="Начать отслеживание"
        />
      </div>
    </div>
  );
}