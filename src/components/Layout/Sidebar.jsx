import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Get the current location
  const [selectedItem, setSelectedItem] = useState(getInitialSelectedItem(location.pathname));

  const handleClick = (itemName) => {
    setSelectedItem(itemName);
  };

  // Function to determine the initial selected item based on the pathname
  function getInitialSelectedItem(pathname) {
    const paths = pathname.split('/');
    return paths[1] || 'Dashboard'; // Default to 'Dashboard' if no path is specified
  }

  return (
    <div className="w-2/12 bg-gray-800 text-white rounded-lg">
      <ul className="h-screen">
        <li
          className={"py-4 px-6 cursor-pointer " + (selectedItem === 'Dashboard' ? 'bg-gray-700' : '')}
          onClick={() => handleClick('Dashboard')}
        >
          <Link to="/owner">Dashboard</Link>
        </li>
        <li
         className={"py-4 px-6 cursor-pointer " + (selectedItem === 'Order' ? 'bg-gray-700' : '')}
         onClick={() => handleClick('Order')}
        >
          <Link to="/owner/orderlist">Order</Link>
        </li>
        <li
          className={"py-4 px-6 cursor-pointer " + (selectedItem === 'Table' ? 'bg-gray-700' : '')}
          onClick={() => handleClick('Table')}
        >
          <Link to="/owner/tables">Table</Link>
        </li>
        <li
          className={"py-4 px-6 cursor-pointer " + (selectedItem === 'Staff List' ? 'bg-gray-700' : '')}
          onClick={() => handleClick('Staff List')}
        >
          <Link to="/owner/staff">Staff List</Link>
        </li>
        <li
          className={"py-4 px-6 cursor-pointer  " + (selectedItem === 'Menu' ? 'bg-gray-700' : '')}
          onClick={() => handleClick('Menu')}
        >
          <Link to="/owner/menu">Menu</Link>
        </li>
      </ul>
      <Link to="/logout">
        <button className="py-4 px-6 cursor-pointer bg-red-500 rounded-lg" onClick={()=>handleClick("Logout")}>Logout</button>
      </Link>
    </div>
  );
};

export default Sidebar;
