import React, { useState } from 'react'
import "./serviceTamplate.css"

function ServiceTemple(props) {
    
  return (
    <div className='templateContainer' >
        <div className="temCoWrapper">
        <div className="bgContaier">
            <img src={props.bgImage} alt="" />
        </div>

        <div className="descriptionContinaer">
            <h1> {props.title} </h1>
            <div className='descInfos' >
                <p>
                    {props.desinfos}
                </p>
                <br />
                <p>
                {props.desinfos2} 
                </p>
            </div>
        </div>

        <div className={props.showNavBar ? "HeaderSection" : "hide"}  >
            <div className='headerSectionInfos'>
                <h4>EEN VRAAG?</h4>
                <h6>Aarzl niet om ons te contacteren</h6>
            </div>
        </div>

        <div className="bootomSection">
            <div className="bSleft">
                <div className="SLeftWrapper">
                    <h3> {props.SleftH3} </h3>
                    <div className="SLeftWrapperText">
                        <p> {props.SleftP1} </p>
                        <ul>
                            <p style={{position:'relative', left:-15, fontWeight:'bold'}} > {props.listTitle} </p>
                            <li> {props.listLi1} </li>
                            <li>{props.listLi2}</li>
                            <li> {props.listLi3} </li>
                            <li>{props.listLi4}</li>
                            <li>{props.listLi5}</li>
                            <li>{props.listLi6}</li>
                            <li>{props.listLi7}</li>
                            <li>{props.listLi8}</li>
                        </ul>
                     <br />
                     <h3> {props.SleftH4} </h3>
                        <p>{props.SleftP2}</p>
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