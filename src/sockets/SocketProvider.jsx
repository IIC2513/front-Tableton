import { useState, useEffect, useRef } from "react";
import { SocketContext } from "./SocketContext";
import { io } from "socket.io-client";

const SocketProvider = ({children}) => {
    const socket = useRef();

    const connectSocket = (userId) => {
        const storedUserId = userId || localStorage.getItem("user_id");

        if (storedUserId){
            socket.current = io("ws://localhost:3000", {
                reconnection: true,
                reconnectionAttempts: 10,
                reconnectionDelay: 1000,
            });
        
            console.log("el id guardado en localstorage es:",storedUserId)
            socket.current.emit("addUser", Number(storedUserId))
            console.log("Logre unir al jugador al socket en connect socket", socket.current)

        }
    };

    const disconnectSocket = () =>{
        socket.current?. disconnect();

    };

    useEffect(() =>{
        const storedUserId = localStorage.getItem("user_id");
        if (storedUserId) connectSocket(storedUserId);
    }, []);


    return (
        <SocketContext.Provider value={{socket, connectSocket, disconnectSocket}}>
            {children}
        </SocketContext.Provider>
    )
};

export default SocketProvider
