import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {name, img, id, price, ratings} = props.product;
    const{addToCart} = props;
    
    return (
        <div className='product'>
           <img src ={img}></img>
           <div className='product-info' >
           <p className='product-name' >{name}</p>
           <p>Price:${price}</p>
           <p><small>Ratings:{ratings}</small>Stars</p>
           </div>
           <button onClick={() => addToCart(props.product)} className='button-cart'>
               <p>Add To Cart</p>
               <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
           
        </div>
    );
};

export default Product;