import "./cardWidget.css"
import Widget from "../../assets/images/shopping-cart.png"

function CardWidget(){
    return(
        <div className="card-widget">
            <img className="img-widget" src= {Widget} alt="imagen del carrito" />
            <span>3</span>
        </div>
    )
}
export default CardWidget;