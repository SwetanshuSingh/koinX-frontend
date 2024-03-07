import Image from "next/image";

const MemberCard = ({ name, picture }) => {
    return (
        <section className="min-w-[821px] min-h-[177.51px] rounded-[7.46px] flex items-center gap-4 p-[11.19px] bg-[#E8F4FD]">
            <div className="w-[128.61px] h-[155.12px] flex flex-col items-center gap-[13.19px]">
                <Image className="w-[99.76px] h-[105.09px] rounded-lg" src={picture} height={1000} width={1000} alt="photo" />
                <div className="flex flex-col gap-[4.12px]">
                    <p className="text-[#0F1629] text-center text-[15px] leading-[18.15px] font-semibold">{name}</p>
                    <p className="text-[#788F9B] text-center text-[12px] leading-[14.52px] font-medium">Designation here</p>
                </div>
            </div>

            <p className="w-[646px] h-[110px] font-normal text-[14px] leading-[22.4px] text-[#0F1629]">Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
        </section>
    )
}

export default MemberCard;