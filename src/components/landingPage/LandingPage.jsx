import BarraTareas from "../common/barraTareas"
import Background from "../common/Background"
import Botones from "./botonesLandingPage"
import "../../assets/styles/landingPage/LandingPage.css"
import ListaPartidas from "./ListaPartidas"

import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext"

function LandingPage (){

    const { token, setToken } = useContext(AuthContext);

    return(

            <div>
            {console.log(token)}
            {token && token !== "null" ? (
                <>
                    <Background></Background>
                    <BarraTareas></BarraTareas>
                    <ListaPartidas></ListaPartidas>
                </>
            ) : (
                <>
                <Background></Background>
                <BarraTareas></BarraTareas>
                <div class = "contenedor">
                    <p>Bienvenido a Monopoly UC, el cual es la versión adaptada el clásico juego Monopoly 
                        al campus San Joaquin!
                    </p>
                    <p>
                        Para poder acceder al juego primero tienes que iniciar sesión. En caso que quieras
                        saber las reglas o sobre nosotros, puedes acceder a esa iformación mediante
                        la barra de taras.
                    </p>
                    <p>
                        ¡Inicia sesión para poder jugar con tus amigos!
                    </p>
                </div>

                <Botones></Botones>
                </>
            )}
            </div>

    )
}


export default LandingPage