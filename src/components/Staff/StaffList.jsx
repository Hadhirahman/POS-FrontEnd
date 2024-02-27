import React, { useState } from 'react';

const Stafflist = () => {
  const [staffList, setStaffList] = useState([
    { id: 1, name: 'John Doe', position: 'Manager' },
    { id: 2, name: 'Jane Smith', position: 'Sales Associate' },
    { id: 3, name: 'hadhi Smith', position: 'Sales Associate' },
    // Add more staff members as needed
  ]);

  const handleDelete = (id) => {
    setStaffList(staffList.filter(item => item.id !== id));
  };

  const handleAdd = () => {
    // Implement logic to add a new staff member
  };

  return (
    <div className="justify-center bg-red-300 w-7/12 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Staff List</h2>
      <ul>
        {staffList.map((staff) => (
          <li key={staff.id} className="flex justify-between items-center mb-2">
            <div>
              <span className="font-semibold">{staff.name}</span> - {staff.position}
            </div>
            <div>
              <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2">
                Edit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleDelete(staff.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAdd}
        >
          Add Staff
        </button>
      </div>
    </div>
  );
};

export default Stafflist;
