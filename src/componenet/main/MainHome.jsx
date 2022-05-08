import React from 'react'
import "./mainhome.css"
import bgImg from  "./assete/bg.jpg"
import koelcellen from  "./assete/koelcellen.jpg"
import Diepvriescellen from  "./assete/Diepvriescellen.jpg"
import koelebergingen from  "./assete/koelebergingen.jpg"
import Koelmeubelen from  "./assete/Koelmeubelen.jpg"
import proceskoeling from  "./assete/proceskoeling.jpg"

function MainHome() {
  return (
    <div className='mainHomeContainer' >
        <div className="mainWrapper">
        <div className='MHTop'>
            <img src={bgImg} alt="" />
        </div>
        <div className='MHCenter'>
            <h3>Uw specialist in koeltechniek</h3>
            <p>Koeltechniek kent geen geheimen meer voor OptimaCool. Al sinds 1999 plaatsen wij als specialist in koeling installaties in Vlaanderen en omstreken. En al die jaren komt service bij ons op de eerste plaats.</p>
            <div className='sericeProvide'>
                <div className="service">
                    <img src={koelcellen} alt="" />
                    <p>Koelcellen</p>
                </div>
                <div className="service">
                    <img src={Diepvriescellen} alt="" />
                    <p>Diepvriescellen</p>
                </div>
                <div className="service">
                    <img src={Koelmeubelen} alt="" />
                    <p>Koelmeubelen</p>
                </div>
                <div className="service">
                    <img src={koelebergingen} alt="" />
                    <p>Koele bergingen</p>
                </div>
                <div className="service">
                    <img src={proceskoeling} alt="" />
                    <p>proceskoeling</p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MainHome