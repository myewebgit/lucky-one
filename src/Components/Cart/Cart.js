import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>selected items:{cart.length}</p>
            <div className='cart-item'>
            {
                // cart.map((item)=>( 
                // <p  key={item.id}><img className='photo' src ={item.img}></img></p>))
            }
          
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