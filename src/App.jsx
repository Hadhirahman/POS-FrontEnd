
import { BrowserRouter,Route,Routes} from "react-router-dom"
import Signuppage from "./pages/Signuppage"
import Loginpage from "./pages/Loginpage"

// import DashboardRoutes from "./Routes/Userroutes/User"
import User from "./Routes/User"
import Owner from "./Routes/Owner"






function App() {


  return (
    <>
    <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<Signuppage/>} />
      <Route path="/signup" element={<Signuppage/>} />
      <Route path="/login" element={<Loginpage/>} />

      <Route path="/user" element={<User/>}/>
      <Route path="/owner/*" element={<Owner/>}/>


    </Routes>
    </BrowserRouter>
    {/* <PremiumTableManagement/> */}
    </>
  )
}

export default App
