import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>selected items:{cart.length}</p>
            
            <button >
               <p>Choose for me</p>
           </button>
            <button >
               <p>Remove</p>
           </button>
        </div>
    );
};

export default Cart;