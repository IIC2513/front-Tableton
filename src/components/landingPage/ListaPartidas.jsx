import { SocketContext } from "../../sockets/SocketContext";
import { AuthContext } from "../../auth/AuthContext";

import { useContext, useState, useEffect } from "react";
import Botones from "./botonesLandingPage";
import axios from "axios";

function ListaPartidas() {
    const [partidas, setPartidas] = useState([]);
    const { socket } = useContext(SocketContext);
    const { token, setToken } = useContext(AuthContext);


    const cerrarSesion = () => { //Chat gpt me ayudo a cerrar la sesion con el removeTOken
        setToken(null); // Limpia el token en el contexto (esto dependerá de cómo manejes el token)
        localStorage.removeItem("token"); // Borra el token del localStorage
        navigate("/"); // Navega a la página de inicio de sesión o donde prefieras
    };

    // Fetch inicial para obtener las partidas desde la API CHATGPT PARA ADAPTAR A PARTIDAS
    useEffect(() => {
        const fetchPartidaData = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_BACKEND_URL}/listaPartidas`
                ); // Ajusta la URL según tu backend
                setPartidas(response.data.partidas ); // Asegúrate de que `partidas` sea el campo correcto
            } catch (error) {
                console.error("Error al obtener las partidas:", error);
            }
        };
        fetchPartidaData();
    }, []);

    // Escuchar actualizaciones del servidor a través del WebSocket
    useEffect(() => {
        console.log("entre al use effect")

        if (!socket) return;

        console.log("Escuchando evento 'updateGames' en el WebSocket");

        const handlePartidaUpdate = (data) => {
            console.log("entre a handlePartidaUpdate")
            console.log("Evento recibido - updateGames:", data);

            if (data?.partidas) {
                setPartidas(data.partidas); // Actualizar el estado con la lista de partidas recibida
            } else {
                console.warn("El evento 'updateGames' no contiene partidas");
            }
        };

        // Suscribirse al evento
        socket.current?.on("updateGames", handlePartidaUpdate);
        socket.current?.on("updateGames", (data) => {
            console.log("Evento updateGames recibido:", data);
          });


        // Cleanup al desmontar el componente
        return () => {
            socket.current?.off("updateGames", handlePartidaUpdate);
        };
    }, [socket.current]);

    const crearPartida = () => { // crear la partida
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/juego/inicializar`)
    }

    return (
        <div className="backgroundListaPartidas">
            <div className="listaPartidas">
                <p>Lista de Partidas</p>
                {/* Mostrar la lista de partidas */}
                {partidas.length > 0 ? (
                    <ul>
                        {partidas.map((partida, index) => (
                            <li key={index}>
                                <strong>Paritda {partida.id}</strong>
                                <p>Jugadores: {partida.jugadoresCount}</p>
                                <p>Estado: {partida.estado || "Desconocido"}</p>
                                <Botones partidaId={partida.id}></Botones>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay partidas creadas</p> // Mensaje alternativo si no hay partidas
                )}
            </div>
            <button onClick={crearPartida}> Crear partida </button>
            <button onClick={cerrarSesion}>Cerrar Sesión</button>

        </div>
    );
}

export default ListaPartidas;
