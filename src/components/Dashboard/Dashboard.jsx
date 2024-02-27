// import React from 'react';

function Dashboard() {
  return (
    <div className="  justify-center  bg-red-300  w-7/12  rounded-lg" >
<div className="flex flex-col justify-items-start bg-white w-full h-full p-4">
  <div className="flex justify-between w-full mb-4">
    <h1 className="text-2xl font-bold text-gray-800">Restaurant Name</h1>
    {/* <img src="logo.png" alt="Restaurant Logo" className="w-12 h-12"> */}
  </div>

  <div className="flex mb-4 items-center">
    <label htmlFor="date-filter" className="text-gray-600 mr-2">Date Range:</label>
    <input type="date" id="date-filter" className="rounded-md border border-gray-300 p-2"/>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold text-gray-800">Daily Sales</h3>
      <p className="text-gray-600">₹ 12,500</p>
      <p className="text-sm text-gray-400">(2024-02-26)</p>
    </div>

    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold text-gray-800">Weekly Sales</h3>
      <p className="text-gray-600">₹ 78,000</p>
      <p className="text-sm text-gray-400">(2024-02-19 - 2024-02-25)</p>
    </div>

    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-xl font-bold text-gray-800">Monthly Sales</h3>
      <p className="text-gray-600">₹ 325,000</p>
      <p className="text-sm text-gray-400">(February 2024)</p>
    </div>
  </div>

  <div className="mt-4">
    <p className="text-gray-600">Last Updated: 2024-02-26</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">View Full Reports</button>
  </div>
  
</div>



</div>
      
      
      
  
  );
}

export default Dashboard;
