
import { Link, useNavigate } from "react-router-dom";

import Bg from "../../assets/signup login img/image.jpg";
import { useState } from "react";
// import axios from "axios";
import { setToken } from "../../redux/tokenSlice";
import { useDispatch } from "react-redux";
import instance from "../../api/axios";

function Login() {
  const navigate=useNavigate()
  const[loginform,setLoginform]=useState({userName:"",password:""})
  const [loginerror,setLoginError]=useState("")
  const [formerror,setFormerror]=useState({})
  const dispatch=useDispatch()
  const handlechange=(e)=>{
  const { name, value } = e.target;
  setLoginform({ ...loginform, [name]: value });
  setFormerror({ ...formerror, [name]: '' });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    

    // Frontend form validation
    if (!loginform.userName || !loginform.password) {
      setFormerror({ userName: !loginform.userName ? 'Please enter your username' : '', password: !loginform.password ? 'Please enter your password' : '' });
      return;
    }

    try {
      const response = await instance.post('/login',loginform);
      console.log('Signup successful:', response.data)
      const { token } = response.data;
      localStorage.setItem('token', token); 
      dispatch(setToken(token))
      navigate('/owner'); 
    } catch (error) {
      setLoginError('Invalid username or password');
    }

   
  };


  return (
      <div className="flex flex-col xl:flex-row h-screen bg-cyan-100 pt-4 gap-5">
      <div className="xl:w-[582px] bg-white rounded-md shadow-xl flex flex-col justify-center items-center mx-auto p-8">
        <h1 className="text-4xl mb-4"><span className="text-orange-600">Log</span>In</h1>
        <form onSubmit={handleSubmit} className="w-full">

          
          <input type="text" name="userName" onChange={handlechange}  className="w-full mb-4 h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none" placeholder="User Name" />
          {formerror.userName && <p className="text-red-500">{formerror.userName}</p>}
         
          <input type="password" name="password" onChange={handlechange} className="w-full mb-4 h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none" placeholder="Password" />
          {formerror.password && <p className="text-red-500">{formerror.password}</p>}
          <button type="submit" className="w-full mb-4 p-2 bg-cyan-300 text-xl rounded-2xl shadow-xl">Login</button>
        </form>
        <p className="text-red-500">{loginerror}</p>
        <Link to="/signup" className="text-blue-500">SignUp</Link>
      </div>
      <div className="xl:w-3/5 bg-white rounded-md shadow-xl overflow-hidden">
        <img src={Bg} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Login;





