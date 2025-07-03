import React from 'react';
import { CartItem } from './ShoppingCartPage'; // Re-use CartItem definition

// Define a structure for a past order
export interface PastOrder {
  id: string;
  date: string;
  totalAmount: number;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';
  items: CartItem[]; // A few items from the order
  shippingAddressPreview: string; // e.g., "City, State"
}

// Dummy past order data
const dummyOrders: PastOrder[] = [
  {
    id: 'ORD1001',
    date: '2023-10-15',
    totalAmount: 65000,
    status: 'Delivered',
    items: [
      { id: 'plp-1', name: 'Elegant Maroon Lehenga', price: 65000, image: 'https://readdy.ai/api/search-image?query=Elegant%20Indian%20bride%20wearing%20a%20luxurious%20deep%20maroon%20and%20gold%20lehenga%2C%20full%20shot%2C%20studio%20lighting&width=400&height=500&seq=20', quantity: 1 },
    ],
    shippingAddressPreview: 'Mumbai, MH',
  },
  {
    id: 'ORD1002',
    date: '2023-11-01',
    totalAmount: 87500,
    status: 'Processing',
    items: [
      { id: 'plp-2', name: 'Pastel Green Anarkali', price: 48000, image: 'https://readdy.ai/api/search-image?query=Woman%20in%20pastel%20green%20Anarkali%20suit%2C%20ethnic%20wear%2C%20full%20shot%2C%20outdoor%20setting&width=400&height=500&seq=21', quantity: 1 },
      { id: 'plp-6', name: 'Mustard Yellow Kurta Set', price: 35000, image: 'https://readdy.ai/api/search-image?query=Woman%20in%20mustard%20yellow%20kurta%20set%2C%20ethnic%20wear%2C%20full%20shot%2C%20casual%20setting&width=400&height=500&seq=25', quantity: 1 },
    ],
    shippingAddressPreview: 'Delhi, DL',
  },
  {
    id: 'ORD1003',
    date: '2023-11-20',
    totalAmount: 80000,
    status: 'Shipped',
    items: [
        { id: 'plp-7', name: 'Black Velvet Lehenga', price: 80000, image: 'https://readdy.ai/api/search-image?query=Woman%20in%20black%20velvet%20lehenga%2C%20bridal%20wear%2C%20full%20shot%2C%20dramatic%20lighting&width=400&height=500&seq=26', quantity: 1 },
    ],
    shippingAddressPreview: 'Bangalore, KA',
  }
];

interface OrderHistoryPageProps {
  // We might pass the current user ID later to fetch their specific orders
  // For now, it will just display dummyOrders
  onNavigateToProduct: (productId: string) => void; // For clicking on an item, if needed
}

const OrderHistoryPage: React.FC<OrderHistoryPageProps> = ({ onNavigateToProduct }) => {
  const orders = dummyOrders; // Use dummy data for now

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">My Order History</h1>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <i className="fas fa-receipt text-6xl text-gray-300 mb-6"></i>
          <p className="text-xl text-gray-600">You haven't placed any orders yet.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map(order => (
            <div key={order.id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 pb-4 border-b">
                <div>
                  <h2 className="font-serif text-xl font-semibold text-[#D4AF37]">Order ID: {order.id}</h2>
                  <p className="text-sm text-gray-500">Date: {new Date(order.date).toLocaleDateString()}</p>
                </div>
                <div className="mt-2 sm:mt-0 text-left sm:text-right">
                  <p className="text-lg font-semibold">Total: ₹{order.totalAmount.toLocaleString()}</p>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                    order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                    'bg-red-100 text-red-700' // Cancelled
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-md font-semibold mb-2">Items:</h3>
                {order.items.slice(0, 2).map(item => ( // Show first 2 items as preview
                    <div key={item.id} className="flex items-center justify-between py-2 text-sm">
                        <div className="flex items-center">
                            <img src={item.image} alt={item.name} className="w-12 h-14 object-cover rounded mr-3"/>
                            <span>{item.name} (Qty: {item.quantity})</span>
                        </div>
                        <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                ))}
                {order.items.length > 2 && <p className="text-xs text-gray-500 mt-1">...and {order.items.length - 2} more item(s)</p>}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t mt-4">
                <p className="text-sm text-gray-600 mb-2 sm:mb-0">Shipping to: {order.shippingAddressPreview}</p>
                <button
                  onClick={() => alert(`Viewing details for order ${order.id} - Not implemented yet`)}
                  className="text-sm bg-gray-100 text-gray-800 px-4 py-2 !rounded-button hover:bg-[#D4AF37] hover:text-white transition-colors"
                >
                  View Order Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
