import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h2>Selected Items List</h2>
            
            <div className='cart-item'>
            
          
            {
                
                cart.map((item)=>( 
                <h4 key={item.id}>{<img className='photo' src={item.img}></img>} {item.name}</h4>))
            }
          
            
            
            </div>
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