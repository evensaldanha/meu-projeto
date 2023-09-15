import React, { useState } from 'react'
import { Link} from "react-router-dom";
import {FaInstagram, FaLinkedin} from "react-icons/fa"
import "./header.css"
import Register from '../Register';

export default function Header() {
    const[Open,setOpen]= useState(false);
    

    const times=()=>{
      const time=new Date().getHours()

      if(time >= 0 && time < 13){
        return <p>Bom dia</p>
      } else if( time >= 13 && time < 18){
        return <p>Boa tarde</p>
      }else{
         return <p>Boa noite</p>
      }
    }

  return (
    <div className='link'>
       <div style={{display:"flex", justifyContent:"flex-start",alignItems:"flex-start"}}> {times()}</div>
        <Link style={{textDecoration:" none"}} to="/home">Home</Link>
        <Link style={{textDecoration:" none"}} to="/contact">Contato</Link>
        <button 
        className='button'
        onClick={()=> setOpen(!Open)}>Cadastro</button>
        <Register isOpen={Open} setOpen={setOpen}></Register>
        <a href='https://www.instagram.com/evensaldanha/'><FaInstagram/> </a>
        <a  href='https://www.linkedin.com/in/even-saldanha-b1936b226/' ><FaLinkedin/> </a>
   
    </div>
  )
}       
