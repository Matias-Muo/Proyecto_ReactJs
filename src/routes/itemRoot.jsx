import { useParams } from "react-router-dom";
import NavBar from "../componentes/NavBar";
import ItemDetailContainer from "../componentes/ItemDetailContainer";

function ItemRoot(){
    const parametro=useParams();
    return(
        <div>
            
            <NavBar/>
            <h1 style={{fontSize:"20px"}} >Estoy en el item detail container</h1>
            <ItemDetailContainer itemId={parametro.id}/>
        </div>
    )
}

export default ItemRoot;