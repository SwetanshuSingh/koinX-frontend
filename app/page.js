import TradingViewWidget from "./components/Chart";
import CryptoDetails from "./components/CryptoDetails";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Breadcrumb from "./components/ui/Breadcrumb";

const App = () => {
  return (
    <main className="w-full h-full bg-[#EFF2F5] flex flex-col items-center gap-[18px] font-0">
      <Navbar />
      <section className="w-[1328px] flex flex-col gap-[18px]">
        <Breadcrumb />
        <div className="w-full flex justify-between">
          <CryptoDetails />
          <Signup />
        </div>
      </section>
    </main>
  );
};

export default App;
