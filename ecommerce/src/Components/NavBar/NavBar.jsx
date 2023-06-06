import "./NavBar.css";
import "../CartWidget/CartWidget";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
    <header>
        <h1>Nombre de la Tieda</h1>
        <nav>
        <ul>
            <li>seccion 1</li>
            <li>seccion 2</li>
            <li>seccion 3</li>
            <li>seccion 4</li>
        </ul>
        <CartWidget/>
        </nav>
    </header>
  )
}

export default NavBar