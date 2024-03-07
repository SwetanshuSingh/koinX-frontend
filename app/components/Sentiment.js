import Image from "next/image";
import EventCard from "./ui/EventCard";

const Sentiment = () => {
    return (
        <section className="max-w-[881px] h-[556px] bg-white rounded-lg p-6 flex flex-col gap-[33px]">

            <div className="container w-full flex flex-col gap-[17px]">
                <h2 className="text-[#0F1629] font-semibold text-2xl leading-[28.8px]">Sentiment</h2>

                <div className="heading flex gap-2 items-center">
                    <h3 className="text-[#44475B] text-[18.91px] leading-5 font-semibold">Key Events</h3>
                    <Image className="w-5 h-5" src="/assets/info.png" width={500} height={500} alt="info" />
                </div>

                <div className="carousel flex gap-[14px] overflow-x-hidden">
                    <EventCard bgColor="#E8F4FD" imageSrc="/assets/vector.png" />

                    <EventCard bgColor="#EBF9F4" imageSrc="/assets/vector-2.png" />
                </div>
            </div>


            
        </section>
    )
}

export default Sentiment;