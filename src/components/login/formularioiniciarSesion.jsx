
import { useState, useContext } from "react";
import "../../assets/styles/loginPage/formularioIniciarSesion.css";
import { Link ,useNavigate} from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../auth/AuthContext";

function FormularioIniciarSesion() {

  const navigate = useNavigate();

  const {setToken} = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [contrasena, setPassword] = useState("");

  const handleSubmit = async (event) =>{
    event.preventDefault();
    console.log("mandaste el formulario");

    //enviar los datos al backend
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/loginUsuario`,
      {
        email,
        contrasena
      }
    ).then((response) => {
      //si no hay error en el request
      console.log(response);

      const access_token = response.data.access_token;
      setToken(access_token);

      navigate("/");

    }).catch((error) => {
      console.log(error);
    });
  };

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

  );
}

export default FormularioIniciarSesion;