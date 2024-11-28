import "../../assets/styles/landingPage/listaJugadores.css";
import { useEffect, useState, useContext } from "react";
import { SocketContext } from "../../sockets/SocketContext";
import axios from "axios";

function ListaJugadores({gameId, ubicacion}) {
    //const gameId = 1; // Harcodeado

    const [players, setPlayers] = useState([]);
    const { socket } = useContext(SocketContext);
    // Fetch inicial para obtener la lista de jugadores
    useEffect(() => {
        const fetchPlayerData = async () => {
            if (gameId) {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/${gameId}/listarJugadores`);
                    if (Array.isArray(response.data)) {
                        setPlayers(response.data);
                    } else {
                        console.error("Respuesta inesperada del backend:", response.data);
                        setPlayers([]); // Asegurarnos de que sea un arreglo
                    }
                } catch (error) {
                    console.error("Error al obtener la lista de jugadores:", error);
                }
            }
        };
        fetchPlayerData();
    }, [gameId]);

    // Configuración de eventos de Socket.io
    useEffect(() => {
        if (socket?.current) {
            console.log("Socket conectado:", socket.current.id);
        } else {
            console.log("No hay conexión de socket");
        }

        if (!gameId || !socket?.current) return;

        console.log("Escuchando eventos del servidor en el canal 'playerJoined'");

        const handlePlayerUpdate = (data) => {
            console.log("Evento recibido - playerJoined:", data);

            if (data.partidaId !== gameId) {
                console.log("El ID de la partida no coincide");
                return;
            }

            console.log("El ID de la partida coincide");
            if (Array.isArray(data.players)) {
                setPlayers(data.players);
            } else {
                console.error("Datos inesperados en el evento 'playerJoined':", data.players);
            }
        };

        socket.current?.on("playerJoined", handlePlayerUpdate);

        // Limpiar el evento al desmontar el componente
        return () => {
            socket.current?.off("playerJoined", handlePlayerUpdate);
        };
    }, [socket?.current, gameId]);


    const renderPlayerList = () => { //CHATGPT, adaptacion de botonesLandingPage
        if (!players.length) {
            return <p>No hay jugadores en espera</p>;
        }

        switch (ubicacion) {
            case "enPartida":
                return (
                    <ul>
                        {players.map((player, index) => (
                            <li key={index}>
                                Nombre: {player.nombre} creditos: {player.creditos} propiedades: {player.id_propiedades.length} 
                            </li>
                        ))}
                    </ul>
                );
            case "enEspera":
                return (
                    <ul>
                        {players.map((player, index) => (
                            <li key={index}>{player.nombre} </li>
                        ))}
                    </ul>
                );
            default:
                return <p>Ubicación no reconocida</p>;
        }
    };

    return (
        <div className="backgroundListaJugadores" id ="enPartida">
            <div className="listaJugadores" >
                <p>Lista de Jugadores</p>
                {renderPlayerList()}
            </div>
        </div>
    );
}



//     return (
//         <div className="backgroundListaJugadores">
//             <div className="listaJugadores">
//                 <p>Lista de Espera Jugadores</p>

//                 {/* Mostrar lista de jugadores o mensaje alternativo */}
//                 {Array.isArray(players) && players.length > 0 ? (
//                     <ul>
//                         {players.map((player, index) => (
//                             <li key={index}>{player.nombre}</li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>No hay jugadores en espera</p>
//                 )}
//             </div>
//         </div>
//     );
// }

export default ListaJugadores;
