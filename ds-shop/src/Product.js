import React from 'react';
import "./Product.css";

function Product() {
    return (
    <div>
        <div className="product">
            <div className="product_info">
                <p>
                    <strong>Product 1</strong>
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quae.
                </p>
                <p className='price'>
                    <strong>$19.99</strong>
                </p>
            </div>
            <img src="https://th.bing.com/th/id/OIP.IUWaulG5YYWcKboaK6771gHaKY?w=129&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
            <button>Add to Cart</button>
        
        </div>
    </div>
  )
}
export default Product;