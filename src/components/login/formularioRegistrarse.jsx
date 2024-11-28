import "../../assets/styles/loginPage/formularioRegistrarse.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; 
import { AuthContext } from "../../auth/AuthContext";
import { SocketContext } from "../../sockets/SocketContext";

function FormularioRegistrarse() {
    const navigate = useNavigate();

    const { token, setToken } = useContext(AuthContext);
    const { connectSocket } = useContext(SocketContext);

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Mandaste el formulario");
        console.log(`${import.meta.env.VITE_BACKEND_URL}/crearUsuario`);
        axios
            .post(`${import.meta.env.VITE_BACKEND_URL}/crearUsuario`, {
                nombre,
                email,
                contrasena,
            })
            .then((response) => {
                console.log(response);

                const access_token = response.data.access_token;
                setToken(access_token);

                console.log("El response en iniciar sesión es", response);
                connectSocket(response.data.userId);

                navigate("/landingpage");
            })
            .catch((error) => {
                console.log("Estoy en el catch error del front");
                console.log(error);

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
            });
    };

    return (
        <form onSubmit={handleSubmit} className="contenedorFormulario">
            <p>Usuario</p>
            <input
                type="username"
                placeholder="Ingrese Usuario"
                onChange={(e) => setNombre(e.target.value)}
                required
            ></input>

            <p>Correo</p>
            <input
                type="email"
                placeholder="Ingrese Correo"
                onChange={(e) => setEmail(e.target.value)}
                required
            ></input>

            <p>Contraseña</p>
            <input
                type="password"
                placeholder="Ingrese Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
            ></input>
            <p style={{ color: "red", fontSize: "12px", margin: "5px 0" }}>
                La contraseña debe tener al menos 8 caracteres, y tener por lo menos una mayúscula, un número y un carácter especial.
            </p>

            <button className="elementos" type="submit">
                Registrarse
            </button>
        </form>
    );
}

export default FormularioRegistrarse;
