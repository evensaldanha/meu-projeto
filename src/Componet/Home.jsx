// import Eu from "../imagrnd/Eu.jpg"
import { useCallback, useEffect, useState } from "react"

const COLORS = ["#000", "#acacac", "#025471"]

export default function Home() {
    const [color, setColor]= useState(COLORS[0]);

    const getAColor = useCallback(() => {
        const randomColorIndex = Math.floor(Math.random() * COLORS.length)

        // console.log(randomColorIndex)

        setColor(COLORS[randomColorIndex])
    }, [])

    useEffect(() => {
        console.log('entrou no useefect')
        setInterval(getAColor, 3000)
    }, [getAColor])

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
            style={{ color }}>Bem vindo!</h1>
            <div style={{display:"flex", justifyContent:"flex-start",alignItems:"flex-start"}}> {times()}</div>
            <p>Me chamo Even Saldanha, você está conhecendo meu primeiro projeto em react.
                Este projeto foi desenvolvido por mim para colocar em prática o que estou estudando. </p>
            <p>Obrigada pela visita!</p>
        </div>
    )
}           