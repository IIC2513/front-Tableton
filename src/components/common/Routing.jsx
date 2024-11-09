import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./Index"
import App from "./App"

function Routing(){
    return(
        <>
        <BrowserRouter>
        
            <Routes>

                <Route path={"/"} element= {<Index></Index>}></Route>
                <Route path={"/login"} element= {<App></App>}></Route>

            </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default Routing