import {useParams} from 'react-router-dom';
import ItemDetailContainer from "../componentes/ItemDetailContainer";
import { useContext } from 'react';
import {CartContext} from '../../src/context/index'


function ItemRoot(){
    const ContextValue=useContext(CartContext)
    const parameters=useParams();

        return (
            <div>
                <ItemDetailContainer itemId={parameters.id}/>
       
            </div>
    )
}

export default ItemRoot;