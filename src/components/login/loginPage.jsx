
import "../../assets/styles/loginPage/loginPage.css"
import FormularioIniciarSesion from "./formularioiniciarSesion"
import FormularioRegistrarse from "./formularioRegistrarse"
import Background from "../common/Background"
import BarraTareas from "../common/barraTareas"
import { useNavigate } from "react-router-dom"

function LoginPage(){

    const navigate = useNavigate();

    const handleclick = () =>{
        navigate("/")
    };


    return (

        <div className="contenedorPadreLoginPage">

        <div className="contenedorFormularios">

            <Background></Background>

            <BarraTareas></BarraTareas>

            <FormularioIniciarSesion></FormularioIniciarSesion>
            <FormularioRegistrarse></FormularioRegistrarse>

        </div>    

            <button id="botonVolver" onClick={handleclick}>Volver</button>

        </div>
    )
}

export default LoginPage