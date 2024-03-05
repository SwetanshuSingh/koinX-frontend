import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="w-full h-20 flex justify-center bg-white border-b border-[rgba(16, 38, 73, 0.06)] shadow-[rgba(16, 38, 73, 0.06)]">
      <div className="container w-[1328px] h-full flex items-center justify-between">
        <Image
          className="w-[96px] h-[24px]"
          src="/logo/logo.png"
          height={1000}
          width={1000}
          alt="koinx logo"
        />

        <Image
          className="w-[28px] h-[30px] lg:hidden"
          src="/logo/menu.png"
          height={1000}
          width={1000}
          alt="koinx logo"
        />

        <ul className="hidden lg:flex items-center justify-center gap-[32px] text-[#0F1629] text-[16px] font-semibold">
          <li>Crypto Taxes</li>
          <li>Free Tools</li>
          <li>Resource Center</li>
          <button className="w-[136px] text-white bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] p-2 rounded-lg">Get Started</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
