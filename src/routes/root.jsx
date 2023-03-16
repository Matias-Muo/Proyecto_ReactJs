import ItemListContainer from '../componentes/ItemListContainer';
import NavBar from '../componentes/NavBar';
import './App.css';
import { useParams } from 'react-router-dom';

function Root() {
  const params = useParams ();
  const isCategoryRoute = Boolean(params.id);
  
  return (
    <div className="App">
      <div>
          <NavBar/>
          <ItemListContainer isCategoryRoute={isCategoryRoute} 
          categoryId={params.id} greeting={"EL ARTE DE FLUIR"}/>
      </div>

      
    </div>


   
  )
}

export default Root;
