import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import instance from '../../api/axios';

function Menulist() {
  const navigate=useNavigate()
 
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [clickedCardId, setClickedCardId] = useState(null);

  useEffect(() => {
    instance.get('/menuitemsadd')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching menu items:', error);
      });
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleEditProduct = (Id) => {
    navigate(`/owner/productedit/${Id}`)
    
  };

  const handleDeleteProduct = async (productId) => {
    try {
      const response = await instance.delete(`/menuitemsdelete/${productId}`);
      toast.success(response.data.message);
      setProducts(products.filter(product => product._id !== productId));
    } catch (error) {
      toast.error('Error deleting product');
      console.error('Error deleting product:', error);
    }
  };

  const toggleOptions = (productId) => {
    if (clickedCardId === productId) {
      setClickedCardId(null);
    } else {
      setClickedCardId(productId);
    }
  };

  const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
  const categories = [...new Set(products.map(product => product.category))];
  categories.unshift('all');

  return (
    <div className="bg-black text-white min-h-screen py-8 px-4 sm:px-6 lg:px-8 flex justify-center md:w-7/12 rounded-lg">
      <div className="max-w-4xl mx-auto">
        <Link to="/owner/productadd" className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4 inline-block">Add Menu Item</Link>
        <div className="mb-4 flex flex-wrap">
          {categories.map(category => (
            <button key={category} className={`mr-2 mb-2 ${selectedCategory === category ? 'bg-blue-500' : 'bg-gray-300'} text-white py-1 px-2 sm:px-3 rounded-lg text-xs sm:text-sm`} onClick={() => handleCategorySelect(category)}>{category}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product._id} className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 relative">
                <div className="absolute top-0 right-0 mt-2 mr-2">
                  <div className="relative">
                    <button className="text-gray-600 hover:text-gray-800 focus:outline-none" onClick={() => toggleOptions(product._id)}>
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                    {clickedCardId === product._id && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
                        <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={() => handleEditProduct(product._id)}>Edit</button>
                        <button className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={() => handleDeleteProduct(product._id)}>Delete</button>
                      </div>
                    )}
                  </div>
                </div>
                <img className="rounded-lg h-40 w-full object-cover mb-2" src={product.imageUrl} alt={product.itemName} />
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-md font-semibold text-black">{product.itemName}</h1>
                    <p className="text-sm font-semibold text-green-500">₹{product.price}</p>

                  </div>
                  <button className="bg-blue-500 text-white py-1 px-2 sm:px-3 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 text-xs sm:text-sm" style={{ width: '80px', height: '30px' }}>Add to</button>
                </div>
              </div>
            ))
          ) : (
            <div className="w-full h-96 flex justify-center items-center text-gray-500">No items available in this category</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menulist;
