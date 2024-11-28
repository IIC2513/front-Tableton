import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./Index"
import App from "./App"
import LoginPage from "../login/loginPage"
import IndexPartida from "../partida/IndexPartida"
import Nosotros from "../info/Nosotros"
import Reglas from "../info/Reglas"
import LandingPage from "../landingPage/LandingPage"

function Routing(){
    return(
        <>
        <BrowserRouter>
        
            <Routes>

                <Route path={"/"} element= {<Index></Index>}></Route>
                <Route path={"/landingpage"} element = {<LandingPage></LandingPage>}></Route>
                <Route path={"/login"} element= {<LoginPage></LoginPage>}></Route>
                <Route path="/nosotros" element={<Nosotros></Nosotros>}></Route>
                <Route path="/reglas" element={<Reglas></Reglas>}></Route>
                <Route path={"/partida/:partidaId"} element= {<IndexPartida></IndexPartida>}></Route>

            </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default Routing