import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/Storecontext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list fade-in">
                {food_list.map((item,index) => {
                    if (category==="All" || category===item.category){
                        return (
                            <div className="food-item-wrapper" key={index}>
                                <FoodItem 
                                    id={item._id}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                    image={item.image}
                                />
                            </div>
                        )
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default FoodDisplay