import React from 'react';
import { Link } from 'react-router-dom';  
import { AuthContext } from "../../auth/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import "../../assets/styles/barraTareas.css"



function BarraTareas() {

    const { token, setToken } = useContext(AuthContext);
    const [nombreUsuario, setNombreUsuario] = useState("");

    const obtenerUsuario = async () =>{
        try{
            const response = await axios.post(
                
                `${import.meta.env.VITE_BACKEND_URL}/usuario/datos`, 
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    }
                }
            

                
            );

            console.log("despues del post")

            console.log("Usuario encontrado:", response.data);

            setNombreUsuario(response.data.nombre);
        }
        catch (error){
            console.log("hubo un error al buscar la info de usuario")
        }
    }

    // Llamar a obtenerUsuario cuando el token esté disponible CHATGPT para que se actualice
    useEffect(() => {
        if (token) {
            obtenerUsuario();
        }
    }, [token]);

  return (


    <div className="barra-tareas">

      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Reglas">Instrucciones</Link></li>
        <li><Link to="/Nosotros">Nosotros</Link></li>

        <div>
            {token && token !== "null" ? (
                <>
                    <li id="ingresado">Bienvenido, {nombreUsuario}</li> 
                </>
            ) : (
                <>
                <li><Link to="/login">Ingresar</Link></li>
                </>
            )}
            </div>
      </ul>

    </div>
  );
}

export default BarraTareas;
