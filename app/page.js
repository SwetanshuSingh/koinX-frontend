import About from "./components/About";
import CryptoDetails from "./components/CryptoDetails";
import Navbar from "./components/Navbar";
import Performance from "./components/Performance";
import Sentiment from "./components/Sentiment";
import Signup from "./components/Signup";
import Team from "./components/Team";
import Tokenomics from "./components/Tokenomics";
import Breadcrumb from "./components/ui/Breadcrumb";
import CoinInfoBar from "./components/ui/CoinInfoBar";
import Trending from "./components/ui/Trending";

const App = () => {
  return (
    <main className="w-full h-full bg-[#EFF2F5] flex flex-col items-center gap-[18px] font-0">
      <Navbar />
      
      <Breadcrumb />
      <section className="w-[1328px] flex justify-between">
        <div className="left w-full h-full flex flex-col gap-[18px]">
          <CryptoDetails />
          <CoinInfoBar />
          <Performance />
          <Sentiment />
          <About />
          <Tokenomics />
          <Team />
        </div>

        <div className="right flex flex-col gap-[18px]">
          <Signup />
          <Trending />
        </div>
      </section>
    </main>
  );
};

export default App;