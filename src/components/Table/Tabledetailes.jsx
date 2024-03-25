import { useState, useEffect } from 'react';
import instance from '../../api/axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTable, fetchTablesSuccess } from '../../redux/tableSlice';


const TableManagement = () => {
  const dispatch=useDispatch()
  const tableData=useSelector(state => state.tables.tables)
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    tableId: '',
    capacity: '',
    occupied:false
  });

  const [responseError,setResponseError]= useState("")
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (tableId) => {
    setDropdownStates(prevState => ({
      ...prevState,
      [tableId]: !prevState[tableId] // Toggle visibility for the specific card
    }));
  };

  useEffect(() => {
    instance.get('/showtables')
      .then(response => {
        dispatch(fetchTablesSuccess(response.data));
      })
      .catch(error => {
        console.error('Error fetching table data:', error);
      });
  }, [formData,dispatch]);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!isNaN(value) && value.length <= 3) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    instance.post('/tableadd', formData)
      .then(response => {
        console.log('Table data successfully submitted:', response.data);
        setResponseError(response.data.message)
        setFormData({
          tableId: '',
          capacity: '',
          occupied:false
        });
        setShowForm(false);
      })
      .catch(error => {
        console.error('Error submitting table data:', error);
        setResponseError('Failed to add table. Please try again later.')
      });
  };

  const handleOrderTaken = (tableId, status) => {
    if (status === "orderTaken") {
      const waiterName = 'John Doe'; 
      const updatedTableData = tableData.map(table => {
        if (table.tableId === tableId) {
          return {
            ...table,
            occupied: true,
            waiterName: waiterName
          };
        }
        return table;
      });

      setTableData(updatedTableData);
    }
  };


  const handleDelete = (tableId) => {
    if (window.confirm('Are you sure you want to delete this table?')) {
      instance.delete(`/deletetable/${tableId}`)
        .then(response => {
          
          dispatch(deleteTable(tableId));
          console.log('Table deleted successfully:', response.data);
        })
        .catch(error => {
          console.error('Error deleting table:', error);
        });
    }
  }

  return (
    <div className='bg-white rounded-lg w-7/12 items-center flex flex-col'>
      <button onClick={handleShowForm} className=" bg-cyan-300 text-black rounded-lg shadow-md p-6 m-4 sm:w-64 md:w-48">
        Add Table
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} className="m-6 bg-white rounded-md shadow-xl p-8 relative">
          <button onClick={handleCloseForm} className="absolute top-0 right-0 bg-cyan-300 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded">
            X
          </button>
          <h2 className="text-lg font-semibold mb-4">Add Table</h2>
          <div className="mb-4">
            <label htmlFor="tableId" className="block text-sm font-medium">Table ID:</label>
            <input
              type="text"
              id="tableId"
              name="tableId"
              value={formData.tableId}
              onChange={handleChange}
              className="mt-1 p-2 w-full h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="capacity" className="block text-sm font-medium">Capacity:</label>
            <input type="text" id="capacity" name="capacity" value={formData.capacity} onChange={handleChange} className="mt-1 p-2 w-full h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none" />
          </div>
          <button type
            ="submit" className="mb-4 p-2 bg-cyan-300 text-xl rounded-2xl shadow-xl">Create Table</button>
            
        </form>
        
      )}
    <div className="flex flex-wrap justify-center bg-white min-h-screen py-8 w-full mx-auto">
    {tableData.map(table => (
        <div key={table.tableId} className="relative flex flex-col items-center justify-center bg-cyan-100 text-gray-800 rounded-lg shadow-lg p-6 m-4 sm:w-72 md:w-56">
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <div className="relative">
              <button onClick={() => toggleDropdown(table.tableId)} className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </button>
              {dropdownStates[table.tableId] && ( 
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg origin-top-right divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <div className="py-1" role="none">
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => handleDelete(table.tableId)}>Delete</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-4">Table {table.tableId}</h3>
          <div className="flex justify-between items-center w-full mb-4">
            <span className={`px-4 py-1 rounded-full ${table.occupied ? 'bg-red-500' : 'bg-green-500'} text-sm font-semibold`}>{table.occupied ? 'Occupied' : 'Available'}</span>
            <span className="text-sm">Capacity: {table.capacity}</span>
          </div>
          {table.occupied && (
            <p className="text-sm mb-4">Waiter: {table.waiterName}</p>
          )}
          <div className="w-full">
            <select onChange={(e) => handleOrderTaken(table.tableId, e.target.value)} className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200">
              <option value="">Order Taken?</option>
              <option value="orderTaken">Yes</option>
            </select>
          </div>
        </div>
      ))}
    </div>

    <div>
    {/* Your form JSX */}
    {responseError && <div className="error">{responseError}</div>} {/* Display the error message */}
  </div>

    </div>
  );
};

export default TableManagement;
