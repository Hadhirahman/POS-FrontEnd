/* eslint-disable no-case-declarations */

import { useState } from 'react';
import Bg from "../../assets/signup login img/image.jpg";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignupForm() {
  const navigate=useNavigate()


  const [formData, setFormData] = useState({
    restaurantName: '',
    userName: '',
    contact: '',
    password: '',
    confirmPassword: '',
    sendViaPhone: true,
    otp: ['', '', '', ''],
    otpSent: false,
    otpVerified:false,
    errors: {
      restaurantName: '',
      userName: '',
      contact: '',
      email:'',
      password: '',
      confirmPassword: '',
    }
  });
  const [errorBackend,setErrorBackend]=useState("")
  const [otperror,setOtperror]=useState("")

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    let newErrors = { ...formData.errors };

    switch (name) {
      case 'restaurantName':
        newErrors.restaurantName = value.trim() ? '' : 'Restaurant name is required';
        break;
      case 'userName':
        newErrors.userName = value.trim() ? '' : 'User name is required';
        break;
      case 'contact':
        newErrors.contact = /^\d{10}$/.test(value) ? '' : 'Invalid phone number';
        break;

        case 'email':
                newErrors.email = !formData.sendViaPhone ? /\S+@\S+\.\S+/.test(value) ? '' : 'Invalid email address' : '';
                break;


      case 'password':
        newErrors.password = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(value) ? '' : 'Password must contain at least one digit, one lowercase and one uppercase letter, and be at least 6 characters long';
        break;


      case 'confirmPassword':
        newErrors.confirmPassword = value === formData.password ? '' : 'Passwords do not match';
        break;


      case 'otp':
        const newOtp = [...formData.otp];
        newOtp[index] = value;
        setFormData(prevState => ({
          ...prevState,
          otp: newOtp,
          errors: { ...prevState.errors, otp: '' } 
        }));
        if (index < formData.otp.length - 1 && value.length === 1) {
          document.getElementById(index + 1).focus();
        }
        if (index < formData.otp.length && value.length === 0) {
          document.getElementById(index - 1).focus();
        }

        break;

      default:
        break;
    }

    if (name !== "otp") {

      setFormData(prevState => ({
        ...prevState,
        [name]: value,
        errors: newErrors
      }));
    }
  }



  const handleSendOTP = async () => {

   axios.post('http://localhost:5000/send-otp',{contact:formData.contact})
   .then(response=>{
    console.log("response",response.data);
    if (response.data.status===200) {
      setFormData(prevState=>({
        ...prevState,
        otpSent:true
      }))
      console.log("Request successful");
   } else {
      console.log("Request failed with status:", response.data.status);
   }
   })
  }
      
    
  const varifyOtp = async () => {
    const joinotp = formData.otp.join("")

    axios.post("http://localhost:5000/varifyOtp", { otp: joinotp, contact: formData.contact })
      .then(response => {
        if (response.data.status===200) {
          setFormData(prevState=>({
            ...prevState,
            otpVerified:true,
            otpSent:false
          }))
          setOtperror("Otp varified successfully")
          console.log("Request successful");
       } else {
          setOtperror("OTP NOT MATCH")
          console.log("Request failed with status:", response.status);
       }
      })
     }



  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      console.log('Signup successful:', response.data)
      navigate("/owner")
    }catch(error){
      if(error.response && error.response.data && error.response.data.message){
        setErrorBackend(error.response.data.message);
      }else{
        console.error('Signup failed:', error.message);
        setErrorBackend('An unexpected error occurred. Please try again later.');
      }
    }

    
  };


  

  return (
    <div className="flex flex-col xl:flex-row h-screen bg-cyan-100 pt-4 gap-5">
      <div className="xl:w-[582px] bg-white rounded-md shadow-xl flex flex-col justify-center items-center mx-auto p-8">
        <h1 className="text-4xl mb-4"><span className="text-orange-600">Sign</span>up</h1>
        <form onSubmit={handleSubmit} className="w-full">


          <input type="text" name="restaurantName" value={formData.restaurantName} onChange={handleChange} className="w-full mb-4 h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none " placeholder="Restaurant Name" />
          {formData.errors.restaurantName && <p className="text-red-500 mb-2">{formData.errors.restaurantName}</p>}


          <input type="text" name="userName" value={formData.userName} onChange={handleChange} className="w-full mb-4 h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none" placeholder="User Name" />
          {formData.errors.userName && <p className="text-red-500 mb-2">{formData.errors.userName}</p>}


          <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full mb-4 h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none" placeholder="Password" />
          {formData.errors.password && <p className="text-red-500 mb-2">{formData.errors.password}</p>}

          
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full mb-4 h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none" placeholder="Re-enter Password" />
          {formData.errors.confirmPassword && <p className="text-red-500 mb-2">{formData.errors.confirmPassword}</p>}


          <div className="relative w-full mb-4">
            <input type={formData.sendViaPhone ? 'tel' : 'email'} name={formData.sendViaPhone ? 'contact' : 'email'} value={formData.sendViaPhone? formData.contact:formData.email} onChange={handleChange} className="w-full h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none" placeholder={formData.sendViaPhone ? 'Phone Number' : 'Email'} />
            <button type="button" onClick={() => setFormData(prevState => ({ ...prevState, sendViaPhone: !prevState.sendViaPhone,contact:"",email:"",errors:{...prevState.errors,contact:"",email:""}}))} className="absolute right-0 top-0 px-2 py-1 bg-cyan-300 text-white rounded-bl-2xl rounded-tr-2xl shadow-xl">Switch</button>
          </div>
          
          {formData.errors.contact && <p className="text-red-500 mb-2">{formData.errors.contact}</p>}
          {formData.errors.email && <p className="text-red-500 mb-2">{formData.errors.email}</p>}

          
          <button type="button" onClick={handleSendOTP} className="w-full mb-4 h-10 bg-cyan-300 text-white rounded-2xl shadow-xl">Send OTP</button>
          {formData.otpSent && (
            <div className="flex justify-between mb-4">
              {formData.otp.map((digit, index) => (
                <input
                  key={index}
                  id={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  name="otp" // Set name to "otp"
                  className="w-1/4 h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none"
                />
              ))}
              <button className="w-1/4 h-10 bg-cyan-300 text-white rounded-2xl shadow-xl" onClick={varifyOtp}>Verify OTP</button>
            </div>
          )}


          {otperror && <p className={formData.otpVerified? "text-green-500 mb-2":"text-red-500 mb-2"}>{otperror}</p>}
          


          {formData.otpVerified && <button type="submit"  className="w-full mb-4 p-2 bg-cyan-300 text-xl rounded-2xl shadow-xl">Signup</button>}
          {errorBackend && <p className='className="text-red-500 mb-2'>{errorBackend}</p>} {/* Display backend error message if exists */}

        </form>
        <Link to="/login" className="text-blue-500">Login</Link>
      </div>
      <div className="xl:w-3/5 bg-white rounded-md shadow-xl overflow-hidden">
        <img src={Bg} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

export default SignupForm;





