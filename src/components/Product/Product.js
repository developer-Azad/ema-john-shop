import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
const element = <FontAwesomeIcon icon={faShoppingCart} />

const Product = (props) => {
    // console.log(props);
    const {img, name, price, seller, stock, star} = props.product;
    // console.log(props.product);
    return (
        <div className="product">
            <div>
                 <img src={img} alt="" />
            </div>
            <div>
                 <h4 className="product-name">{name}</h4>
                 <p>by: {seller}</p>
                 <p className="text-price">${price}</p>
                 <br />
                    <p>only {stock} left in stock - order soon</p>
            <Rating 
            initialRating={star}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star icon-color"
            readonly
            ></Rating>
            <br />
            <button
            onClick={()=> props.handleAddToCart(props.product)}
            className="btn-add">
                {element} add to cart</button>
            </div>
            </div>
    );
};

export default Product;