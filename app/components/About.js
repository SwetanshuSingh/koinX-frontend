import Image from "next/image"

const About = () => {
    return (
        <section className="w-[881px] h-[995px] bg-white text-[#0F1629] rounded-lg p-6 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold">About Bitcoin</h2>

            <div className="flex flex-col gap-[10px]">
                <h3 className="text-[18px] font-bold">What is Bitcoin?</h3>
                <p className="max-w-[830px] text-[16px] font-medium text-[#3E424A]">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
                <hr className="w-full border-b border-[#C9CFDD99]" />
            </div>

            <div className="flex flex-col gap-[10px]">
                <h3 className="text-[18px] font-bold">Lorem ipsum dolor sit amet</h3>
                <p className="max-w-[830px] text-[16px] font-medium text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
                <p className="max-w-[830px] text-[16px] font-medium text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
                <p className="max-w-[830px] text-[16px] font-medium text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.</p>
                <hr className="w-full border-b border-[#C9CFDD99]" />
            </div>

            <h2 className="text-2xl font-semibold">Already Holding Bitcoin?</h2>

            <div className="w-[807px] h-[151px] flex gap-4">
                <div className="w-[388px] h-[151px] flex gap-5 items-center rounded-[6.65px] bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] px-3">
                    <Image className="w-32 h-32 rounded-lg" src="/assets/profit.png" width={500} height={500} alt="img" />

                    <div className="w-[195px] h-[104px] flex flex-col gap-4">
                        <h2 className="text-white font-bold text-xl">Calculate your Profits</h2>
                        <button className="w-[132px] h-[32px] rounded-lg bg-white text-[#0F1629] text-[14px] leading-7 font-semibold flex items-center justify-center gap-1"><p>Check Now</p> <Image className="w-5 h-5" src="/assets/arrow-right.png" width={500} height={500} alt="arrow" /></button>
                    </div>

                </div>

                <div className="w-[388px] h-[151px] flex gap-5 items-center rounded-[6.65px] bg-gradient-to-br from-[#FF9865] to-[#EF3031] px-3">
                    <Image className="w-32 h-32 rounded-lg" src="/assets/profit.png" width={500} height={500} alt="img" />

                    <div className="w-[195px] h-[104px] flex flex-col gap-4">
                        <h2 className="text-white font-bold text-xl">Calculate your tax liability</h2>
                        <button className="w-[132px] h-[32px] rounded-lg bg-white text-[#0F1629] text-[14px] leading-7 font-semibold flex items-center justify-center gap-1"><p>Check Now</p> <Image className="w-5 h-5" src="/assets/arrow-right.png" width={500} height={500} alt="arrow" /></button>
                    </div>
                </div>

            </div>
            <hr className="w-full border-b border-[#C9CFDD99]" />
            <p className="max-w-[830px] text-[16px] font-medium text-[#3E424A]">Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
        </section>
    )
}

export default About;