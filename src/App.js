import { Routes, Route } from "react-router-dom"
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Callback } from "./services/oauth2-service";
import { Toast } from "bootstrap";
import { useEffect } from "react";
import { Banks } from './components/BankPage'
import { Login } from './components/Login/Login'

function App() {
 return (
    <div className="App" style={{background:'#d7e2de'}}>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/dashboard" element={ <LandingPage/> } />
         <Route path="/banks" element={ <Banks/> } />
        <Route path="/oauth2/callback" element={ <Callback/> } />
      </Routes>
    </div>
  );
}

export default App;