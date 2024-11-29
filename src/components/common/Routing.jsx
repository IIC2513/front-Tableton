import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./Index"
import App from "./App"
import LoginPage from "../login/loginPage"
import IndexPartida from "../partida/IndexPartida"
import Nosotros from "../info/Nosotros"
import Reglas from "../info/Reglas"
import LandingPage from "../landingPage/LandingPage"
import ProtectedRoute from "../../protectedRoutes/ProtectedRoutes.jsx";  //chatgpt para proteger rutas


function Routing(){
    return(
        <>
        <BrowserRouter>
        
            <Routes>

                <Route path={"/"} element = {<LandingPage></LandingPage>}></Route>
                <Route path={"/login"} element= {<LoginPage></LoginPage>}></Route>
                <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
                <Route path="/reglas" element={<Reglas></Reglas>}></Route>
                {/* <Route path={"/partida/:partidaId/espera"} element= {<Index></Index>}></Route> */}
                {/* <Route path={"/partida/:partidaId"} element= {<IndexPartida></IndexPartida>}></Route> */}

                {/* Rutas protegidas */}
                <Route
                    path="/partida/:partidaId"
                    element={
                        <ProtectedRoute>
                            <IndexPartida />
                        </ProtectedRoute>
                    }
                >
                </Route>
                <Route
                    path="/partida/:partidaId/espera"
                    element={
                        <ProtectedRoute>
                            <Index />
                        </ProtectedRoute>
                    }
                >
                </Route>
        
            </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default Routing