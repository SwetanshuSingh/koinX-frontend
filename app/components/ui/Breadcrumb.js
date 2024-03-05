import Image from "next/image";

const Breadcrumb = () => {
    return (
        <div className="flex justify-start items-center gap-2 text-sm w-full">
            <p className="text-[#3E5765] font-normal">Cryptocurrencies</p>
            <Image
                className="w-[10px] h-[10.5px]"
                src = "/assets/arrow.png"
                width = {500}
                height = {500}
                alt = "arrow"
             />
            <p className="text-[#0F1629] font-medium">Bitcoin</p>
        </div>
    )
}

export default Breadcrumb;