import React from 'react'
import { Link} from "react-router-dom";
import {FaInstagram, FaLinkedin} from "react-icons/fa"
import "./header.css"

export default function Header() {
  return (
    <div className='link'>
        <Link style={{textDecoration:" none"}} to="/home">Home</Link>
        <Link style={{textDecoration:" none"}} to="/contact">Contato</Link>
        <a href='https://www.instagram.com/evensaldanha/'><FaInstagram/> </a>
        <a  href='https://www.linkedin.com/in/even-saldanha-b1936b226/' ><FaLinkedin/> </a>
        <Link to="/cadastro">Cadastro</Link>
    </div>
  )
}
