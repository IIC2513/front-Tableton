
import Background from "./Background"
import ListaJugadores from "../landingPage/ListaJugadoresLandingPage"
import Botones from "../landingPage/botonesLandingPage"
import "../../assets/styles/index.css"

function Index(){
    return (
        <div className="contenedorPadre">

            <Background></Background>


            <div className="Contenedor_lista_tablero">

                <ListaJugadores></ListaJugadores>

            </div>

            <div>
                <Botones></Botones>
            </div>
    

        </div>
    )
}

export default Index