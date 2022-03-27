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


// Question#01: How Does React Work?

// React has its own DOM, as like as that of a browser. Whenever a component's state is changed, then the code is re rendered by DOM, and browser has to repaint each and every element on the screen. It takes a lot of mathematical and other calculations.
// That’s why an app would have multiple state changes.
// So browser is doing unnecessary cycling of complete DOM whereas only a single elements' state has changed. Thus makes the browser slower. And that's the reason why, React has Virtual DOM. It helps in minimizing the actual changes on browser DOM. Virtual DOM will be an exact copy of real DOM. In React, whenever a components' state changes, the changes are reflected in Virtual DOM. Thus, Virtual DOM has the updated state of the component.
// React implements a virtual DOM that is basically a DOM representation in JavaScript. So when it needs to read or write to the DOM. It will use the virtual representation of it
// Although React was conceived to be used in the browser, because of its design it can also be used in the server with Node.js.


// Question#02: What is the difference between state and props.

// Props are read-only and immutable. It allows to pass data from one component to other components as an argument. It can be accessed by the child component. Props are used to communicate between components. Stateless component can have Props. Props make components reusable and they are external and controlled by whatever renders the component.



// State changes can be asynchronous and it is mutable. State holds information about the components. It cannot be accessed by child components. States can be used for rendering dynamic changes with the component. Stateless components cannot have State, It cannot make components reusable. The State is internal and controlled by the React Component itself.

