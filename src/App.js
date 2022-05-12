
import { useState } from "react";
import MainHome from "./componenet/main/MainHome"
import Header from "./componenet/header/Header"
import Footer from "./componenet/footer/Footer";
import Koelcellen from "./componenet/koelcellen/Koelcellen";
import "./App.css"
import ServiceTemple from "./componenet/serviceTemplete/ServiceTemple";
function App() {
  const [footerid, setGoToFooter] = useState("footerid")
  const [goToService, setgoToService] = useState("serviceId")
  const [koelCellen, setKoelcellen] = useState(false)
  const [diepvriecellen, setDiepvriescellen] = useState(false)
  return ( 
    <div className="bigContainer">
    <Header 
     footerid={footerid} goToService={goToService}
     setDiepvriescellen={setDiepvriescellen}
     />
    {
      koelCellen ? <Koelcellen /> : diepvriecellen ? <ServiceTemple /> : <MainHome serviceId={goToService}
      setKoelcellen={setKoelcellen} 
      setDiepvriescellen={setDiepvriescellen}
      />
    }
    
    <Footer footerid={footerid} />
    </div>
  );
}

export default App;
