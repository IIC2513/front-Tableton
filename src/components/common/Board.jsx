
import "../../assets/styles/Board.css"
import Casilla from "./Casilla"

function Board({enPartida}){

    const casillas = [
        "casillaPosicion1","casillaPosicion2", "casillaPosicion3","casillaPosicion4", "casillaPosicion5","casillaPosicion6", "casillaPosicion7"
        ,"casillaPosicion8", "casillaPosicion9","casillaPosicion10", "casillaPosicion11","casillaPosicion12", "casillaPosicion13","casillaPosicion14", "casillaPosicion15"
        ,"casillaPosicion16", "casillaPosicion17","casillaPosicion18", "casillaPosicion19","casillaPosicion20", "casillaPosicion21","casillaPosicion22", "casillaPosicion23"
        ,"casillaPosicion24"
    ]


    if (enPartida) {    

        return (
            <div className="BoardEnPartida">

            </div>
        );
    } else {

        return (
            <div className="Board">
                {casillas.map((casillaId, index) => (
                    <Casilla key={index} casillaPosicion={casillaId} enPartida={false} />
                ))}
            </div>
        );
    }
}

export default Board