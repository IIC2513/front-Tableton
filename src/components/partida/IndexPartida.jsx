
import Background from "../common/Background"
import Board from "../common/Board"
import "../../assets/styles/Board.css"
import "../../assets/styles/index.css"
import "../../assets/styles/enPartida/IndexPartida.css"
import BarraTareas from "../common/barraTareas"
import logo from "../../assets/imgs/logo_uc.png";
import ListaJugadores from "../landingPage/ListaJugadoresLandingPage"
import { useParams } from 'react-router-dom';


function IndexPartida(){

    const { partidaId } = useParams(); // Obtienes el partidaId de la URL


    return (
        <div className="contenedorPadreInterfaz">

        <BarraTareas></BarraTareas>
        <Background></Background>

        <div className="contenedorListaTablero">

            <ListaJugadores gameId={partidaId} ubicacion="enPartida" ></ListaJugadores>

            <div className="Contenedor_lista_tablero">

                {/* <ListaJugadores></ListaJugadores> */}
                <Board enPartida={true} partidaId={partidaId}></Board>
                <div className="logo-central">
                        <img src={logo} alt="Logo Central" />
                </div>

                <div className="hacerEspacion"></div>

            </div>

            </div>
    

        </div>
    )
}

export default IndexPartida