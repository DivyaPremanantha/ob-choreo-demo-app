import { Navbar } from "./components/common/Navbar";
import {LandingPage} from "./components/LandingPage/LandingPage";
import {Accounts} from "./components/Accounts/Account";
import {Offers} from "./components/Offers/Offers";
import {Investments} from "./components/Investments/Investments";
import {Footer} from "./components/common/Footer";

function App() {
  let Component
  switch (window.location.pathname) {
    case "/Home":
    case "/":
      Component = LandingPage
      break
    case "/Accounts":
      Component = Accounts
      break
    case "/Offers":
      Component = Offers
      break
    case "/Investments":
      Component = Investments
      break
  }

  return (
    <div className="App" style={{background:'#d7e2de'}}>
      <Navbar username={"user 1"}></Navbar>
      <Component />
      <Footer />
    </div>
  );
}

export default App;
