const WeeklyPriceIndicator = () => {
  return (
    <div className="row flex justify-between items-center">
      <div className="w-[116px] h-[71px] text-[#44475B] flex flex-col gap-[10px] p-[13px]">
        <h3 className="text-[13.78px] font-normal leading-5">52W Low</h3>
        <h4 className="text-[15.63px] font-medium leading-[22px]">16,930.22</h4>
      </div>
      <div className="w-[582.8px] h-[4.63px] rounded-[10px] bg-gradient-to-r from-[#FF4949] from-15% via-[#FF4E11] via-30% via-[#FC870A] via-45% via-[#FFAF11] via-60% via-[#C2CB21] via-75%  to-[#11EB68]"></div>
      <div className="w-[116px] h-[71px] text-[#44475B] flex flex-col gap-[10px] p-[13px]">
        <h3 className="text-[13.78px] font-normal leading-5">52W High</h3>
        <h4 className="text-[15.63px] font-medium leading-[22px]">49,743.22</h4>
      </div>
    </div>
  );
};

export default WeeklyPriceIndicator;