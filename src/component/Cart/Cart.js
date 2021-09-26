import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props || {}
    const totalReducer =(prevValue, cartProduct) => prevValue + cartProduct.makingCost;
    const total = cart.reduce( totalReducer ,0);
    return (
        <div className="sizing-cart cart-bg">
            <h1 className="text-center mt-4"><i className="far fa-calendar-check fa-2x"></i></h1>
            <h1>Selected Item: {cart.length}</h1>
            <ul>
                {
                    cart.map(cartProduct => <div className="d-flex my-3 item-bg">
                        <img src={cartProduct.poster} className="w-25 h-25 rounded" alt="" />
                        <div className="ms-2">
                        <h6 >Name: {cartProduct.name}</h6>
                        <p>Making Cost: {cartProduct.makingCost}</p>
                        </div>
                        
                    </div>
                        )
                    }
                    <hr />
                    <h2>Total Cost:{total}M</h2>
            </ul>
        </div>
    );
};

export default Cart;