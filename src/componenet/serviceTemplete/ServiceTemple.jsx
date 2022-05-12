import React from 'react'
import "./serviceTamplate.css"
import bgImage  from "./assets/bg.jpg"

function ServiceTemple() {
  return (
    <div className='templateContainer' >
        <div className="temCoWrapper">
        <div className="bgContaier">
            <img src={bgImage} alt="" />
        </div>

        <div className="descriptionContinaer">
            <h1>Diepvriescellen van hoge kwaliteit</h1>
            <div className='descInfos' >
                <p>
                    Elke klant is uniek. Daarom bestaat de eerste stap bij OptimaCool altijd uit een analyse van uw specifieke behoeften. Waarvoor wilt u de diepvriescellen gebruiken? Over welke ruimte beschikt u?
                </p>
                <br />
                <p>
                Voor kleine opslagruimtes volstaat de ‘Minibox’. Wie het wat groter ziet, maakt beter gebruik van een modulaire diepvrieskamer. Daarvoor is ook maatwerk mogelijk.  
                </p>
            </div>
        </div>

        <div className="HeaderSection">
            <div className='headerSectionInfos'>
                <h4>EEN VRAAG?</h4>
                <h6>Aarzl niet om ons te contacteren</h6>
            </div>
        </div>

        <div className="bootomSection">
            <div className="bSleft">
                <div className="SLeftWrapper">
                    <h3>Op maat van uw bedrijf</h3>
                    <div className="SLeftWrapperText">
                        <p>Naargelang het type diepvriescellen, verschilt de dikte van de wand. Hoe dikker de isolatie, hoe lager het energieverbruik. Deze diktes komen voor: </p>
                        <ul>
                            <li>8 cm: voor kleine of plaatsbesparende installaties</li>
                            <li>10 cm: de meest voorkomende dikte</li>
                            <li>14 cm: voor snelvriezers</li>
                            <li>20 cm: geschikt voor industriële vrieshallen</li>
                        </ul>
                     <br />
                        <p>Bij diepvriescellen is steeds een goed geïsoleerde vloer nodig. De toplaag is in PVC, inox, staal of beton. Een antislip-uitvoering is steeds mogelijk. Moet u in de cel rijden met een heftruck? Dan wordt uw diepvrieskamer ingebouwd, zodat er geen niveauverschil is. Voor uw comfort kunnen we alle diepvriescellen ook uitwerken met wandrekken. En dit zowel in aluminium, als in kunststof of inox.</p>
                    </div>
                </div>
            </div>
            <div className="bSRight">
                <div className="bSRightBtn1">
                    <p>Neem een kijkje op onze verhuurpagina</p>
                </div>
                <div className="bSRightBtn2">
                    <p>Neem een kijke op onze verkooppagina</p> </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ServiceTemple