import React, { useState, useEffect } from "react";
import "../../assets/styles/Board.css";
import Casilla from "./Casilla";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";

function Board({ enPartida }) {
    const casillas = [
        "casillaPosicion1","casillaPosicion2", "casillaPosicion3","casillaPosicion4", "casillaPosicion5","casillaPosicion6", "casillaPosicion7",
        "casillaPosicion8", "casillaPosicion9","casillaPosicion10", "casillaPosicion11","casillaPosicion12", "casillaPosicion13","casillaPosicion14", "casillaPosicion15",
        "casillaPosicion16", "casillaPosicion17","casillaPosicion18", "casillaPosicion19","casillaPosicion20", "casillaPosicion21","casillaPosicion22", "casillaPosicion23",
        "casillaPosicion24"
    ];

    const [jugadoresEnPosicion, setJugadoresEnPosicion] = useState([]);
    const { token } = useContext(AuthContext);
    const partidaId = 1; // Hardcodeado por mientras
    const [mensaje, setMensaje] = useState(""); // Para mostrar mensajes de éxito o error

    const fetchJugadoresPosicion = async () => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/1/listarJugadores`
            ); // Ajusta la URL según tu backend
            setJugadoresEnPosicion(response.data); // Supón que la respuesta es un array de jugadores
        } catch (error) {
            console.error("Error al obtener posiciones de jugadores:", error);
        }
    };

    const tirarDados = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/jugador/mover`,
                { partidaId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar token para autenticación
                    },
                }
            );

            console.log("Jugador movido:", response.data);
            setMensaje(response.data.mensaje); // Mostrar mensaje relacionado al movimiento
            fetchJugadoresPosicion();
        } catch (error) {
            console.error("Error al mover el jugador:", error);
            setMensaje(error.response?.data || "Error al mover el jugador.");
        }
    };

    const comprarInvestigacion = async () => {
        try {
            console.log("Antes de comprar la investigacion");
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/jugador/comprar`,
                { partidaId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar token para autenticación
                    },
                }
            );

            console.log("Compra exitosa:", response.data);
            setMensaje(response.data.mensaje); // Mostrar mensaje relacionado a la compra
            fetchJugadoresPosicion();
        } catch (error) {
            console.error("Error al comprar investigacion:", error);
            setMensaje(error.response?.data?.error || "Error al comprar investigación.");
        }
    };

    const mejorarInvestigacion = async () => {
        try {
            console.log("Intentando mejorar la investigación...");
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/jugador/mejorar`,
                { partidaId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Token de autenticación
                    },
                }
            );

            console.log("Mejora exitosa:", response.data);
            setMensaje(response.data.message); // Mostrar mensaje relacionado a la mejora
            fetchJugadoresPosicion();
        } catch (error) {
            console.error("Error al mejorar investigación:", error);
            setMensaje(error.response?.data?.error || "Error al mejorar investigación.");
        }
    };

    // useEffect para actualizar las posiciones cuando enPartida cambia a true
    useEffect(() => {
        if (enPartida) {
            fetchJugadoresPosicion(); // Solicita posiciones al iniciar la partida
        }
    }, [enPartida]);

    return (
        <div className="Board">
            {mensaje && <div className="mensaje">{mensaje}</div>} {/* Mostrar mensajes */}
            {enPartida ? (
                <>
                    <button onClick={fetchJugadoresPosicion}>Actualizar Posiciones de Jugadores</button>
                    <button onClick={tirarDados}>Tirar Dados</button>
                    <button onClick={comprarInvestigacion}>Comprar Investigación</button>
                    <button onClick={mejorarInvestigacion}>Mejorar Investigación</button>
                </>
            ) : null}
            {casillas.map((casillaId, index) => (
                <Casilla
                    key={index}
                    casillaPosicion={casillaId}
                    enPartida={enPartida}
                    jugadoresEnPosicion={jugadoresEnPosicion}
                />
            ))}
        </div>
    );
}

export default Board;
