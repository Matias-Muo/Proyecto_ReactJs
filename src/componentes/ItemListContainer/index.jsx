import ItemList from "../ItemList";
import Products from "../../mocks/products";
import {useEffect, useState } from "react";
import "./itemListContainer.css";



function ItemListContainer ({ greeting,categoryId, isCategoryRoute}){


    const [products, setProducts] = useState([]);

    useEffect(() => {
      const productsPromise = new Promise((resolve, reject) =>
       setTimeout(() => resolve(Products), 2000)
      ); 

      productsPromise 
        .then((response)=> {
         if (isCategoryRoute) { 
          const productsFiltered = response.filter(
            (product) =>product.category === categoryId
          );
          setProducts (productsFiltered);
         }else {
          setProducts(response);
         }

        })
        .catch ((err) => console.log(err))
      
    }, [categoryId,isCategoryRoute]);
    
    return(
    <div>

          <div>{greeting}</div>
          <div>  
            <h2 className= "titulo">Productos</h2>
            <ItemList products={products} />
          </div>
    </div>

    ) ;
   

}





export default ItemListContainer