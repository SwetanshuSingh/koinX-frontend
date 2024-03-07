import CoinCard from "./ui/CoinCard";
import CoinCarousel from "./ui/CoinCarousel";

const Footer = () => {
    return (
        <footer className="w-full h-[628px] bg-white mt-10 flex justify-center items-center">
            <div className="w-[1300px] h-[492px]">
                <div className="w-full h-[246px] flex flex-col gap-5 pb-[30px]">
                    <h2 className="font-semibold text-2xl leading-9 text-[#202020]">You May Also Like</h2>
                    <CoinCarousel />
                </div>

                <div className="w-full h-[246px] flex flex-col gap-5 pb-[30px]">
                    <h2 className="font-semibold text-2xl leading-9 text-[#202020]">Trending Coins</h2>
                    <CoinCarousel />
                </div>
            </div>
        </footer>
    )
}

export default Footer;