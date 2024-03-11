import React, { useState } from 'react';

const OrderManagement = () => {
  // Define state for orders
  const [orders, setOrders] = useState([
    { id: 1, name: 'Order 1', items: ['Item 1', 'Item 2'], status: 'Pending' },
    { id: 2, name: 'Order 2', items: ['Item 3', 'Item 4'], status: 'Processing' },
    { id: 3, name: 'Order 3', items: ['Item 5', 'Item 6'], status: 'Completed' },
  ]);

  const handleProceedToPayment = (orderId) => {
    console.log(`Proceeding to payment for order ${orderId}`);
  };

  return (
    <div className="justify-center bg-white w-7/12 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <div className="flex flex-col gap-4">
        {orders.map(order => (
          <div key={order.id} className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-bold">{order.name}</h3>
            <p className="mb-2">Status: {order.status}</p>
            <ul>
              {order.items.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              onClick={() => handleProceedToPayment(order.id)}
            >
              Proceed to Payment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
