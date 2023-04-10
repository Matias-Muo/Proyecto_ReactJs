
import Item from "../Item";
import "./itemList.css"

const ItemList = ({products}) =>{

  return (<div className="card-itemList">
    {products.map((product) =>(
    <Item key= {product.id} product={product}/>
   
  ))}
  </div>
  );

};

export default ItemList;

