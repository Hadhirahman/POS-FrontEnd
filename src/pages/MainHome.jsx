import Dashboard from "../components/Dashboard/Dashboard"
import Footer from "../components/Layout/Footer"
import Orderlistcontent from "../components/Layout/Orderlistcontent"
import Sidebar from "../components/Layout/Sidebar"
import Header from "../components/user/Heeader/Header"


function MainHome() {
  return (
    <div>
      <div className='gap-y-3 flex flex-col bg-cyan-100'>
            <Header/>
            <div className='flex gap-4 '>
                <Sidebar/>
          
             <Dashboard/>
              
              

            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default MainHome