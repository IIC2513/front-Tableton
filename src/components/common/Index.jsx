
import Background from "./Background"
import ListaJugadores from "../landingPage/listaJugadores"
import "../../assets/styles/index.css"

function Index(){
    return (
        <div className="contenedorPadre">

            <Background></Background>


            <div className="Contenedor_lista_tablero">

                <ListaJugadores></ListaJugadores>

            </div>
    

        </div>
    )
}

export default Index