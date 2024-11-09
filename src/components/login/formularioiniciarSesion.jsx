
import "../../assets/styles/loginPage/formularioIniciarSesion.css"
import { Link } from "react-router-dom"

function FormularioIniciarSesion(){
    return (
        <div className="contenedorFormulario">

            <p>Correo</p>
            <input typeof="email" placeholder="Ingrese Correo"></input>
            <p>Contraseña</p>
            <input typeof="password" placeholder="Ingrese Contraseña"></input>

            <button className="elementos" >Iniciar Sesión</button>

            <Link to="" className="elementos" id="olvidarContraseña">¿Olvidaste la contraseña?</Link>

            
            
            

        </div>
    )
}

export default FormularioIniciarSesion