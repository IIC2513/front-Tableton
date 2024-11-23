
import "../../assets/styles/loginPage/formularioRegistrarse.css"
import { useState, useContext } from "react";
import { Link ,useNavigate} from "react-router-dom"
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";
import { SocketContext } from "../../sockets/SocketContext";

function FormularioRegistrarse(){

    const navigate = useNavigate();

    const {token, setToken} = useContext(AuthContext)
    const {connectSocket} = useContext(SocketContext)

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setPassword] = useState("");

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log("mandaste el formulario")

        //enviar los datos al backend
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/crearUsuario`,
            {
                nombre,
                email,
                contrasena
            }
         ).then((response) => {
            //si no hay error en el request
            console.log(response)

            const access_token = response.data.access_token
            setToken(access_token);

            console.log("el response en iniciar sesion es",response)
            connectSocket(response.data.userId)

            navigate("/")

         }).catch((error) => {
            console.log("estoy en el catch error del front")
            console.log(error)
         })
    }



    return (


        <form onSubmit={handleSubmit} className="contenedorFormulario">

            <p>Usuario</p>
            <input 
                type="username" 
                placeholder="Ingrese Usuario"
                onChange={e => setNombre(e.target.value)}
                required
                >
            </input>

            <p>Correo</p>

            <input 
                type="email" 
                placeholder="Ingrese Correo"
                onChange={e => setEmail(e.target.value)}
                required
                >
    
            </input>

            <p>Contraseña</p>

            <input 
                type="password" 
                placeholder="Ingrese Contraseña"
                onChange={e => setPassword(e.target.value)}
                required
                >
            </input>


            <button className="elementos" type="submit" >Registarse</button>

        </form>
            
            


    )
}

export default FormularioRegistrarse