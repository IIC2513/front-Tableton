import React from 'react';
import Background from "../common/Background"; 
import BarraTareas from "../common/barraTareas"
import '/src/assets/styles/Reglas.css';

function Reglas() {
    return (
        <div className="contenedorReglas">
            <BarraTareas />
            <Background />
            <div className="contenidoReglas">
                <div className="tarjeta">
                    <h1>Reglas del Juego</h1>
                    <p>Las reglas de Monopoly UC son sencillas pero aportan un toque estratégico al clásico juego. A continuación, se presentan las reglas principales:</p>
                    <ol>
                        <li><strong>Movimiento:</strong> Cada jugador se moverá en función del número obtenido en el dado, avanzando por las casillas del tablero.</li>
                        <li><strong>Turnos:</strong> Los turnos se asignan en orden alfabético por nombre de usuario.</li>
                        <li><strong>Inicio de Investigaciones:</strong> En la primera vuelta, los jugadores no pueden iniciar investigaciones.</li>
                        <li><strong>Compra de Investigaciones:</strong> Al caer en una casilla sin investigación, el jugador puede iniciar una con créditos, empezando por un trabajo semestral.</li>
                        <li><strong>Profundización de Investigaciones:</strong> Si un jugador cae en su propia investigación, puede usar créditos para mejorarla.</li>
                        <li><strong>Pago por Investigaciones:</strong> Al caer en una investigación de otro jugador, deberá pagar una cantidad de créditos dependiendo de qué tan avanzada esté la investigación.</li>
                        <li><strong>Intercambio de Investigaciones:</strong> Un jugador puede negociar la compra de una investigación de otro jugador. Si ambos jugadores están de acuerdo, la investigación cambia de dueño.</li>
                        <li><strong>Cartas Fortuitas:</strong> Al caer en una casilla fortuita, el jugador recibe una carta que puede otorgarle o restarle créditos o enviarlo a la Secretaría Académica, o a otras posibilidades.</li>
                        <li><strong>Secretaría Académica:</strong> Al caer en esta casilla, el jugador perderá su próximo turno.</li>
                        <li><strong>Bono por Vuelta:</strong> Al completar una vuelta, los jugadores reciben créditos adicionales.</li>
                        <li><strong>Inactividad:</strong> Si un jugador no realiza su turno en 30 segundos, se salta al siguiente jugador.</li>
                        <li><strong>Eliminación:</strong> Un jugador sin créditos suficientes para pagar es eliminado de la partida y queda en modo espectador.</li>
                        <li><strong>Fin del Juego:</strong> La partida termina cuando solo queda un jugador con créditos, quien es el ganador.</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}
export default Reglas;