
import Background from "./Background";
import ListaJugadores from "../landingPage/ListaJugadoresLandingPage";
import Botones from "../landingPage/botonesLandingPage";
import Board from "./Board";
import BarraTareas from "./barraTareas";
import "../../assets/styles/index.css";

function Index() {
  return (
    <div className="contenedorPadre">

      <Background></Background>

      <BarraTareas></BarraTareas>

      <div className="Contenedor_lista_tablero">

        <ListaJugadores></ListaJugadores>
        <Board enPartida={false}></Board>
        <div className="hacerEspacion"></div>

      </div>

      <div>
        <Botones></Botones>
      </div>

    </div>
  );
}

export default Index;