import React, {  useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();


  useEffect(() => {
    const db = getFirestore();
    const productDoc = doc(db, "items", id);


    getDoc(productDoc)
      .then((snapshot) => {
        if (snapshot.exists()) {
          setProduct({ id: snapshot.id, ...snapshot.data() });
        }
      })

      .catch((error) =>console.log({ error }));
  }, [id]);


  if (!product) {
    return <p>Cargando</p>;
  }
 
 
  return (
    <div>
      <ItemDetail product={product} />
     
    </div>
  );
}


export default ItemDetailContainer;