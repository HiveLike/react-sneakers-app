import { useContext } from 'react'
import product from '../../assets/image-1.png'
import { CartContext } from '../../pages/Root'
import formatMoney from '../../utils/formatMoney'
import { CancelIcon } from "../Icons/Icons"

const CartItem = ({item}) => {

    const {removeCartItemById} = useContext(CartContext);

    return (
        <div className="cart-item">
            <img src={item.preview} alt={item.title} />

            <div className="cart-item__content">
                <h4>{item.title}</h4>
                <p className="price">{formatMoney(item.price)}</p>
            </div>

            <button onClick={removeCartItemById.bind(this, item.id)}>
                <CancelIcon />
            </button>
        </div>
    )
}

export default CartItem;