import { useState } from 'react';

function Orderlistcontent() {
  // Sample order items data
  const [orderItems, setOrderItems] = useState([
    { id: 1, name: 'Product 1', quantity: 2, price: 10, image: 'https://restaurent-point-of-sale.s3.eu-north-1.amazonaws.com/image-1709362673350.img' },
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
    <div className="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-black text-white p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Order Details</h2>
      <div className="overflow-auto max-h-72">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="py-2">Item</th>
              <th className="py-2">Image</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Price</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-2">{item.name}</td>
                <td className="py-2"><img src={item.image} alt={item.name} className="w-12 h-12" /></td>
                <td className="py-2">
                  <button onClick={() => decreaseQuantity(item.id)} className="bg-white text-black font-bold py-1 px-2 rounded">
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="bg-white text-black font-bold py-1 px-2 rounded">
                    +
                  </button>
                </td>
                <td className="py-2">${item.price}</td>
                <td className="py-2">
                  <button onClick={() => removeItem(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        <span className="font-semibold">Table Number:</span>
        <span className="">{/* Add table number here */}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span className="font-semibold">Waiter Name:</span>
        <span className="">{/* Add waiter name here */}</span>
      </div>
      <div className="flex justify-between mt-2">
        <span className="font-semibold">Order Number:</span>
        <span className="">{/* Add order number here */}</span>
      </div>
      <div className="flex justify-between mt-4">
        <span className="font-semibold">Total:</span>
        <span>${totalPrice}</span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 block w-full">
        Make order
      </button>
    </div>
  );
}

export default Orderlistcontent;
