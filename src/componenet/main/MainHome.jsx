import React from 'react'
import "./mainhome.css"
import {BsFillArrowRightSquareFill} from  "react-icons/bs"
import bgImg from  "./assete/bg.jpg"
import koelcellen from  "./assete/koelcellen.jpg"
import Diepvriescellen from  "./assete/Diepvriescellen.jpg"
import koelebergingen from  "./assete/koelebergingen.jpg"
import Koelmeubelen from  "./assete/Koelmeubelen.jpg"
import proceskoeling from  "./assete/proceskoeling.jpg"

function MainHome(
    {
        setKoelcellen,
        setDiepvriescellen,
        setKoelmeubelen,
        setkoeleBergingen,
        setProceskoelingen
    }
    , props) {
    const GoToKoelCellenPage =()=>{
        setKoelcellen(true)
    }   
    const GoDiepvriesPage =()=>{
        setDiepvriescellen(true)
    } 
    const GoKoelmeubelenPage =()=>{
        setKoelmeubelen(true)
    }
      const GoKoeleBergingenPage =()=>{
        setkoeleBergingen(true)
    } 
     const GoProceskoelingenPage =()=>{
        setProceskoelingen(true)
    }
  return (
    <div className='mainHomeContainer' >
        <div className="mainWrapper">
        <div className='MHTop'>
            <img src={bgImg} alt="" />
        </div>
        <div id={props.serviceId} className='MHCenter'>
            <h3>Uw specialist in koeltechniek</h3>
            <p> Wij voeren kwaliteitswerk uit. JRM als specialist in  koeling installaties in Vlaanderen en omstreken.</p>
            <div  className='sericeProvide'>
                <div className="service">
                    <img src={koelcellen} alt="" />
                    <p onClick={GoToKoelCellenPage} ><span>Koelcellen</span><BsFillArrowRightSquareFill color='#005493' size={25} /> </p>
                </div>
                <div className="service">
                    <img src={Diepvriescellen} alt="" />
                    <p onClick={GoDiepvriesPage}><span>Diepvriescellen</span><BsFillArrowRightSquareFill color='#005493' size={25} /> </p>
                </div>
                <div className="service">
                    <img src={Koelmeubelen} alt="" />
                    <p onClick={GoKoelmeubelenPage} ><span>Koelmeubelen</span><BsFillArrowRightSquareFill color='#005493' size={25} /> </p>
               
                </div>
                <div className="service">
                    <img src={koelebergingen} alt="" />
                    <p onClick={GoKoeleBergingenPage}><span>Koele bergingen</span><BsFillArrowRightSquareFill color='#005493' size={25} /> </p>
                    
                </div>
                <div className="service">
                    <img src={proceskoeling} alt="" />
                    <p onClick={GoProceskoelingenPage}><span>proceskoeling</span><BsFillArrowRightSquareFill color='#005493' size={25} /> </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MainHome