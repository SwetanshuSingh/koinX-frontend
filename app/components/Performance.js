import DailyPriceIndicator from "./ui/DailyPriceIndicator";
import WeeklyPriceIndicator from "./ui/WeeklyPriceIndicator";

const Performance = () => {
    return (
        <section className="w-[881px] h-[632px] bg-white rounded-lg p-6 flex flex-col gap-6">
            <h2 className="text-[#0F1629] font-semibold text-2xl">Performance</h2>

            <div className="w-full flex flex-col gap-[15px]">
                <DailyPriceIndicator />
                <WeeklyPriceIndicator />
            </div>

            
        </section>
    )
}

export default Performance;