import React from 'react';
import Background from "../common/Background";
import BarraTareas from "../common/barraTareas";
import '/src/assets/styles/Nosotros.css';

function Nosotros() {
    return (
        
        <div className="contenedorNosotros">
            <BarraTareas></BarraTareas>
            <Background />
            <div className="contenidoNosotros">
            <div className="tarjeta">
                <h1>Nosotros</h1>
                <p>
                    Bienvenido a Monopoly UC, una adaptación del clásico juego de Monopoly, pensado específicamente para el campus San Joaquín de nuestra universidad. El objetivo del juego es ofrecer una experiencia divertida y educativa que permita a los jugadores explorar y conquistar el campus a través de investigaciones.
                </p>
                <p>
                    En Monopoly UC, cada jugador representa a un estudiante que debe moverse por las diferentes facultades y espacios de nuestro campus, como las facultades de Ingeniería, Humanidades, Deportes, y lugares típicos como la biblioteca o el Templo UC. Los estudiantes competirán por créditos y avanzarán en sus investigaciones en distintas áreas.
                </p>
                <p>
                    El juego fue diseñado para proporcionar una experiencia entretenida en la que los estudiantes se enfrentan con distintos desafíos y compiten para dominar el campus a través de sus habilidades. Esperamos que disfruten de esta adaptación y se entretengan descubriendo todos los rincones de nuestro querido campus.
                </p>
            </div>
            </div>
        </div>
    );
}

export default Nosotros;
