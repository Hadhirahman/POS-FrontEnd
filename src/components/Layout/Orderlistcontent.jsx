import React, { useState } from 'react';

function Orderlistcontent() {
  // Sample order items data
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: 'Product 1', quantity: 2, price: 10, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', quantity: 1, price: 20, image: 'product2.jpg' },
    // Add more order items as needed
  ]);

  // Function to handle increasing item quantity
  const increaseQuantity = (id) => {
    setOrderItems(orderItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }));
  };

  // Function to handle decreasing item quantity
  const decreaseQuantity = (id) => {
    setOrderItems(orderItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }));
  };

  // Function to handle removing item from the order list
  const removeItem = (id) => {
    setOrderItems(orderItems.filter(item => item.id !== id));
  };

  // Calculate total price
  const totalPrice = orderItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);

  return (
    <div className="w-3/12 rounded-lg bg-white p-4">
      <h2 className="text-lg font-semibold mb-4">Order Items</h2>
      <ul>
        {orderItems.map((item) => (
          <li key={item.id} className="flex justify-between mb-2 items-center">
            <div className="flex items-center">
              <img src={item.image} alt={item.name} className="w-8 h-8 mr-2" />
              <span>
                <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 text-gray-600 font-bold py-1 px-2 rounded">
                  -
                </button>
                {item.quantity}
                <button onClick={() => increaseQuantity(item.id)} className="bg-gray-200 text-gray-600 font-bold py-1 px-2 rounded">
                  +
                </button>
              </span>
            </div>
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => removeItem(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <span className="font-semibold">Total:</span>
        <span>${totalPrice}</span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        Proceed to Payment
      </button>
    </div>
  );
}

export default Orderlistcontent;
