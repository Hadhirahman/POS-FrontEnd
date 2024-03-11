/* eslint-disable no-unused-vars */
import React from 'react';

const TableCard = ({ tableData }) => {
  const { id, capacity, occupied, waiterName } = tableData;

  const statusColor = occupied ? 'bg-red-500' : 'bg-green-500';
  const statusText = occupied ? 'Occupied' : 'Available';

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full">
      <div>
        <h3 className="text-lg font-semibold mb-2">Table {id}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className={`px-3 py-1 rounded-full ${statusColor} text-sm`}>{statusText}</span>
          <span className="text-sm">Capacity: {capacity}</span>
        </div>
        {occupied && (
          <p className="text-sm mb-2">Waiter: {waiterName}</p>
        )}
      </div>
      <div className="flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2 disabled:opacity-50"
          disabled
        >
          Delete
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded disabled:opacity-50"
          disabled
        >
          Edit
        </button>
      </div>
    </div>
  );
};

const TableManagement = () => {
  return (
    <div className="flex flex-col bg-gray-900 min-h-screen py-8 w-full md:w-7/12 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <TableCard
          tableData={{
            id: 1,
            capacity: 4,
            occupied: true,
            waiterName: 'John Doe',
          }}
        />
        <TableCard
          tableData={{
            id: 2,
            capacity: 6,
            occupied: false,
            waiterName: null,
          }}
        />
        {/* Add more TableCard components here */}
      </div>
      <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 mt-6 rounded w-full md:w-2/5 mx-auto">
        Add Table
      </button>
    </div>
  );
};

export default TableManagement;
