
import { Link } from "react-router-dom";

import Bg from "../../assets/signup login img/image.jpg";

function Login() {
  

  return (
      <div className="flex flex-col xl:flex-row h-screen bg-cyan-100 pt-4 gap-5">
      <div className="xl:w-[582px] bg-white rounded-md shadow-xl flex flex-col justify-center items-center mx-auto p-8">
        <h1 className="text-4xl mb-4"><span className="text-orange-600">Log</span>In</h1>
        <form onSubmit="" className="w-full">

          
          <input type="text" name="userName"  className="w-full mb-4 h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none" placeholder="User Name" />
         
         
          <input type="password" name="password" className="w-full mb-4 h-10 bg-cyan-100 shadow-xl rounded-2xl pl-4 outline-none" placeholder="Password" />
         
          <button type="submit" className="w-full mb-4 p-2 bg-cyan-300 text-xl rounded-2xl shadow-xl">Login</button>
        </form>
        <Link to="/signup" className="text-blue-500">SignUp</Link>
      </div>
      <div className="xl:w-3/5 bg-white rounded-md shadow-xl overflow-hidden">
        <img src={Bg} alt="" className="w-full h-full" />
      </div>
    </div>
  );
}

export default Login;





