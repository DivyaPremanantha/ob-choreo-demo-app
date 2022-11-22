import { Navbar } from "./components/common/Navbar";
import {LandingPage} from "./components/LandingPage/LandingPage";
import {LoginPage} from "./components/Login/LoginPage";
import {LoginAsgardeo} from "./components/Login/LoginAsgardeo";

import {Footer} from "./components/common/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "@asgardeo/auth-react";

const config = {
     signInRedirectURL: "http://localhost:3000/dashboard",
     signOutRedirectURL: "https://localhost:3000/login",
     clientID: "6TgsdFvzGEwf86p_L9qjnQdXshYa",
     baseUrl: "https://api.asgardeo.io/t/sachinisiriwardene",
     scope: [ "profile" ]
};
function App() {
  /*let Component
  switch (window.location.pathname) {
    case "/login":
      Component = LoginPage
      break
    case "/":
      Component = LandingPage
      break
  }*/


  return (
    <div className="App" style={{background:'#d7e2de'}}>
      <Navbar username={"user 1"}></Navbar>
         <BrowserRouter>
              <Routes>
                <Route path="login" element={<LoginAsgardeo />} />
                <Route path="dashboard/" element={<LandingPage />} />
                <AuthProvider config={ config }>
                            <Route path="/" element={<LoginAsgardeo />} />
                </AuthProvider>


              </Routes>
         </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
