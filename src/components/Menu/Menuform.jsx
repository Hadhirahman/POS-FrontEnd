import{ useState } from 'react';
// import axios from 'axios';
import instance from '../../api/axios';
import { useNavigate } from 'react-router-dom';

function Menuform() {
 
const navigate=useNavigate()

   const [message,setMessage]=useState("")   
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    
    setImage(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
   
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('itemName', itemName);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('image', image);
   console.log(formData);

    try {
      const response = await instance.post('/menuitemsadd', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data.message);
      setMessage(response.data.message)
navigate("/owner/productlist")
    
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage(error.response.data.message)
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Menu Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="itemName" className="block text-sm font-medium text-gray-700">Item Name:</label>
          <input type="text" id="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description:</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="4" cols="50" className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
          <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} min="0" step="0.01" required className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 p-2 w-full border border-gray-300 rounded-md">
            <option value="">Select category</option>
            <option value="Appetizer">Appetizer</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverage">Beverage</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Image:</label>
          <input type="file" id="image" name="file" onChange={handleImageChange} accept="image/*" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
          {imagePreview && <img src={imagePreview} alt="Preview" className="mt-2 max-w-xs" />}
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add Item</button>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default Menuform;
