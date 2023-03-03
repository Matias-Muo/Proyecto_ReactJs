import ItemListContainer from './componentes/ItemListContainer'
import NavBar from './componentes/NavBar'


import './App.css'

function App() {
 

  return (
    <div className="App">
      <div>
          <NavBar/>
          <ItemListContainer greeting={"EL ARTE DE FLUIR"}/>
      </div>

      
    </div>


   
  )
}

export default App
