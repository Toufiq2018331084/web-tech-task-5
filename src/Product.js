import React from 'react'
import "./Product.css"

function Product({id,title,image,price,rating}) {
  return (
    <div className='product'>
              <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product_rating'>
          {Array(rating)
          .fill()
          .map((_,i)=>(
            <p>*</p>
          ))}
        </div>
    </div>
    <img src={image} alt=""/>
    <button>add to cart</button>
    </div>
  )
}

export default Product