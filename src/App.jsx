import "./App.css";
import About from "./components/About/About";
import FirstSection from "./components/FirstSection/FirstSection";
import Footer from "./components/Footer/Footer";
import Offer from "./components/Offer/Offer";

const App = () => {
  return (
    <>
      <FirstSection />
      <About />
      <Offer />
      <Footer />
    </>
  );
};

export default App;
