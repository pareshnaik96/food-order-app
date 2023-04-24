import './MealItem.css'
import MealItemForm from './MealItemForm'
import { useContext } from 'react'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
    const cartCtx = useContext(CartContext)

    const price = `₹${props.price.toFixed(2)}`

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
    }

    return (
        <li className="meal">
            <div>
                <h3>{props.name}</h3>
                <div className="description"><h3>{props.description}</h3></div>
                <div className="price"><h3>{price}</h3></div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
}

export default MealItem;
