import React, { useContext, useEffect } from 'react'
import ShoppingBagItem from '../ShoppingBagItem/ShoppingBagItem'
import { steffectContext } from '../../Context'
import { Link } from 'react-router-dom'

const ShoppingBag = () => {
  const { cart } = useContext(steffectContext)
  
  cart.map((item)=>{
    console.log(`quantity: ${item.quantity}`)
  })

  return(
    <main className="shopping-bag-page">
    <h1>Shopping Bag</h1>
    <p className="bag-counter">Your bag (0)</p>

    {/* <!-- If bag is empty, display 'Your shopping bag is empty.' with a 'continue shopping' button--> */}
    <Link to="/products"><button className="add-to-bag">Continue Shopping</button></Link>

    <table class="bag-contents">
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Subtotal</th>
        <th>Remove</th>
      </tr>
      
      {cart.map((item)=>
        <ShoppingBagItem key={item.product.id} item={item} quantity={item.quantity}/>
      )}

      <tr className="total-price">
        <td>Total:</td>
        <td></td>
        <td>£110</td>
        <td></td>
      </tr>
    </table>
    <a href="#"><button className="add-to-bag">Check Out</button></a>

  </main>
  )
}

export default ShoppingBag