import React from "react";
import "../../assets/styles/Casilla.css";

function Casilla({ casillaPosicion, enPartida , jugadoresEnPosicion}) {

  // console.log("ya en el componente casilla ")
  // console.log("la casillaPosicion: " + casillaPosicion)
  // console.log("jugadoresEnPosicion: " + jugadoresEnPosicion)

  // Convierte casillaPosicion en número si es un string CHATGPT porque casillaPosicion no es un numero
  const posicionNumerica = typeof casillaPosicion === "string" ? parseInt(casillaPosicion.replace(/\D/g, "")) : casillaPosicion;

  // Filtra los jugadores que están en la posición actual de la casilla//  mismo que arriba
  const jugadoresEnEstaCasilla = jugadoresEnPosicion.filter(jugador => {
    // console.log("jugador.posicion:", jugador.posicion, "comparado con posicionNumerica:", posicionNumerica);
    return jugador.posicion === posicionNumerica;
  });

  // console.log("los jugadores en esta casilla son: " + jugadoresEnEstaCasilla)

  if (enPartida) {    //Chatgpt me ayudo a poner la ficha de cada jugador
    return (
      <div className="casillaEnPartida" id={`${casillaPosicion}`}>

        {/* Renderiza una ficha para cada jugador en esta casilla */}
        {jugadoresEnEstaCasilla.map((jugador, index) => (
          <div key={index} className={`ficha jugador${jugador.id}`}></div>
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
