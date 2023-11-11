import { useState } from "react";
import './Orders.css';
import Menu from "./Menu";

function Orders() {

    const [orders, setOrders] = useState([]);

    // const addOrders = () => {
    //     setOrders([...orders,
    //         {
    //             id:,
                
    //         }
    //     ])
    // }

    const removeOrder = () => {

    }

    return (
    <div className="container">
        <div className="orders">
            <div className="orders-header">
                Your Orders:
            </div>
        </div>

        <div className="menu">

        </div>
    </div>
    );
}

export default Orders;