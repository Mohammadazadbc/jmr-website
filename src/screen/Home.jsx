import Header from ".././componenet/header/Header"
import React from 'react'
import Footer from "../componenet/footer/Footer"
import MainHome from "../componenet/main/MainHome"
function Home() {
  return (
    <div> 
      <Header />
      <br />
      <MainHome />
      <br />
      <Footer/>
    </div>
  )
}

export default Home