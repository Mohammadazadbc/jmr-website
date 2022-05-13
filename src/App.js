
import { useState } from "react";
import MainHome from "./componenet/main/MainHome"
import Header from "./componenet/header/Header"
import Footer from "./componenet/footer/Footer";
import Koelcellen from "./componenet/koelcellen/Koelcellen";
import Koelmeubelen from "./componenet/services/Koelmeubelen/Koelmeubelen";
import "./App.css"

import Diepvriescellen from "./componenet/services/diepvriescellen/Diepvriescellen";
import KoeleBergingen from "./componenet/services/koeleBergingen/KoeleBergingen";
import Proceskoelingen from "./componenet/services/Proceskoelingen/Proceskoelingen"
import About from "./componenet/about/About";
function App() {
  const [footerid, setGoToFooter] = useState("footerid")
  const [goToService, setgoToService] = useState("serviceId")
  const [koelCellen, setKoelcellen] = useState(false)
  const [diepvriecellen, setDiepvriescellen] = useState(false)
  const [koelmeubelen, setKoelmeubelen] = useState(false)
  const [koeleBergingen, setkoeleBergingen] = useState(false)
  const [proceskoelingen, setProceskoelingen] = useState(false)
  const [aboutUs, setAboutUs] = useState(false)

  return ( 
    <div className="bigContainer">
    <Header 
     footerid={footerid} goToService={goToService}
     setKoelcellen={setKoelcellen} 
     setDiepvriescellen={setDiepvriescellen}
     setKoelmeubelen={setKoelmeubelen}
     setkoeleBergingen={setkoeleBergingen}
     setProceskoelingen={setProceskoelingen}
     setAboutUs={setAboutUs}
     koelCellen={koelCellen}
     diepvriecellen={diepvriecellen}
     koelmeubelen={koelmeubelen}
     koeleBergingen={koeleBergingen}
     proceskoelingen={proceskoelingen}


     />
    {
      koelCellen ? <Koelcellen  /> : diepvriecellen ? <Diepvriescellen /> :
      koelmeubelen ? <Koelmeubelen /> :
      koeleBergingen ? <KoeleBergingen /> :
      proceskoelingen ? <Proceskoelingen /> :
      aboutUs ? <About /> :
      <MainHome serviceId={goToService}
      setKoelcellen={setKoelcellen} 
      setDiepvriescellen={setDiepvriescellen}
      setKoelmeubelen={setKoelmeubelen}
      setkoeleBergingen={setkoeleBergingen}
      setProceskoelingen={setProceskoelingen}
      />
    }
    
    <Footer footerid={footerid} />
    </div>
  );
}

export default App;
