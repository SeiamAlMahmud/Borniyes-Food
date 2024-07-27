import React, { useContext } from 'react'
import './placeOrder.css'
import { foodStoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotaCartAmmount} = useContext(foodStoreContext)
  return (
    <>
      <form action="" className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
          </div>
          <input type="email" placeholder='Email Address' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">

          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p> $ {getTotaCartAmmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>$ {getTotaCartAmmount() === 0 ? 0 : 2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>$ {getTotaCartAmmount() === 0 ? 0 : getTotaCartAmmount() + 2}</b>
              </div>
            </div>
            <button >Proceed to Payment</button>
          </div>

        </div>
      </form>
    </>
  )
}

export default PlaceOrder