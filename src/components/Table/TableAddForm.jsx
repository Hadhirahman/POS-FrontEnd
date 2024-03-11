/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const TableForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    capacity: '',
    occupied: false,
    waiterName: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/tables', formData);
      alert('Table added successfully');
      setFormData({
        id: '',
        capacity: '',
        occupied: false,
        waiterName: ''
      });
    } catch (error) {
      console.error('Error adding table:', error);
      alert('An error occurred while adding the table');
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">Add Table</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="id" className="block text-gray-700">ID:</label>
          <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} className="form-input" />
        </div>
        <div className="mb-4">
          <label htmlFor="capacity" className="block text-gray-700">Capacity:</label>
          <input type="number" id="capacity" name="capacity" value={formData.capacity} onChange={handleChange} className="form-input" />
        </div>
        <div className="mb-4">
          <label htmlFor="occupied" className="block text-gray-700">Occupied:</label>
          <select id="occupied" name="occupied" value={formData.occupied} onChange={handleChange} className="form-select">
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="waiterName" className="block text-gray-700">Waiter Name:</label>
          <input type="text" id="waiterName" name="waiterName" value={formData.waiterName} onChange={handleChange} className="form-input" />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded w-full">Add Table</button>
      </form>
    </div>
  );
};

export default TableForm;
