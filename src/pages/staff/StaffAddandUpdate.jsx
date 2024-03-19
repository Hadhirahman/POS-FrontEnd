
import Header from '../../components/user/Heeader/Header'
import Sidebar from '../../components/Layout/Sidebar'

import StaffForm from '../../components/Staff/StaffDEtailes'

import Footer from '../../components/Layout/Footer'

function StaffAddandUpdate() {
  return (
    <div>
      <div className='gap-y-3 flex flex-col bg-cyan-100'>
            <Header/>
            <div className='flex gap-4 '>
                <Sidebar/>
          
                <StaffForm/>
              
               

            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default StaffAddandUpdate
