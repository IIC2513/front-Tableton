import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/landingPage/botones.css"

function botones(){

    // para navegar entre rutas https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router

    const navigate = useNavigate();

    const handleclick = () =>{
        navigate("/login")
    };



    return(

        <div className="contenedorBotones">

            <button onClick={handleclick} id="IniciarSesionRegistrarse">Iniciar Sesion/Registrarse</button>

        </div>

    )
}

export default botones