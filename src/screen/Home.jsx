import Header from ".././componenet/header/Header"
import React, { useState } from 'react'
import Footer from "../componenet/footer/Footer"
import MainHome from "../componenet/main/MainHome"
function Home() {
  const [goToServiceSection ,setgoToServiceSection] = useState("serivce")
  const [goToFooterSection ,setgoToFooterSection] = useState("footer")
  return (
    <div> 
      <Header 
      goToServiceSection={goToServiceSection}
      goToFooterSection={goToFooterSection}
       />
      <br />
      <MainHome services={goToServiceSection} />
      <br />
      <Footer footerid={goToFooterSection} />
    </div>
  )
}

export default Home