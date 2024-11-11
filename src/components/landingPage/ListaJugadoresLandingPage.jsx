
import "../../assets/styles/landingPage/listaJugadores.css"
import { useState } from "react";

function listaJugadores(){

    // Estado para almacenar los nombres de los jugadores          Ayuda ChatGPT para manejar las listas
    const [jugadores, setJugadores] = useState([]); 

    // Función para agregar un jugador a la lista
    const agregarJugador = (nombre) => {
        setJugadores([...jugadores, nombre]);       //particularmente aqui
    };



    return(
        <div className="backgroundListaJugadores">

            <div className="listaJugadores">

                <p>Lista de Espera Jugadores</p>

                <ul>
                    {jugadores.map((jugador, index) => (
                        <li key={index}>{jugador}</li>
                    ))}
                </ul>

            </div>
        
        </div>
    )
}

export default listaJugadores