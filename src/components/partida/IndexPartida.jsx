
import Background from "../common/Background"
import Board from "../common/Board"
import "../../assets/styles/Board.css"
import "../../assets/styles/index.css"
import BarraTareas from "../common/barraTareas"
import logo from "../../assets/imgs/casillas/casilla1.png";

function IndexPartida(){
    return (
        <div className="contenedorPadreInterfaz">

        <BarraTareas></BarraTareas>
        <Background></Background>


            <div className="Contenedor_lista_tablero">

                {/* <ListaJugadores></ListaJugadores> */}
                <Board enPartida={true}></Board>
                <div className="logo-central">
                        <img src={logo} alt="Logo Central" />
                </div>

                <div className="hacerEspacion"></div>

            </div>

            <div>
                {/* <Botones></Botones> */}
            </div>
    

        </div>
    )
}

export default IndexPartida