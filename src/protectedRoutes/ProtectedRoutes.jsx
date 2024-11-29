import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

function ProtectedRoute({ children }) { //Le pregunte a chatgpt como poder restringir rutas con jwt como en el back
    const { token } = useContext(AuthContext);

    console.log("entre a protected routes component")

    // Si no hay un token válido, redirige al login
    if (!token || token === "null") {
        return <Navigate to="/login" replace />;
    }

    // Si hay un token, renderiza el componente hijo
    return children;
}

export default ProtectedRoute;
