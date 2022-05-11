import React from 'react'
import "./footer.css"
import {AiOutlineMail, AiFillFacebook} from "react-icons/ai"
import {ImPhone} from "react-icons/im"
import { Link } from 'react-router-dom'
import {RiInstagramFill} from "react-icons/ri"


function Footer(props) {
  return (
    <div className='footerContainer' >
        <div id={props.footerid} className="footerTop">
            <h4>CONTACTEER OPTIMACOOL</h4>
            <div className='footerTopInfos' > 
                <p  >Stationsstraat 100 bus 0101,1730 Asse - België</p>
                <p ><AiOutlineMail color='red' />  info.jmr7@gmail.com </p>
                <p ><ImPhone color='red' /> : +32 47 890 03 05</p>
                <p>

                <a  href='' > <AiFillFacebook color='white' size={23} /> </a>
                <a href='' > <RiInstagramFill color='white' size={23} /> </a>
                </p>
               
               
            </div>
        </div>
    </div>
  )
}

export default Footer