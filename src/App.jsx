import './App.css';
import Header from "./components/Header.jsx";
import Total from './components/Total.jsx';
import { useState } from "react";


const menu = [ //array of objects to be displayed on the menu
  {
      id:1,
      name:"Regular Burger",
      price:3.00,
      img:<img src="src/assets/low-poly-burger-with-plate.png" alt="regular burger" />
  },
  {
      id:2,
      name:"Cheeseburger",
      price:2.00,
      img:<img src="src/assets/low-poly-cheeseburger.png" alt="cheeseburger" />
  },
  {
      id:3,
      name:"Kid's Burger",
      price:1.00,
      img:<img src="src/assets/low-poly-kids-burger.png" alt="kid's burger" />
  },
  {
      id:4,
      name:"Triple Cheeseburger",
      price:3.50,
      img:<img src="src/assets/low-poly-triple-cheeseburger.png" alt="triple cheeseburger" />
  },
  {
      id:5,
      name:"Fries",
      price:1.50,
      img:<img src="src/assets/low-poly-fries.png" alt="fries" />
  },
  {
      id:6,
      name:"Soda",
      price:1.20,
      img:<img src="src/assets/low-poly-soda.png" alt="soda" />
  }
]

let counter = 0; //counter to help keep track of each unique order
let totalCost = 0; //tracks price of all ordered items combined


function App() {

  const [orders, setOrders] = useState([]); //useState to manage list of chosen items that are ordered
  
    const addOrder = (item) => {
      setOrders([
        ...orders,
        {
          id: counter,
          name:item.name,
          price:item.price
        }
      ])
      counter ++; //increments counter by one to give each order object a unique id to keep track of it
      totalCost += item.price; //adds price of current item to total price
    }

    //removes chosen order by filtering it out of array
    const removeOrder = (item) => {
      console.log(item)
      totalCost -= item.price;
      setOrders(orders.filter((order) => order.id !== item.id))
    }

    const checkout = () => {
      if(orders.length > 0){ //if there has been something ordered, clears orders array and displays thank you message
        setOrders([])
        counter= 0;
        totalCost= 0;
        alert("Thank you for your purchase!");
      }else{ //if nothing has been ordered, tells user to order something
        alert("Please order something first.");
      }
    }

  return (
  <>
    <div><Header /></div>
    <div className="container">
      <div className="orders">
        <div className="orders-header">Your Orders</div>
        <div className="checkout">
          {/* <div>Total: ${(totalCost.toFixed(2))} </div> */}
          <div>Total: $<Total total={totalCost}/> </div>
            {/* button to "buy" the food */}
            <button onClick={checkout}>Checkout</button>
          </div>
        {/* maps through orders array to display each order for the customer to see */}
        <div>{orders.map((order, index) =>{
          return(
            <div key={index} className="list order-list">
              <div>{index+1}. {order.name}</div>
              <div>${(order.price).toFixed(2)}</div>
              {/* button to remove an order from orders array */}
              <button onClick={() => {removeOrder(order)}}>Remove</button>
            </div>)
          })}
        
        </div>


      </div>

      <div className="menu-container">
        <div>
          <div className="menu-header">Menu</div>
          <div className="menu-list">

            {/* maps through menu array to display options available to order */}
            {menu.map((food) =>{
              return (
                <li key={food.id} className="list">
                    <ul>{food.name}</ul>
                    <ul>${(food.price).toFixed(2)}</ul>
                    <ul>{food.img}</ul>

                    {/* button to add an order to the orders array */}
                    <ul><button onClick={() => addOrder(food)}>Add to Cart</button></ul>
                </li>)
            })}
          </div>
      </div>
      </div>
    </div>

  </>)}

export default App;