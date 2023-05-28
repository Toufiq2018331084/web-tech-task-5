import React from 'react'
import "./Product.css"

function Product() {
  return (
    <div className='product'>
              <div className="product__info">
        <p>demo procuct</p>
        <p className="product__price">
          <small>$</small>
          <strong>69</strong>
        </p>
        <div className='product_rating'>
            <p>*</p>
            <p>*</p>
            <p>*</p>
        </div>
    </div>
    <img src="https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/347823434_780356190371535_7996042308379445762_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeGSac_6NAJD2ebUzU3ZcvsJtNsZ7C-0nGm02xnsL7ScaR6QpFGkoz5uLsytBiDeiGOn2kitST6gruFbP2Y_fm38&_nc_ohc=82GIDRc9E-0AX8-It4o&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAGpcs0WdyURjJlGemexVafLFABBu2qFwoZVk0xEkU-vQ&oe=6478C7D7" alt=""/>
    <button>add to cart</button>
    </div>
  )
}

export default Product