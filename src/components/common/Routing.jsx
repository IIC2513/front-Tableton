import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Background from "./Background"

function Routing(){
    return(
        <>
        <BrowserRouter>
        
            <Routes>

                <Route path={"/"} element= {<Background></Background>}></Route>

            </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default Routing