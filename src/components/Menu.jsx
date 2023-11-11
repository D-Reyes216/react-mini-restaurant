import {useState} from "react";
import './Menu.css';

function Menu() {
    const menu = [
        {
            id:1,
            name:"Regular Burger",
            price:"$3.00",
            img:<img src="src\assets\low-poly-burger-with-plate.png" alt="regular burger" />
        },
        {
            id:2,
            name:"Cheeseburger",
            price:"2.00",
            img:<img src="src\assets\low-poly-cheeseburger.png" alt="cheeseburger" />
        },
        {
            id:3,
            name:"Kid's Burger",
            price:"#1.00",
            img:<img src="src\assets\low-poly-kids-burger.png" alt="kid's burger" />
        },
        {
            id:4,
            name:"Triple Cheeseburger",
            price:"$3.50",
            img:<img src="src\assets\low-poly-triple-cheeseburger.png" alt="triple cheeseburger" />
        },
        {
            id:5,
            name:"Fries",
            price:"$1.50",
            img:<img src="src\assets\low-poly-fries.png" alt="fries" />
        },
        {
            id:6,
            name:"Soda",
            price:"$1.20",
            img:<img src="src\assets\low-poly-soda.png" alt="soda" />
        }
    ]
        
    return(
        menu.map((food) =>{
            return (
                <li key={food.id} className="list">
                    <ul>{food.name}</ul>
                    <ul>{food.price}</ul>
                    <ul>{food.img}</ul>
                </li>
            )
        })
    )
    // return <div>{menuList}</div>
                     
                     
}



export default Menu;