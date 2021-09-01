import "./App.css";
import Banner from "./components/Banner";
import Brand from "./components/Brand";
import Business from "./components/Business";
import Contract from "./components/Contract";
import EasyQuick from "./components/EasyQuick";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import News from "./components/News";
import Procedure from "./components/Procedure";
import Reason from "./components/Reason";
import Start from "./components/Start";
function App() {
  return (
    <div>
      <Nav />
      <Banner />
      <EasyQuick />
      <Business />
      <Procedure />
      <Contract />
      <Start />
      <News />
      <Brand />
      <Reason />
      <Footer />
    </div>
  );
}

export default App;
