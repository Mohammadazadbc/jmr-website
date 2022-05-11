import React from 'react'
import "./koelcellen.css"
import proceskoeling from  "./koelcellen.jpg"
import cold1 from "./cold1.webp"
import cold2 from "./cold1.webp"
import cold3 from "./cold3.webp"
import cold4 from "./cold4.jpg"
import cold6 from "./cold6.jpg"
import cold7 from "./cold7.jpg"
import cold8 from "./cold8.jpg"


function Koelcellen() {
  return (
    <div className='koelcellenContainer'>
        <section className='firstSection'>
            <div className="bg-img">
                <img src={proceskoeling} alt="" />
            </div>
            <div className="koelcellenMain">
                <h1>Koelhuis op maat</h1>
                <div className="koelDesctioption">
                    <p>Uw volledige voorraad ordentelijk bijeengebracht, steeds op de juiste temperatuur. Maak het u gemakkelijk en kies voor een volledig uitgeruste koelcel.</p>
                    <br />
                    <p className='secondP'>Voor uw privéwoning of voor professioneel gebruik, OptimaCool levert koelcellen in alle afmetingen en kleuren. Om aan al uw verwachtingen te voldoen, bieden we u niet alleen hoogkwalitatieve standaardmodellen van onder meer Isocab, Isobar en Coldkit, maar ook maatwerk. Ook voor de verhuur van koelcellen zijn wij uw partner.</p>
                </div>
            </div>

            {/* NEXT SECTINO */}
            <div className='thiredDiv'>
                <div className='thiredDivTitle' >
                <p>Voordelen voor particulieren</p>
                <ul>
                    <li>Uw volledige voorraad is steeds binnen handbereik</li>
                    <li>Alles wordt plots veel overzichtelijker</li>
                    <li>Uw producten blijven langer vers</li>
                    <li>Het verbruik is minder dan bij een klassieke koelkast</li>
                </ul>
                </div>
                <div className='thiredDivTitle'>
                <p>Voordelen voor professionelen</p>
                    <ul>
                        <li>Laag energieverbruik, centrale mogelijk bij meerdere cellen</li>
                        <li>Modulaire opbouw = oneindig veel mogelijkheden</li>
                        <li>onderhoudsvriendelijk</li>
                        <li>overzichtelijke stockage</li>
                    </ul>
                </div>
                
             
            </div>
        </section>

        {/* SECTION TOW */}

        <section className='secondSectino'>
            <div className="SectionTowHeader">
                <h3>EEN VRAAG?</h3>
                <p>Aarzl niet om ons te contactern</p>
            </div>

                <div className="imagesSection">
                    <div className="imgleft">
                        <img src={cold6} alt="" />
                    </div>
                    <div className="imgRight">
                        <img src={cold1} alt="" />
                        <img src={cold2} alt="" />
                        <img src={cold3} alt="" />
                        <img src={cold4} alt="" />
                        <img src={cold7} alt="" />
                        <img src={cold8} alt="" />
                    </div>
                </div>
        </section>

         {/* SECTION THIRED */}

         <div className="sectionThree">
             <div className="sectionThreeWrapper">
             <div className="sectionThredleft">
                 <div className="descOne">
                     <h2>Een koelcel bij u thuis? Niets dan voordelen</h2>
                     <p>Sinds enkele jaren heeft de koelcel haar intrede gedaan op de particuliere markt. En terecht. De voordelen zijn namelijk niet te onderschatten. Eerst en vooral maakt een koelcel uw voorraad overzichtelijk. U weet welke levensmiddelen u in huis hebt en wanneer ze vervallen. Uw groenten en fruit, die blijven langer vers. En bovendien zal uw energieverbruik lager liggen dan bij een klassieke koelkast.</p>
                     <br />
                     <br />
                     <p>Dat het oog ook wat wil, is geen geheim. Daarom biedt OptimaCool u koelcellen in alle maten, vormen en kleuren. We werken ook op maat. Zo kunnen we uw koelcel perfect inwerken in een bestaande ruimte.</p>
                 </div>
             </div>
             <div className="sectionThredRight">
                 <div className="ThredRightWrapper">
                    <div className="ThredRightWrapperTop">
                        <h4>Neem een kijke op onze verhuurpagina</h4>
                    </div>
                    <div className="ThredRightWrapperBottom">
                        <h4>
                            Neem een kijkje op onze verkooppagina
                        </h4>
                    </div>
                 </div>
             </div>
             </div>
         </div>
      
    </div>
  )
}

export default Koelcellen