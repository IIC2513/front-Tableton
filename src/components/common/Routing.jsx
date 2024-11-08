import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./Index"
import App from "./App"

function Routing(){
    return(
        <>
        <BrowserRouter>
        
            <Routes>

                <Route path={"/"} element= {<Index></Index>}></Route>

            </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default Routing