
import { useState, useContext } from "react";
import "../../assets/styles/loginPage/formularioIniciarSesion.css"
import { Link ,useNavigate} from "react-router-dom"
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";
import { SocketContext } from "../../sockets/SocketContext";
import Swal from "sweetalert2"; 

function FormularioIniciarSesion(){

    const navigate = useNavigate();

    const {token, setToken} = useContext(AuthContext)
    const {connectSocket} = useContext(SocketContext)

    const [email, setEmail] = useState("");
    const [contrasena, setPassword] = useState("");

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log("mandaste el formulario")

        //enviar los datos al backend
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/loginUsuario`,
            {
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

            navigate("/landingpage")

         }).catch((error) => {
            console.log(error)
            if (
                error.response &&
                error.response.data &&
                error.response.data.tipo === "alerta"
            ) {
                Swal.fire({
                    title: "Error al registrarse",
                    text: error.response.data.texto,
                    icon: "error",
                    timer: 5000,
                    showConfirmButton: false,
                    toast: true,
                    position: "top-end",
                });
            }
         })
    }



    return (


            <form onSubmit={handleSubmit} className="contenedorFormulario">

            <p>Correo</p>
            <input 
                type="email" 
                placeholder="Ingrese Correo"
                onChange={e => setEmail(e.target.value)}
                required>
            </input>
            
            <p>Contraseña</p>

            <input 
                type="password" 
                placeholder="Ingrese Contraseña"
                onChange={e => setPassword(e.target.value)}
                required>
            </input>

            <Link to="" className="elementos" id="olvidarContraseña">¿Olvidaste la contraseña?</Link>

            <br></br>

            <button type="submit" className="elementos" >Iniciar Sesión</button>

            
            </form>
            


    )
}

export default FormularioIniciarSesion