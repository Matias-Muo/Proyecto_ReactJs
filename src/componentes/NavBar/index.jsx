import CardWidget from "../CartWidget";
import "./navBar.css";


function NavBar(){
    return (
        <div className="navbar">
            <ul >
                <li>
                    <button >Inicio</button>
                </li>
                <li>
                    <button>Bio</button>
                </li>
                <li>
                    <button>Contacto</button>
                </li>
                
            </ul>
            <CardWidget />
        </div>
     );

}
export default NavBar;