import { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import './Header.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
    return (
        <Fragment>
            <header className='header'>
                <h1>Meal Master</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className='main-image'>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    )
}

export default Header
