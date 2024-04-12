import React from 'react'
import { SearchProduct } from '.'


const Header = () => {
  return (
    <header className='w-full flex items-center justify-around'>
        <div>BUYTHRIFT</div>
        <SearchProduct/>
        <div className='flex'>
            <p>Account</p>
            <p>Notification</p>
            <p>Cart</p>
        </div>


    </header>
  )
}

export default Header