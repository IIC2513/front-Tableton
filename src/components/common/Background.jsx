import fondo from "../../assets/imgs/fondoDifuminado.png"
import "../../assets/styles/Background.css"


function Background(){
    return(
        <div className= "Background" style={{ backgroundImage: `url(${fondo})` }}>

        </div>
    )
}




export default Background