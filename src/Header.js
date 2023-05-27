import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className='header'>
        <img className='header_logo'
        src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png">
        </img>
        <div className='header_search'>
            <input className='header_searchInput' type='text'/>
        </div>
        <SearchIcon className='header_searchIcon'/>

        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLineOne'>hello</span>
                <span className='header_optionLineTwo'>sign in</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>returns</span>
                <span className='header_optionLineTwo'>& orders</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>prime</span>
            </div>
            <div className='header_optionBasket'>
                <ShoppingBasketIcon/>
                <span className='header_optionLineTwo header_basketCount'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header