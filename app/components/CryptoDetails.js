import Image from "next/image"
import Chart from "./Chart";

const CryptoDetails = () => {
    return (
        <main className="max-w-[881px] h-[711px] flex flex-col gap-10 bg-white rounded-lg p-5 text-[#0B1426]">

            <div className="heading flex items-center gap-2">
                <Image className="w-9 h-9" src="/assets/btc.png" width={500} height={500} alt="btc"/>
                <h2 className=" text-2xl font-semibold">Bitcoin</h2>
                <p className="text-[#5D667B] font-semibold text-[16px]">BTC</p>
            </div>

            <div className="price-info flex gap-8">
                <div className="price">
                    <h2 className="text-[28px] leading-[38px] font-semibold">$46,953.04</h2>
                    <p className="text-[16px] leading-[27px] font-medium">₹ 39,42,343</p>
                </div>

                <div className="flex gap-[17px]">
                    <div className="w-[84px] h-[28px] bg-[#EBF9F4] p-2 rounded flex justify-center items-center gap-1">
                        <Image className=" w-[11px] h-2" src="/assets/triangle.png" width={500} height={500} alt="triangle"/>
                        <p className="text-[#14B079] font-semibold text-[16px] leading-[19.36px]">2.51%</p>
                    </div>
                    <p className="text-[#768396] font-medium text-sm leading-[27px]">(24H)</p>
                </div>
            </div>

            <Chart />
        </main>
    )
}

export default CryptoDetails;