// import Eu from "../imagrnd/Eu.jpg"
import { useCallback, useEffect, useState } from "react";
import { Welcome, Times } from "./Home.styled";

const COLORS = ["#000", "#acacac", "#025471"]

export default function Home() {
    const [color, setColor] = useState(COLORS[0]);

    const getAColor = useCallback(() => {
        const randomColorIndex = Math.floor(Math.random() * COLORS.length)


        setColor(COLORS[randomColorIndex])
    }, [])

    useEffect(() => {
        setInterval(getAColor, 3000)
    }, [getAColor])

    const times = () => {
        const currentHours = new Date().getHours()

        if (currentHours >= 0 && currentHours < 13) {
            return <p>Bom dia</p>
        } else if (currentHours >= 13 && currentHours < 18) {
            return <p>Boa tarde</p>
        } else {
            return <p>Boa noite</p>
        }
    }

    return (
        <div>
            <Welcome
                style={{ color }}>Bem vindo!</Welcome>
            <Times className="times"> {times()}</Times>
            <p>Me chamo Even Saldanha, você está conhecendo meu primeiro projeto em react.
                Este projeto foi desenvolvido por mim para colocar em prática o que estou estudando. </p>
            <p>Obrigada pela visita!</p>
        </div>
    )
}           