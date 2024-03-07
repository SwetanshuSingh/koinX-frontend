import Image from "next/image"

const Tokenomics = () => {
    return (
        <section className="w-[881px] h-[539px] rounded-lg bg-white text-[#0F1629] flex flex-col gap-6 p-6">
            <h2 className="text-2xl font-semibold">Tokenomics</h2>

            <div className="w-[833px] h-[402px] flex flex-col">
                <h3 className="text-[#1D1D1D] font-semibold text-xl leading-9">Intial Distribution</h3>
                
                <div className="w-[810px] h-[210px] flex items-center gap-6">
                    <Image className="h-[179px] w-[179px]" src="/assets/ellipse.png" width={1000} height={1000} alt="ellipse" />
                    <div className="w-[216px] h-[111px] gap-6 flex flex-col justify-center">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#0082FF] rounded-full"></div>
                            <h4 className="font-normal text-[16px] leading-5 text-[#202020]">Crowdsale investors: 80%</h4>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-[#FAA002] rounded-full"></div>
                            <h4 className="font-normal text-[16px] leading-5 text-[#202020]">Foundation: 20%</h4>
                        </div>
                    </div>
                </div>

                <p className="font-medium text-[16px] leading-[25.6px] text-[#3E424A]">Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.</p>
            </div>
        </section>
    )
}

export default Tokenomics;