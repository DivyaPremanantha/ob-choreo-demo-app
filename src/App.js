import { Navbar } from "./components/common/Navbar";
import {LandingPage} from "./components/LandingPage/LandingPage";
import {Footer} from "./components/common/Footer";

function App() {

  return (
    <div className="App" style={{background:'#d7e2de'}}>
      <Navbar username={"user 1"}></Navbar>
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
