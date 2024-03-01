// eslint-disable-next-line react/prop-types
const TableCard = ({ tableData }) => {
    // eslint-disable-next-line react/prop-types
    const { id, capacity, occupied, waiterName } = tableData;
  
    const statusColor = occupied ? 'bg-red-300' : 'bg-green-300';
    const statusText = occupied ? 'Occupied' : 'Available';
  
    return (
        
      <div className={`bg-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center gap-2`}>
        <h3 className="text-xl font-bold text-gray-800">Table {id}</h3>
        <div className={`flex items-center justify-between text-gray-600 w-full`}>
          <span className={statusColor}>{statusText}</span>
          <span>Capacity: {capacity}</span>
        </div>
        {occupied && (
          <p className="text-gray-600">Waiter: {waiterName}</p>
        )}
        <div className="flex justify-between mt-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            disabled
          >
            Delete
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
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
        <div className="  justify-center  bg-white  w-7/12  rounded-lg" >
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      {/* ... add more TableCard components ... */}
      {/* Add button to create a new table */}
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Add Table
      </button>
    </div>
      </div>
    );
  };
  
  export default TableManagement;
  