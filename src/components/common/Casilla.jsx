import React from "react"
import "../../assets/styles/Casilla.css"

function Casilla({ casillaPosicion, enPartida , jugadoresEnPosicion}) {


    // Filtra los jugadores que están en la posición actual de la casilla
    const jugadoresEnEstaCasilla = jugadoresEnPosicion.filter(jugador => jugador.posicion === casillaPosicion);

    console.log(jugadoresEnEstaCasilla)

    if (enPartida) {    //Chatgpt me ayudo a poner la ficha de cada jugador
        return (
            <div className="casillaEnPartida" id={`${casillaPosicion}`}>

                {/* Renderiza una ficha para cada jugador en esta casilla */}
                {jugadoresEnEstaCasilla.map((jugador, index) => (
                    <div key={index} className={`jugador${jugador.id}`}></div>
                ))}

            </div>
        );
    } else {
        // Renderiza una casilla con el estilo predeterminado
        return (
            <div className="casilla" id={`${casillaPosicion}`}>

            </div>
    );
}
}

export default Casilla;
