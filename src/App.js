
import { useState } from "react";
import MainHome from "./componenet/main/MainHome"
import Header from "./componenet/header/Header"
import Footer from "./componenet/footer/Footer";
import Koelcellen from "./componenet/koelcellen/Koelcellen";
import "./App.css"
function App() {
  const [footerid, setGoToFooter] = useState("footerid")
  const [goToService, setgoToService] = useState("serviceId")
  const [koelCellen, setKoelcellen] = useState(false)
  return ( 
    <div className="bigContainer">
    <Header  footerid={footerid} goToService={goToService} />
    {
      koelCellen ? <Koelcellen /> : <MainHome serviceId={goToService}
      setKoelcellen={setKoelcellen}
      />
    }
    
    <Footer footerid={footerid} />
    </div>
  );
}

export default App;
