
import "../../assets/styles/landingPage/listaJugadores.css"
import { useEffect, useState, useContext } from "react";
import { SocketContext } from "../../sockets/SocketContext";
import axios from "axios";

function listaJugadores(){

    const gameId = 1 //hardcodeado

    const [players, setPlayers] = useState([]);
    const { socket } = useContext(SocketContext);

    useEffect(()=>{
        const fetchPlayerData = async () =>{
            if  (gameId){
                try {
                    const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/${gameId}/listarJugadores`); // Ajusta la URL según tu backend //HARDCODEADO EL 1
                    setPlayers(response.data); 

                }catch (error){
                    console.log("Error al fetchar la data de los jguadores")
                    console.log("el error fue: ", error)

                }
            }
        };
        fetchPlayerData();
    }, [gameId])

    useEffect(() => {   //sacado del codigo de la capsula

        if (socket.current) {
            console.log("Socket conectado:", socket.current.id);  // Mostrar el ID del socket conectado
        } else {
            console.log("No hay conexión de socket");  // Indicar si no hay conexión de socket
        }

        if (!gameId || !socket) return;

        console.log("Escuchando a servidor en canal playerJoined");

        const handlePlayerUpdate = (data) => {
            console.log("Entre al handlePlayerUpdate")
            console.log("Evento recibido - playerJoined:", data);  // Verificar los datos del evento recibido
            if (data.partidaId !== gameId) {
                console.log("el id de la partida no calza con el gameiD")
                console.log("partidaId:", data.partidaId, "gameId:", gameId)
                return
            };

            console.log("el id de la partida SI calza con el gameiD")
            console.log("partidaId:", data.partidaId , "gameId:", gameId)
            setPlayers(data.players);
        }
        
        socket.current?.on('playerJoined', handlePlayerUpdate)

        return () => {
            socket.current?.off('playerJoined', handlePlayerUpdate)
        }
    }, [socket.current]);



    return(
        <div className="backgroundListaJugadores">

            <div className="listaJugadores">

                <p>Lista de Espera Jugadores</p>

                {/* Solo muestra la lista si hay jugadores */}
                {players.length > 0 ? (
                    <ul>
                        {players.map((player, index) => (
                            <li key={index}>{player.nombre}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay jugadores en espera</p> // Mensaje alternativo si no hay jugadores
                )}

                {/* <ul>
                    {players.map((player, index) => (
                        <li key={index}>{player.nombre}</li>
                    ))}
                </ul> */}

            </div>
        
        </div>
    )
}

export default listaJugadores