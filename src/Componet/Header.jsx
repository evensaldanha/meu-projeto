import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import Register from './Register.jsx';
import { Wrapper, Status, ButtonLogin, ButtonCadastro } from './Header.styled';

export default function Header() {
  const [Open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);

  return (
    <Wrapper>
      <Status>{login ? "logado" : "Deslogado..."}</Status>
      <ButtonLogin
        onClick={() => setLogin(!login)}
      >{login ? "sair" : "entrar"}</ButtonLogin>
      <Link style={{ textDecoration: "none" }} to="/home">Home</Link>
      <Link style={{ textDecoration: "none" }} to="/contact">Contato</Link>
      <ButtonCadastro
        onClick={() => setOpen(!Open)}>Cadastro</ButtonCadastro>
      <Register isOpen={Open} setOpen={setOpen}></Register>
      <a href='https://www.instagram.com/evensaldanha/'><FaInstagram /> </a>
      <a href='https://www.linkedin.com/in/even-saldanha-b1936b226/' ><FaLinkedin /> </a>

    </Wrapper>
  )
}       
