import React from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number; // Store price as a number for calculations
  image: string;
  quantity: number;
}

interface ShoppingCartPageProps {
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onContinueShopping: () => void; // To navigate back to product listings or home
  onProceedToCheckout: () => void; // To navigate to checkout flow
}

const ShoppingCartPage: React.FC<ShoppingCartPageProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
  onProceedToCheckout,
}) => {
  const calculateSubtotal = (item: CartItem) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  const handleQuantityChange = (productId: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1) {
      onUpdateQuantity(productId, newQuantity);
    } else if (newQuantity === 0) {
      // Optionally, ask for confirmation before removing or just remove
      onRemoveItem(productId);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <i className="fas fa-shopping-cart text-6xl text-gray-300 mb-6"></i>
          <p className="text-xl text-gray-600 mb-4">Your cart is currently empty.</p>
          <button
            onClick={onContinueShopping}
            className="bg-[#D4AF37] text-white px-8 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300 cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items List */}
          <div className="lg:w-2/3">
            <div className="space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
                  <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded-md"/>
                  <div className="flex-grow text-center sm:text-left">
                    <h3 className="font-serif text-lg font-medium">{item.name}</h3>
                    <p className="text-gray-600 text-sm">Price: ₹{item.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-3 my-2 sm:my-0">
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                      className="px-3 py-1 border rounded-md hover:bg-gray-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <i className="fas fa-minus text-sm"></i>
                    </button>
                    <span className="w-10 text-center">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                      className="px-3 py-1 border rounded-md hover:bg-gray-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <i className="fas fa-plus text-sm"></i>
                    </button>
                  </div>
                  <p className="font-medium w-24 text-center sm:text-right">₹{calculateSubtotal(item).toLocaleString()}</p>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Remove item"
                  >
                    <i className="fas fa-trash-alt text-lg"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md sticky top-28"> {/* sticky top for when content scrolls */}
              <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{calculateTotal().toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">FREE</span> {/* Or calculate shipping */}
                </div>
                {/* Add discounts or taxes if applicable */}
              </div>
              <div className="flex justify-between font-bold text-xl border-t pt-4 mb-6">
                <span>Total</span>
                <span>₹{calculateTotal().toLocaleString()}</span>
              </div>
              <button
                onClick={onProceedToCheckout}
                className="w-full bg-[#D4AF37] text-white px-6 py-3 font-medium !rounded-button hover:bg-[#B8860B] transition-colors duration-300 cursor-pointer text-lg"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={onContinueShopping}
                className="w-full mt-4 text-[#D4AF37] hover:underline text-center"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
