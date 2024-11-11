
import "../../assets/styles/Interfaz/BoardPartida.css"
import CasillaPartida from "./CasillaPartida"

function BoardPartida(){

    const casillas = [
        "casillaPosicion1","casillaPosicion2", "casillaPosicion3","casillaPosicion4", "casillaPosicion5","casillaPosicion6", "casillaPosicion7"
        ,"casillaPosicion8", "casillaPosicion9","casillaPosicion10", "casillaPosicion11","casillaPosicion12", "casillaPosicion13","casillaPosicion14", "casillaPosicion15"
        ,"casillaPosicion16", "casillaPosicion17","casillaPosicion18", "casillaPosicion19","casillaPosicion20", "casillaPosicion21","casillaPosicion22", "casillaPosicion23"
        ,"casillaPosicion24"
    ]


    return (
        <div className="BoardPartida">
            {casillas.map((casillaId, index) => (
                <CasillaPartida key={index} casillaPosicion={casillaId} />
            ))}
        </div>
    )
}

export default BoardPartida