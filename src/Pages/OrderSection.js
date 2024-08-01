import React, { useState } from 'react';

const OrderSection = () => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);

  // Define products
  const products = [
    { name: 'Top Up T-Shirt', quantity: 1, price: 250.00 },
    { name: 'Polo Shirt', quantity: 1, price: 100.00 },
  ];

  // Calculate cart subtotal and order total
  const cartSubtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const orderTotal = cartSubtotal - discount;

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
  };

  const applyCoupon = () => {
    if (couponCode === 'DISCOUNT10') {
      setDiscount(10); // Flat $10 discount
    } else {
      setDiscount(0);
    }
  };

  const placeOrder = () => {
    alert('Order placed successfully!');
  };

  const handlePaymentOptionClick = (option) => {
    setSelectedPaymentOption(option);
  };

  const getPaymentDescription = () => {
    switch (selectedPaymentOption) {
      case 'bank-transfer':
        return 'Please transfer the total amount to the following bank account. Bank details will be provided upon checkout.';
      case 'cheque':
        return 'Please send a cheque to our address. The order will be processed once the cheque is received and cleared.';
      case 'paypal':
        return 'You will be redirected to PayPal to complete your payment securely.';
      default:
        return '';
    }
  };

  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block mb-2 text-sm font-semibold text-gray-700">Coupon Code:</label>
        <div className="flex">
          <input 
            type="text" 
            placeholder="Enter coupon code" 
            value={couponCode}
            onChange={handleCouponChange}
            className="p-2 flex-grow border border-gray-300 rounded-l-md"
          />
          <button onClick={applyCoupon} className="p-2 bg-black text-white rounded-r-md">Apply</button>
        </div>
      </div>
      
      <h2 className="text-xl font-semibold mb-4 text-center">Your Order</h2>
      
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 p-2 text-left">Product</th>
            <th className="border-b-2 border-gray-300 p-2 text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border-b border-gray-300 p-2">{product.name} x {product.quantity}</td>
              <td className="border-b border-gray-300 p-2 text-right">${product.price.toFixed(2)}</td>
            </tr>
          ))}
          <tr>
            <td className="border-b border-gray-300 p-2 font-bold">Cart Subtotal</td>
            <td className="border-b border-gray-300 p-2 text-right font-bold">${cartSubtotal.toFixed(2)}</td>
          </tr>
          {discount > 0 && (
            <tr>
              <td className="border-b border-gray-300 p-2 font-bold">Discount</td>
              <td className="border-b border-gray-300 p-2 text-right font-bold">-${discount.toFixed(2)}</td>
            </tr>
          )}
          <tr>
            <td className="border-b border-gray-300 p-2 font-bold">Order Total</td>
            <td className="border-b border-gray-300 p-2 text-right font-bold">${orderTotal.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold mb-2">Payment Options:</h3>
        <div className="space-y-4">
          <div>
            <button 
              onClick={() => handlePaymentOptionClick('bank-transfer')}
              className={`w-full py-2 px-4 border rounded-md ${selectedPaymentOption === 'bank-transfer' ? 'bg-gray-200' : 'bg-white'} hover:bg-gray-100`}
            >
              Direct Bank Transfer
            </button>
            {selectedPaymentOption === 'bank-transfer' && (
              <p className="mt-2 text-sm text-gray-600">Please transfer the total amount to the following bank account. Bank details will be provided upon checkout.</p>
            )}
          </div>

          <div>
            <button 
              onClick={() => handlePaymentOptionClick('cheque')}
              className={`w-full py-2 px-4 border rounded-md ${selectedPaymentOption === 'cheque' ? 'bg-gray-200' : 'bg-white'} hover:bg-gray-100`}
            >
              Cheque Payment
            </button>
            {selectedPaymentOption === 'cheque' && (
              <p className="mt-2 text-sm text-gray-600">Please send a cheque to our address. The order will be processed once the cheque is received and cleared.</p>
            )}
          </div>

          <div>
            <button 
              onClick={() => handlePaymentOptionClick('paypal')}
              className={`w-full py-2 px-4 border rounded-md ${selectedPaymentOption === 'paypal' ? 'bg-gray-200' : 'bg-white'} hover:bg-gray-100`}
            >
              PayPal
            </button>
            {selectedPaymentOption === 'paypal' && (
              <p className="mt-2 text-sm text-gray-600">You will be redirected to PayPal to complete your payment securely.</p>
            )}
          </div>
        </div>
      </div>

      <div className="text-center">
        <button onClick={placeOrder} className="w-full py-2 bg-black text-white rounded-md text-lg">Place Order</button>
      </div>
    </div>
  );
};

export default OrderSection;
