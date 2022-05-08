import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./header.css"
import {ImPhone} from "react-icons/im"
import logo from './jrm.png';
import {HiMenu} from "react-icons/hi"

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const ShowHideMenu = ()=>{
        setShowMenu(!showMenu)
    }
  return (
    <div className='col-lg-12 col-md-12 col-sm-12 headerContainer'>
        <div className="firstHeader">
        <div className="headerTop">
            <p> <ImPhone color='red' size={20} /> <strong>04 789 003 05 &nbsp; </strong> 24 / 24 dagen op 7 </p>
        </div>

        <div className="headerBottom">
            <Link style={{textDecoration:'none'}} to="" > <span>Aanpak &nbsp;&nbsp; | &nbsp;  </span> </Link>
            <Link style={{textDecoration:'none'}} to="" > <span>Over ons &nbsp;&nbsp; | &nbsp;</span> </Link>
            <Link style={{textDecoration:'none'}} to="" > <span>Verhuur &nbsp;&nbsp; | &nbsp;</span> </Link>
            <Link style={{textDecoration:'none'}} to="" > <span>Verkoop &nbsp;&nbsp; | &nbsp;</span> </Link>
            <Link style={{textDecoration:'none'}} to="" > <span> Blog &nbsp;&nbsp; | &nbsp;</span> </Link>
            <Link style={{textDecoration:'none'}} to="" > <span> Realisaties &nbsp;&nbsp; | &nbsp;</span> </Link>
            <Link style={{textDecoration:'none'}} to="" > <span> D.D.cool &nbsp;&nbsp; | &nbsp;</span> </Link>
            <Link style={{textDecoration:'none'}} to="" > <span> Asogem-Equipment </span> </Link>
           
        </div>
        </div>
       
        <div className="secondHeader">
            <div className='secondHeaderTop'>
                <img src={logo} alt="" />
            </div>
            <div className='secondHeaderBottom'>
                <Link style={{textDecoration:'none'}} to=""><span>HOME </span></Link>
                <Link style={{textDecoration:'none'}} to=""><span className='addColor'>KOELTECHNIEK</span></Link>
                <Link style={{textDecoration:'none'}} to=""><span>WARMTEPOMP </span></Link>
                <Link style={{textDecoration:'none'}} to=""><span>AIRCO </span></Link>
                <Link style={{textDecoration:'none'}} to=""><span>VENTILATIE </span></Link>
                <Link style={{textDecoration:'none'}} to=""><span>SERVICE </span></Link>
                <Link style={{textDecoration:'none'}} to=""><span>CONTACT </span></Link>
              
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
                <Link style={{textDecoration:'none', marginBottom:10}} to=""><span>HOME </span></Link>
                <Link style={{textDecoration:'none', marginBottom:10}} to=""><span>KOELTECHNIEK</span></Link>
                <Link style={{textDecoration:'none', marginBottom:10}} to=""><span>WARMTEPOMP </span></Link>
                <Link style={{textDecoration:'none', marginBottom:10}} to=""><span>AIRCO </span></Link>
                <Link style={{textDecoration:'none', marginBottom:10}} to=""><span>VENTILATIE </span></Link>
                <Link style={{textDecoration:'none', marginBottom:10}} to=""><span>SERVICE </span></Link>
                <Link style={{textDecoration:'none', marginBottom:10}} to=""><span>CONTACT </span></Link>
              
            </div>
            <div className="items1">
            <Link style={{textDecoration:'none', marginBottom:10}} to="" > <span>Aanpak  </span> </Link>
            <Link style={{textDecoration:'none',marginBottom:10 }} to="" > <span>Over ons </span> </Link>
            <Link style={{textDecoration:'none',marginBottom:10}} to="" > <span>Verhuur </span> </Link>
            <Link style={{textDecoration:'none',marginBottom:10}} to="" > <span>Verkoop </span> </Link>
            <Link style={{textDecoration:'none' ,marginBottom:10}} to="" > <span> Blog </span> </Link>
            <Link style={{textDecoration:'none', marginBottom:10}} to="" > <span> Realisaties </span> </Link>
            <Link style={{textDecoration:'none' ,marginBottom:10}} to="" > <span> D.D.cool </span> </Link>
            <Link style={{textDecoration:'none' ,marginBottom:10}} to="" > <span> Asogem-Equipment </span> </Link>
           
        </div>
            </div>
        </div>
    </div>
  )
}

export default Header