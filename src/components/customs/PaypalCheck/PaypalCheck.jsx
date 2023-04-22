import React, { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'

const PaypalCheck = ({ product }) => {
  const [paidFor, setPaidFor] = useState(false)
  const [error, setError] = useState(null)

  const handleApprove = (orderID) => {
    // Call backend function to fulfill order
    console.log(orderID)
    // If response is success
    setPaidFor(true)
    // Refresh user's account or subscription status

    //if the response is failure
    // setError('Your payment was processed successfully. However, we are unable to fullfill your purchase. Please contact us at support@godigit.io for assistance')
  }

  if (paidFor) {
    // Display success message, modal or redirect user to success page
    alert('Thank you for your purchase!')
  }

  if (error) {
    // Display error message, modal or redirect user to error page
    alert(error)
  }

  return (
    <PayPalButtons
      style={{
        color: 'silver',
        layout: 'horizontal',
        height: 48,
        tagline: false,
        shape: 'pill',
      }}
      onClick={(data, actions) => {
        // Validate on button click, client or srver side
        const hasAlreadyBoughtCourse = false
        if (hasAlreadyBoughtCourse) {
          setError(
            'You already bought this course. Go to your account to view your purchase.'
          )
          return actions.reject()
        } else {
          return actions.resolve()
        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.name,
              amount: {
                currency_code: 'USD',
                value: product.price,
              },
            },
          ],
        })
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture()
        console.log('order', order)

        handleApprove(data.orderID)
      }}
      onCancel={() => {
        // Display cancel message, modal or redirect user to cancel page or barck to cart
      }}
      onError={(err) => {
        setError(err)
        console.error('Paypal Checkout onError', err)
      }}
    />
  )
}

export default PaypalCheck
