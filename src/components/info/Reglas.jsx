import React from 'react';
function Reglas() {
    return (
        <div>
            <h1>Reglas del Juego</h1>
            <p>Las reglas de Monopoly UC son sencillas pero aportan un toque estratégico al clásico juego. A continuación, se presentan las reglas principales:</p>
            <ol>
                <li><strong>Movimiento:</strong> Cada jugador se movera en funcion del numero obtenido en el dado, avanzando por las casillas del tablero.</li>
                <li><strong>Turnos:</strong> Los turnos se asignan en orden alfabetico por nombre de usuario.</li>
                <li><strong>Inicio de Investigaciones:</strong> En la primera vuelta, los jugadores no pueden iniciar investigaciones.</li>
                <li><strong>Compra de Investigaciones:</strong> Al caer en una casilla sin investigacion, el jugador puede iniciar una con creditos, empezando por un trabajo semestral.</li>
                <li><strong>Profundización de Investigaciones:</strong> Si un jugador cae en su propia investigacion, puede usar creditos para mejorarla.</li>
                <li><strong>Pago por Investigaciones:</strong> Al caer en una investigacion de otro jugador, debera pagar una cantidad de creditos dependiendo de que tan avanzada este la investigación.</li>
                <li><strong>Intercambio de Investigaciones:</strong> Un jugador puede negociar la compra de una investigacion de otro jugador. Si ambos jugadores estan de acuerdo, la investigacion cambia de dueño.</li>
                <li><strong>Cartas Fortuitas:</strong> Al caer en una casilla fortuita, el jugador recibe una carta que puede otorgarle o restarle creditos o enviarlo a la Secretaría Academica, o otras posibilidades. </li>
                <li><strong>Secretaría Académica:</strong> Al caer en esta casilla, el jugador perdera su proximo turno.</li>
                <li><strong>Bono por Vuelta:</strong> Al completar una vuelta, los jugadores reciben creditos adicionales.</li>
                <li><strong>Inactividad:</strong> Si un jugador no realiza su turno en 30 segundos, se salta al siguiente jugador.</li>
                <li><strong>Eliminación:</strong> Un jugador sin creditos suficientes para pagar es eliminado de la partida y queda en modo espectador.</li>
                <li><strong>Fin del Juego:</strong> La partida termina cuando solo queda un jugador con creditos, quien es el ganador.</li>
            </ol>
        </div>);}
export default Reglas;