import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/landingPage/botones.css"

import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import axios from "axios";


function botones(){

    // para navegar entre rutas https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router

    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    

    const hacerLogin = () =>{
        navigate("/login")
    };

    const crearJugador = async () => {

        const partidaId = 2 //harcodeado por mientras

        try {   //chatgpt ayuda para pasar por el header
            console.log("antes del post")
            const response = await axios.post(
                
                `${import.meta.env.VITE_BACKEND_URL}/jugador`, // URL del endpoint de creación
                {
                    partidaId: partidaId     // Id de la partida en la que el usuario se une
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Agregar token para autenticación
                    }
                }
                
            );
            console.log("despues del post")

            console.log("Jugador creado:", response.data);
            alert("Te has unido a la partida exitosamente!"); // Confirmación al usuario
        } catch (error) {
            console.error("Error al unirse a la partida:", error.response?.data || error.message);
            alert("Error al unirse a la partida. Inténtalo de nuevo.");
        }
    };



    return(

        <div className="contenedorBotones">

            <div>
                {(() => {   //ayuda chatgpt para mostrar si esta logueado o no
                    if (token != "null") { //el token null que se guarda en localstorage es string

                        return (
                            <button onClick={crearJugador}> Unirse a Partida</button>
                        );
                        
                    } else {

                        return (
                            <button onClick={hacerLogin} id="IniciarSesionRegistrarse">Iniciar Sesion/Registrarse</button>
                        );
                    }
                })()}
            </div>

        </div>

    )
}

export default botones