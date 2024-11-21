import React from "react";
import "../../assets/styles/Casilla.css";

function Casilla({ casillaPosicion, enPartida, jugadoresEnPosicion, investigaciones }) {

    // Convierte casillaPosicion en número si es un string (ChatGPT para corregir el formato)
    const posicionNumerica = typeof casillaPosicion === "string" ? parseInt(casillaPosicion.replace(/\D/g, "")) : casillaPosicion;

    // Filtra los jugadores que están en la posición actual de la casilla
    const jugadoresEnEstaCasilla = jugadoresEnPosicion.filter(jugador => jugador.posicion === posicionNumerica);

    // Filtra la investigación asociada a esta casilla, si existe
    const investigacionEnEstaCasilla = investigaciones.find(investigacion => investigacion.posicion === posicionNumerica);

    const esPropietario = (investigacionEnEstaCasilla && jugadoresEnPosicion.some(jugador => jugador.id === investigacionEnEstaCasilla.propietarioId));

    if (enPartida) {
        return (
            <div className={`casillaEnPartida ${investigacionEnEstaCasilla ? "casillaInvestigacion" : ""}`} id={`${casillaPosicion}`}>
                
                {/* Renderiza una ficha para cada jugador en esta casilla */}
                {jugadoresEnEstaCasilla.map((jugador, index) => (
                    <div key={index} className={`ficha jugador${jugador.id}`}></div>
                ))}

                {/* Información de investigación si existe */}
                {investigacionEnEstaCasilla && (
                    <div className="informacionInvestigacion">
                        <p><strong>Facultad:</strong> {investigacionEnEstaCasilla.facultad}</p>
                        <p><strong>Nivel:</strong> {investigacionEnEstaCasilla.nivel}</p>
                        <p><strong>Propietario:</strong> {esPropietario ? "Tú" : "Otro jugador"}</p>
                        {esPropietario && (
                            <p><strong>Costo mejora:</strong> {investigacionEnEstaCasilla.costoMejora}</p>
                        )}
                    </div>
                )}
            </div>
        );
    } else {
        // Renderiza una casilla con el estilo predeterminado
        return (
            <div className="casilla" id={`${casillaPosicion}`}>
                {/* Opcional: Agregar un diseño estático si no está en partida */}
            </div>
        );
    }
}

export default Casilla;
