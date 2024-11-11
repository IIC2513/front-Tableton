import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/landingPage/botones.css"

import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";

function botones(){

    // para navegar entre rutas https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router

    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    

    const hacerLogin = () =>{
        navigate("/login")
    };



    return(

        <div className="contenedorBotones">

            <div>
                {(() => {   //ayuda chatgpt para mostrar si esta logueado o no
                    if (token != "null") { //el token null que se guarda en localstorage es string

                        return (
                            <button onClick={() => {/* lógica para unirse a la partida */}}>
                                Unirse a Partida
                            </button>
                        );
                        
                    } else {

                        return (
                            <button onClick={hacerLogin} id="IniciarSesionRegistrarse">Iniciar Sesion/Registrarse</button>
                        );
                    }
                })()}
            </div>
                

                {/* <button onClick={handleclick} id="IniciarSesionRegistrarse">Iniciar Sesion/Registrarse</button> */}

        </div>

    )
}

export default botones