
import "../../assets/styles/loginPage/formularioRegistrarse.css"

function FormularioRegistrarse(){
    return (
        <div className="contenedorFormulario">

            <p>Usuario</p>
            <input typeof="username" placeholder="Ingrese Usuario"></input>
            <p>Correo</p>
            <input typeof="email" placeholder="Ingrese Correo"></input>
            <p>Contraseña</p>
            <input typeof="password" placeholder="Ingrese Contraseña"></input>


            <button className="elementos" >Registarse</button>
            
            

        </div>
    )
}

export default FormularioRegistrarse