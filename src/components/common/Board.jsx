
import React, { useState, useEffect } from "react";
import "../../assets/styles/Board.css"
import Casilla from "./Casilla"
import axios from "axios";
import Swal from "sweetalert2"; 
import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";

function Board({enPartida, partidaId}){

    const casillas = [
        "casillaPosicion1","casillaPosicion2", "casillaPosicion3","casillaPosicion4", "casillaPosicion5","casillaPosicion6", "casillaPosicion7"
        ,"casillaPosicion8", "casillaPosicion9","casillaPosicion10", "casillaPosicion11","casillaPosicion12", "casillaPosicion13","casillaPosicion14", "casillaPosicion15"
        ,"casillaPosicion16", "casillaPosicion17","casillaPosicion18", "casillaPosicion19","casillaPosicion20", "casillaPosicion21","casillaPosicion22", "casillaPosicion23"
        ,"casillaPosicion24"
    ]

    const [jugadoresEnPosicion, setJugadoresEnPosicion] = useState([]); 
    const { token, setToken } = useContext(AuthContext);
    //const partidaId = 1 //harcodeado por mientras

    const fetchJugadoresPosicion = async () => {

        // console.log("entre a fetchjugadores")
        try {
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/1/listarJugadores`); // Ajusta la URL según tu backend //HARDCODEADO EL 1

            // console.log("la respuesta de axios fue: " + JSON.stringify(response.data)) //chatgpt para imprimir bien el json

            setJugadoresEnPosicion(response.data); // Supón que la respuesta es un array de jugadores
            // console.log("jugadoresenposicion es: " + jugadoresEnPosicion)
        } catch (error) {
            console.error("Error al obtener posiciones de jugadores:", error);
        }
    };

    const tirarDados = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/jugador/mover`, 
                {
                partidaId: partidaId    
            },
            {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar token para autenticación Chatgpt para pasar el token
                    }
                });
            const { tipo, texto } = response.data;
            if (tipo === "alerta") {
                Swal.fire({
                    title: "Evento del Juego",
                    text: texto,
                    icon: "info", 
                    timer: 5000, 
                    showConfirmButton: false, 
                    toast: true, 
                    position: "top-right",
                    customClass: {
                        popup: "mi-alerta-popup",  
                        title: "mi-alerta-titulo", 
                        content: "mi-alerta-texto", 
                    }
                });
                }

            console.log("Jugador movido:", response.data)
            fetchJugadoresPosicion(); 

        } catch (error) {
            console.error("Error al mover el jugador:", error);
        }
    }

    const comprarInvestigacion = async () => {
        try {
            console.log("Antes de comprar la investigacion")
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/jugador/comprar`, 
                {
                partidaId: partidaId    
            },
            {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar token para autenticación Chatgpt para pasar el token
                    }
                });

            console.log("Antes de comprar la investigacion")

            console.log("Compra exitosa:", response.data)
            fetchJugadoresPosicion(); //al recibir toda la info de los jugadores, se peuden actualizar los creditos, sus investigaciones, etc.

        } catch (error) {
            console.error("Error al comprar investigacion:", error);
        }
    }

    // useEffect para actualizar las posiciones cuando enPartida cambia a true
    useEffect(() => {
        if (enPartida) {
            fetchJugadoresPosicion(); // Solicita posiciones al iniciar la partida
        }
    }, [enPartida]);


    if (enPartida) {    

        return (

<div className="Board">
    {casillas.map((casillaId, index) => (
        <Casilla
            key={index}
            casillaPosicion={casillaId}
            enPartida={true}
            jugadoresEnPosicion={jugadoresEnPosicion}
        />
    ))}

    {/* Botones debajo del tablero */}
    <div className="botones-acciones">
        <button className="boton-accion" onClick={fetchJugadoresPosicion}>
            Actualizar Posiciones de Jugadores
        </button>
        <button className="boton-accion" onClick={tirarDados}>
            Tirar Dados
        </button>
        <button className="boton-accion" onClick={comprarInvestigacion}>
            Comprar Investigación
        </button>
    </div>
</div>

            
            


        );
    } else {

        return (
            <div className="Board">
                {casillas.map((casillaId, index) => (
                    <Casilla key={index} casillaPosicion={casillaId} enPartida={false} jugadoresEnPosicion={[]} />
                ))}
            </div>
        );
    }
}

export default Board