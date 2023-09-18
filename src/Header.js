import image from "./images/logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (<nav>
        <img className='logo' src={image}  alt="logo"/>
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/catalog">Flower</Link>
        <Link className='link' to="/contacts">contacts</Link>
        </nav>
    )
}

export default Header;