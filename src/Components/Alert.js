import React from 'react'

export default function Alert(props) {
    const {checkoutAlert,addAlert}=props;
  return (
    <div>
    {checkoutAlert && <div>
      <div className="alert alert-success" role="alert">
      Your order has been placed successfully
</div>
    </div>}
    {addAlert && <div>
      <div className="alert alert-success" role="alert">
      Item added to cart successfully
</div>
    </div>}
    </div>
  )
}
