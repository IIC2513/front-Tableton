
import Background from "./Background"
import ListaJugadores from "../landingPage/ListaJugadoresLandingPage"
import Botones from "../landingPage/botonesLandingPage"
import Board from "./Board"
import BarraTareas from "./barraTareas"
import "../../assets/styles/index.css"

import { useParams } from 'react-router-dom';

function Index(){

    const { partidaId } = useParams(); // Obtienes el partidaId de la URL

    return (
        <div className="contenedorPadre">

            <Background></Background>

            <BarraTareas></BarraTareas>

            <div className="Contenedor_lista_tablero">

                <ListaJugadores gameId={partidaId}></ListaJugadores>
                <Board enPartida={false}></Board>
                <div className="hacerEspacion"></div>

            </div>

            <div>
                <Botones partidaId={partidaId} ubicacion="partidaEspera"></Botones>
            </div>
    

        </div>
    )
}

export default Index