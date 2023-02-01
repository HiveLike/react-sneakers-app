import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const CartButton = () => {
    return (
        <button>
            <i class="fa-solid fa-cart-shopping"></i>
            <span>1204 руб.</span>
        </button>
    )
}

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="React Snaeakers logo" />

                <div>
                    <h1>React Sneakers</h1>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>

            <div className="nav">
                <CartButton />
                <NavLink to="/favorites">
                    <i class="fa-solid fa-heart"></i>
                </NavLink>
                <NavLink to="/orders">
                    <i class="fa-solid fa-user"></i>
                </NavLink>
            </div>
        </header>
    )
}

export default Header;