import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./Index"
import App from "./App"
import LoginPage from "../login/loginPage"

function Routing(){
    return(
        <>
        <BrowserRouter>
        
            <Routes>

                <Route path={"/"} element= {<Index></Index>}></Route>
                <Route path={"/login"} element= {<LoginPage></LoginPage>}></Route>

            </Routes>
        
        </BrowserRouter>
        </>
    )
}

export default Routing