// Dishes.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Dishes = ({ restaurants ,}) => {
    const { id } = useParams();
    const restaurant = restaurants.find(rest => rest.id === parseInt(id));

    if (!restaurant) {
        return <h2>Restaurant not found</h2>;
    }

    return (
     <div>
            <section className='container'>
        <div className='row'>
            <div className='col-md-4'>
                {restaurant.dishes.map(dish => (
                    <div className='card mb-3' key={dish.id}>
                        <img src={dish.image} className='card-img-top' alt={dish.name}></img>
                        <div className='card-body'>
                            <h5 className='card-title'>{dish.name}</h5>
                            <p className='card-text'>Price: {dish.price}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    </div>
    
    )
};

export default Dishes;
