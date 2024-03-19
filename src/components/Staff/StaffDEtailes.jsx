import  { useEffect, useState } from 'react';
// import axios from 'axios';
import instance from '../../api/axios';
import { useNavigate, useParams } from 'react-router-dom';

function StaffForm() {
    const { id } = useParams();
    const navigate=useNavigate()
    const [responsmessage,setResponsmessage]=useState("")
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    position: '',
    joiningDate: '',
    address: '',
    city: '',
    country: '',
    postalCode: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await instance.post('/addstaff', formData);
        console.log(response.data);
        navigate("/owner/staff")

      } catch (error) {
        setResponsmessage(error.response.data.message)
        console.error('Error submitting form:', error);
      }
    }
  }


  const updatdata = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await instance.patch(`/edit_staff/${id}`, formData);
        console.log(response.data);
        navigate("/owner/staff");
      } catch (error) {
        if(error.response.data.message){
           console.log(error.response.data.message);
          }else{
            console.log('Signup failed:', error.message);
            console.log('An unexpected error occurred. Please try again later.');
          }
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    // Validate fullName
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
      valid = false;
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    }

    // Validate phoneNumber
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
      valid = false;
    }

    // Validate position
    if (!formData.position.trim()) {
      newErrors.position = 'Position is required';
      valid = false;
    }

    // Validate joiningDate
    if (!formData.joiningDate.trim()) {
      newErrors.joiningDate = 'Joining Date is required';
      valid = false;
    }

    // Validate address
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      valid = false;
    }

    // Validate city
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      valid = false;
    }

    // Validate country
    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
      valid = false;
    }

    // Validate postalCode
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal Code is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  useEffect(() => {
   
    const fetchStaffDetails = async () => {
        try {
            const response = await instance.get(`/edit_staff/${id}`);
            const staffData = response.data;
            // Prefill the form data with staff member details
            setFormData(staffData);
            
        } catch (error) {
            console.error('Error fetching staff details:', error.response.data);
        }
    };

    // Fetch staff member details only when ID is present
    if (id) {
        fetchStaffDetails();
    }
}, [id]);


  return (
    <div>
      <h2>Staff Details Form</h2>
      <form onSubmit={id? updatdata:handleSubmit} className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        {/* Form inputs */}
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
            {errors.fullName && <span className="text-red-500">{errors.fullName}</span>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="number" name="phoneNumber" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
            {errors.phoneNumber && <span className="text-red-500">{errors.phoneNumber}</span>}
          </div>

          {/* Position */}
          <div>
            <label htmlFor="position">Position:</label>
            <select name="position" id="position" value={formData.position} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" >
              <option value="">Select Position</option>
              <option value="weiter">Weiter</option>
              <option value="casher">Casher</option>
              <option value="cleaner">Cleaner</option>
            </select>
            {errors.position && <span className="text-red-500">{errors.position}</span>}
          </div>

          {/* Joining Date */}
          <div>
            <label htmlFor="joiningDate">Joining Date:</label>
            <input type="date" name="joiningDate" id="joiningDate" defaultValue={formData.joiningDate} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
            {errors.joiningDate && <span className="text-red-500">{errors.joiningDate}</span>}
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
            {errors.address && <span className="text-red-500">{errors.address}</span>}
          </div>

          {/* City */}
          <div>
            <label htmlFor="city">City:</label>
            <input type="text" name="city" id="city" value={formData.city} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
            {errors.city && <span className="text-red-500">{errors.city}</span>}
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country">Country:</label>
            <input type="text" name="country" id="country" value={formData.country} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
            {errors.country && <span className="text-red-500">{errors.country}</span>}
          </div>

          {/* Postal Code */}
          <div>
          <label htmlFor="postalCode">Postal Code:</label>
          <input type="number" name="postalCode" id="postalCode" value={formData.postalCode} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"  />
          {errors.postalCode && <span className="text-red-500">{errors.postalCode}</span>}
        </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
        {responsmessage && <span className="text-red-500">{responsmessage}</span>}
      </form>
    </div>
  );
}

export default StaffForm;
