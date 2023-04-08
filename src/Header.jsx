import React from 'react'
import PricingRadioButtons from './PricingRadioButtons'

function Header() {
  return (
    <div className='Header'>

    <header>
     <h1 className='main-header'>Buy this image</h1>
     <h3 className='sub-header'>Standard licenses</h3>
     </header>
     <div className="selecting-pricing">
      <PricingRadioButtons/>
     </div>
     <div className="buttons">
      <button className='buy-now'>Buy Now</button>
      <button className='add-cart'>Add to cart</button>
     </div>


    </div>
  )
}

export default Header