
import Footer from "../components/Layout/Footer"
import Orderlistcontent from "../components/Layout/Orderlistcontent"
import Sidebar from "../components/Layout/Sidebar"
import Tabledetailes from "../components/Table/Tabledetailes"

import Header from "../components/user/Heeader/Header"


function Tablemanagementpage() {
  return (
    <div>
      <div className='gap-y-3 flex flex-col bg-cyan-100'>
            <Header/>
            <div className='flex gap-4 '>
                <Sidebar/>
          
             <Tabledetailes/>
              
                <Orderlistcontent/>

            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Tablemanagementpage