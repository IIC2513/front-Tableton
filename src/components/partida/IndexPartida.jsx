
import Background from "../common/Background";
import Board from "../common/Board";
import "../../assets/styles/Board.css";
import BarraTareas from "../common/barraTareas";

function IndexPartida() {
  return (
    <div className="contenedorPadreInterfaz">

      <BarraTareas></BarraTareas>
      <Background></Background>

      <div className="Contenedor_lista_tablero">

        {/* <ListaJugadores></ListaJugadores> */}
        <Board enPartida={true}></Board>

        <div className="hacerEspacion"></div>

      </div>

      <div>
        {/* <Botones></Botones> */}
      </div>

    </div>
  );
}

export default IndexPartida;