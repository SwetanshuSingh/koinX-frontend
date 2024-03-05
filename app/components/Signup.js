import Image from "next/image";

const Signup = () => {
    return (
        <div className="w-[426px] h-[515px] bg-[#0052FE] text-white rounded-lg flex flex-col items-center justify-evenly px-[31px] py-4 font-0">
            <h2 className="w-[268px] text-2xl font-bold text-center leading-10">Get Started with KoinX for FREE</h2>
            <p className="w-[327px] text-sm font-normal text-center leading-6">With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.</p>
            <Image
                className="w-[178.66px] h-[166.22px]"
                src = "/assets/signup.png"
                width = {500}
                height = {500}
                alt = "vector" 
             />
            <button className="bg-white text-black w-[237px] h-[48px] flex gap-2 justify-center items-center text-[16px] font-semibold rounded-lg"><p>Get Started for FREE</p> <Image className="w-5 h-5" src="/assets/arrow-right.png" width={200} height={200} alt="arrow" /></button>
        </div>
    )
}

export default Signup;