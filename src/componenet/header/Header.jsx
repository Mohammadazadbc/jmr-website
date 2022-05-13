import React, { useState } from 'react'

import "./header.css"
import {ImPhone} from "react-icons/im"
import logo from './jrm.png';
import {HiMenu} from "react-icons/hi"
import { a } from "react-router-dom"

function Header(
    {
        footerid,
        goToService,
        setDiepvriescellen,
        setKoelmeubelen,
        setkoeleBergingen,
        setProceskoelingen
    }
    
    ) {
    const [showMenu, setShowMenu] = useState(false)
    const ShowHideMenu = ()=>{
        setShowMenu(!showMenu)
    }
    const GoToHomePage =()=>{
        setDiepvriescellen(false)
        setKoelmeubelen(false)
        setkoeleBergingen(false)
        setProceskoelingen(false)
    }
  return (
    <div className='col-lg-12 col-md-12 col-sm-12 headerContainer'>
        <div className="firstHeader">
        <div className="headerTop">
            <p> <ImPhone color='red' size={20} /> <strong>04 789 003 05 &nbsp; </strong> 24 / 24 dagen op 7 </p>
        </div>

        <div className="headerBottom">
            <a style={{textDecoration:'none'}} href=''> <span>Aanpak &nbsp;&nbsp; | &nbsp;  </span> </a>
            <a style={{textDecoration:'none'}} href=''> <span>Over ons &nbsp;&nbsp; | &nbsp;</span> </a>
            <a style={{textDecoration:'none'}} href=''> <span>Verhuur &nbsp;&nbsp; | &nbsp;</span> </a>
            <a style={{textDecoration:'none'}} href=''> <span>Verkoop &nbsp;&nbsp; | &nbsp;</span> </a>
            <a style={{textDecoration:'none'}} href=''> <span> Blog &nbsp;&nbsp; | &nbsp;</span> </a>
            <a style={{textDecoration:'none'}} href=''> <span> Realisaties &nbsp;&nbsp; | &nbsp;</span> </a>
            <a style={{textDecoration:'none'}} href=''> <span> D.D.cool &nbsp;&nbsp; | &nbsp;</span> </a>
            <a style={{textDecoration:'none'}} href=''> <span> Asogem-Equipment </span> </a>
           
        </div>
        </div>
       
        <div className="secondHeader">
            <div className='secondHeaderTop'>
                <img src={logo} alt="" />
            </div>
            <div className='secondHeaderBottom'>
                <span onClick={GoToHomePage}>HOME </span>
               <span >KOELTECHNIEK</span>
               <span>WARMTEPOMP </span>
               <span>AIRCO </span>
               <span>VENTILATIE </span>
                <a style={{textDecoration:'none'}}  href={"#"+goToService} ><span>SERVICE </span></a>
                <a style={{textDecoration:'none'}} href={'#'+footerid}  ><span>CONTACT </span></a>
               
              
            </div>
        </div>

        {/* UNDER 770PX  */}
            <div className="firstHeaderSm">
                <div className='FHSMtop'>
                    <img src={logo} alt="" />
                </div>
                <div className='FHSMBottom'>
                    <p style={{color:'#005493', fontWeight: 'bolder', fontSize:18}} >04 789 003 05</p>
                    <p style={{color:'#005493'}}>24 / 24 -7 dagen op 7</p>
                </div>
            </div>

        <div className="secondtHeaderSm">
            <div className='menuIcon'>
                <p>Menu</p>
                <HiMenu onClick={ShowHideMenu} style={{cursor:'pointer'}} size={35} />
            </div>
            <div className={showMenu ? 'itemList' : "hide"}  >
            <div className='items'>
               
              <span onClick={GoToHomePage} >HOME </span>
                <span>KOELTECHNIEK</span>
               <span>WARMTEPOMP </span>
               <span>AIRCO </span>
               <span>VENTILATIE </span>
               <span>SERVICE </span>
               <span>CONTACT </span>
              
            </div>
            <div className="items1">
                <span>Aanpak  </span> 
                <span>Over ons </span> 
                <span>Verhuur </span> 
                <span>Verkoop </span> 
                <span> Blog </span>
                <span> Realisaties </span> 
                <span> D.D.cool </span>
                <span> Asogem-Equipment </span> 
    
        </div>
            </div>
        </div>
    </div>
  )
}

export default Header