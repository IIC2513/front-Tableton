import React from "react"
import "../../assets/styles/Casilla.css"

function Casilla({ casillaPosicion, enPartida }) {
    return (
        enPartida ? (
            <div className="casillaEnPartida" id={casillaPosicion}>

            </div>
        ) : (
            <div className="casilla" id={casillaPosicion}> {/* falso*/}

            </div>
        )
    );
}

export default Casilla;
