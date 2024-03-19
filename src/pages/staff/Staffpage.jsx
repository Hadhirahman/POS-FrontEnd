
import Footer from "../../components/Layout/Footer"
import Sidebar from "../../components/Layout/Sidebar"
import StaffList from "../../components/Staff/StaffList"


import Header from "../../components/user/Heeader/Header"


function Staffpage() {
  return (
    <div>
      <div className='gap-y-3 flex flex-col bg-cyan-100'>
            <Header/>
            <div className='flex gap-4 '>
                <Sidebar/>
          
                <StaffList/>

            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Staffpage