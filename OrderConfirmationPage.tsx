import React, { useEffect } from 'react';
import { CartItem } from './ShoppingCartPage'; // Assuming CartItem is exported here
import { ShippingFormData } from './ShippingPage'; // Assuming ShippingFormData is exported here

interface OrderConfirmationPageProps {
  orderNumber: string; // Could be generated or a timestamp
  cartItems: CartItem[];
  shippingDetails: ShippingFormData | null;
  orderTotal: number;
  onContinueShopping: () => void;
  onClearCart: () => void; // Callback to clear the cart in App.tsx
}

const OrderConfirmationPage: React.FC<OrderConfirmationPageProps> = ({
  orderNumber,
  cartItems,
  shippingDetails,
  orderTotal,
  onContinueShopping,
  onClearCart
}) => {

  useEffect(() => {
    onClearCart(); // Clear the cart when the confirmation page loads
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs only once on mount

  if (!shippingDetails) {
    return (
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="font-serif text-3xl font-bold text-red-600 mb-6">Order Confirmation Error</h1>
            <p className="text-lg text-gray-700 mb-8">There was an issue retrieving your order details. Please contact support.</p>
            <button
                onClick={onContinueShopping}
                className="bg-[#D4AF37] text-white px-8 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300"
            >
                Continue Shopping
            </button>
        </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl text-center">
        <i className="fas fa-check-circle text-6xl text-green-500 mb-6"></i>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">Thank You For Your Order!</h1>
        <p className="text-lg text-gray-600 mb-2">Your order <span className="font-semibold text-[#D4AF37]">#{orderNumber}</span> has been placed successfully.</p>
        <p className="text-gray-600 mb-8">We've sent a confirmation email to you with the order details.</p>

        <div className="my-8 border-t border-b border-gray-200 py-6">
          <h2 className="font-serif text-2xl font-semibold mb-6 text-left">Order Summary</h2>
          {cartItems.map(item => (
            <div key={item.id} className="flex justify-between items-center py-3 border-b last:border-b-0 border-gray-100">
              <div className="flex items-center text-left">
                <img src={item.image} alt={item.name} className="w-16 h-20 object-cover rounded-md mr-4"/>
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
              <p className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</p>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
            <span>Total Paid:</span>
            <span>₹{orderTotal.toLocaleString()}</span>
          </div>
        </div>

        <div className="text-left mb-8">
          <h3 className="font-serif text-xl font-semibold mb-3">Shipping to:</h3>
          <p className="text-gray-700">{shippingDetails.fullName}</p>
          <p className="text-gray-700">{shippingDetails.addressLine1}{shippingDetails.addressLine2 ? `, ${shippingDetails.addressLine2}` : ''}</p>
          <p className="text-gray-700">{shippingDetails.city}, {shippingDetails.state} {shippingDetails.zipCode}</p>
          <p className="text-gray-700">{shippingDetails.country}</p>
          <p className="text-gray-700">Phone: {shippingDetails.phoneNumber}</p>
        </div>

        <button
          onClick={onContinueShopping}
          className="w-full md:w-auto bg-[#D4AF37] text-white px-10 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300 text-lg"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
