
import Background from "../common/Background"
import BoardPartida from "./BoardPartida"
import "../../assets/styles/Interfaz/IndexPartida.css"

function IndexPartida(){
    return (
        <div className="contenedorPadreInterfaz">

        <Background></Background>

            <div className="Contenedor_lista_tableroInterfaz">

                {/* <ListaJugadores></ListaJugadores> */}
                <BoardPartida></BoardPartida>
                <P>holaaaaaa</P>

                <div className="hacerEspacionInterfaz"></div>

            </div>

            <div>
                {/* <Botones></Botones> */}
            </div>
    

        </div>
    )
}

export default IndexPartida