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
            
            <div className="w-[710px] h-[186px] flex flex-col gap-[27px]">
                <div className="heading flex gap-2 items-center">
                    <h3 className="text-[#44475B] text-[18.91px] leading-5 font-semibold">Analyst Estimates</h3>
                    <Image className="w-5 h-5" src="/assets/info.png" width={500} height={500} alt="info" />
                </div>

                <div className="w-full flex items-center gap-8">
                    <div className="w-[116.86px] h-[120px] bg-[#EBF9F4] text-[#0FBA83] rounded-full flex justify-center items-center font-medium gap-1">
                        <h2 className=" text-[36.41px] leading-[44.06px]">76</h2>
                        <span className="text-[16px] leading-[22px]">%</span>
                    </div>

                    <div className="w-[553.14px] h-[114px]">

                        <div className="w-full h-[38px] p-2 pr-[101.16px] flex items-center gap-3">
                            <p className="text-[#7C7E8C] font-medium text-[15px] leading-[22px]">Buy</p>
                            <div className="bg-[#00B386] w-[349.14px] h-2 rounded-sm ml-4"></div>
                            <p className="text-[#7C7E8C] font-medium text-[14.25px] leading-[22px]">76%</p>
                        </div>

                        <div className="w-full h-[38px] p-2 pr-[101.16px] flex items-center gap-3">
                            <p className="text-[#7C7E8C] font-medium text-[15px] leading-[22px]">Hold</p>
                            <div className="bg-[#C7C8CE] w-[33px] h-2 rounded-sm ml-[10px]"></div>
                            <p className="text-[#7C7E8C] font-medium text-[14.25px] leading-[22px]">8%</p>
                        </div>

                        <div className="w-full h-[38px] p-2 pr-[101.16px] flex items-center gap-3">
                            <p className="text-[#7C7E8C] font-medium text-[15px] leading-[22px]">Sell</p>
                            <div className="bg-[#F7324C] w-[66.5px] h-2 rounded-sm ml-4"></div>
                            <p className="text-[#7C7E8C] font-medium text-[14.25px] leading-[22px]">16%</p>
                        </div>

                    </div>
                </div>   
            </div>
             

        </section>
    )
}

export default Sentiment;