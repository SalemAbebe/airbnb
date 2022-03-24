import "./App.css";
import Header from "./components/Header/Header";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourthSection from "./components/FourthSection/FourthSection";
import data from "./utils";
import FirstSection from "./components/FirstSection/FirstSection";
import FifthSection from "./components/FifthSection/FifthSection";
import SixSection from "./components/SixthSection/SixSection";
import SeventhSection from "./components/SeventhSection/SeventhSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <div className="customer-review">
        <div className="size1">
          <FourthSection
            image={data[0].image}
            rating={data[0].rating}
            review={data[0].review}
            userPhoto={data[0].userPhoto}
            userName={data[0].userName}
            userLocation={data[0].userLocation}
          />
        </div>
        <div className="size1">
          <FourthSection
            image={data[1].image}
            rating={data[1].rating}
            review={data[1].review}
            userPhoto={data[1].userPhoto}
            userName={data[1].userName}
            userLocation={data[1].userLocation}
          />
        </div>
        <div className="size1">
          {" "}
          <FourthSection
            image={data[2].image}
            rating={data[2].rating}
            review={data[2].review}
            userPhoto={data[2].userPhoto}
            userName={data[2].userName}
            userLocation={data[2].userLocation}
          />
        </div>
      </div>
      <hr />
      <FifthSection />
      <hr />
      <SixSection />
      <SeventhSection />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
