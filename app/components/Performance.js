import Image from "next/image";
import DailyPriceIndicator from "./ui/DailyPriceIndicator";
import WeeklyPriceIndicator from "./ui/WeeklyPriceIndicator";

const Performance = () => {
  return (
    <section className="w-[881px] h-[632px] bg-white rounded-lg p-6 flex flex-col gap-6">
      <h2 className="text-[#0F1629] font-semibold text-2xl leading-[28.8px]">Performance</h2>

      <div className="w-full flex flex-col gap-[15px]">
        <DailyPriceIndicator />
        <WeeklyPriceIndicator />
      </div>

      <div className="flex flex-col gap-4">
        <div className="heading flex gap-2 items-center">
            <h3 className="text-[#44475B] text-[18.91px] leading-5 font-semibold">Fundamentals</h3>
            <Image className="w-5 h-5" src="/assets/info.png" width={500} height={500} alt="info" />
        </div>

        <div>
            <h3>Bitcoin Price</h3>
        </div>
      </div>
    </section>
  );
};

export default Performance;
