import { NavLink } from "react-router-dom";

const CartButton = () => {
    return (
        <button>Корзина <span>1204 руб.</span></button>
    )
}

const Header = () => {
    return (
        <header className="header">
            <div className="logo">

            </div>

            <div className="nav">
                <CartButton />
                <NavLink to="/favorites">Избранное</NavLink>
                <NavLink to="/orders">Заказы:</NavLink>
            </div>
        </header>
    )
}

export default Header;