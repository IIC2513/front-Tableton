import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/landingPage/botones.css"

import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import axios from "axios";


function botones({ partidaId, ubicacion }){

    // para navegar entre rutas https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router

    const { token, setToken } = useContext(AuthContext);
    const navigate = useNavigate();
    

    const hacerLogin = () =>{
        navigate("/login")
    };

    const irPartida = async () =>{

        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/juego/estado/${partidaId}`)

        console.log("Estado partida:", response.data.estadoPartida)

        if (response.data.estadoPartida === "creada"){

            return navigate(`/partida/${partidaId}/espera`);
        }else if (response.data.estadoPartida === "terminada"){
            
            //en vola hacer que no se muestre?

        }else if (response.data.estadoPartida === "iniciada"){
            return navigate(`/partida/${partidaId}`)
        }


            
    };

    const cerrarSesion = () => { //Chat gpt me ayudo a cerrar la sesion con el removeTOken
        setToken(null); // Limpia el token en el contexto (esto dependerá de cómo manejes el token)
        localStorage.removeItem("token"); // Borra el token del localStorage
        navigate("/"); // Navega a la página de inicio de sesión o donde prefieras
    };

    const volver = () =>{
        navigate("/")
    };

    const crearJugador = async () => {

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
            navigate(`/partida/${partidaId}`)

        } catch (error) {
            console.error("Error al unirse a la partida:", error.response?.data || error.message);
            alert("Error al unirse a la partida. Inténtalo de nuevo.");
        }
    };

    const renderButtons = () => {   //CHATGPT para mostrar distintos botones en distintas partes
        if (!token || token === "null") {
            return (
                <button onClick={hacerLogin} id="IniciarSesionRegistrarse">
                    Iniciar Sesión/Registrarse
                </button>
            );
        }

        switch (ubicacion) {
            case "landingpage":
                return (
                    <>
                        <button onClick={irPartida}>Ir a Partida</button>
                    </>
                );
            case "partidaEspera":
                return (
                    <>
                        <button onClick={crearJugador}>Unirse a Partida</button>
                        <button onClick={volver}>Volver</button>
                    </>
                );
            default:
                return <p>No hay acciones disponibles para esta ubicación.</p>;
        }
    };



    return(

         <div className="contenedorBotones">{renderButtons()}</div>
    )
}

export default botones