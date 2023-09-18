import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import "./header.css"
import Register from '../Register';

export default function Header() {
  const [Open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  const logged = () => {
    return "logado"
  }
  const logoff = () => {
    return "Deslogado..."
  }


  return (
    <div className='link'>
      <div className='div-log'>{login ? logged() : logoff()}</div>
      <button onClick={() => setLogin(!login)}
      className='botao-log'
      >{login ? "sair" : "entrar"}</button>
      <Link style={{ textDecoration: " none" }} to="/home">Home</Link>
      <Link style={{ textDecoration: " none" }} to="/contact">Contato</Link>
      <button
        className='button'
        onClick={() => setOpen(!Open)}>Cadastro</button>
      <Register isOpen={Open} setOpen={setOpen}></Register>
      <a href='https://www.instagram.com/evensaldanha/'><FaInstagram /> </a>
      <a href='https://www.linkedin.com/in/even-saldanha-b1936b226/' ><FaLinkedin /> </a>

    </div>
  )
}       
