import './AvailableMeals.css'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Pizza',
        description: 'Freshly made dough with delicious toppings',
        price: 229.99,
    },
    {
        id: 'm2',
        name: 'Burger',
        description: 'Juicy meat patty with crispy vegetables',
        price: 189.99,
    },
    {
        id: 'm3',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 216.5,
    },
    {
        id: 'm4',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 212.99,
    },
    {
        id: 'm5',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 218.99,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ))

    return (
        <section className='meals'>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals;
