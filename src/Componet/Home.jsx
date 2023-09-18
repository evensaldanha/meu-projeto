// import Eu from "../imagrnd/Eu.jpg"
import { useState } from "react"
import home from "../Componet/home.css"

export default function Home() {
    const [cor,setcor]= useState(1);

    const preto={color:"#000"};
    const cinza={color:"#acacac"};
    const marron={color:"#965aas"}

    const retCor=(c)=>{
        if(cor==1){
          return  preto
        } else if(cor==2){
            return cinza
        }else{
            return marron
        }
    }

    const mudarCor=()=>{
        setcor(cor+1)
        if(cor>2){
            setcor(1)
        }
    }

    setInterval(mudarCor,3000)

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
        <div>
            <h1 
            className="bem-vindo"
            style={retCor(cor)}>Bem vindo!</h1>
            <div style={{display:"flex", justifyContent:"flex-start",alignItems:"flex-start"}}> {times()}</div>
            <p>Me chamo Even Saldanha, você está conhecendo meu primeiro projeto em react.
                Este projeto foi desenvolvido por mim para colocar em prática o que estou estudando. </p>
            <p>Obrigada pela visita!</p>
        </div>
    )
}           