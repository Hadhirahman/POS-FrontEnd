
import Header from '../../components/Layout/Header'
import Sidebar from '../../components/Layout/Sidebar'

import Orderlistcontent from '../../components/Layout/Orderlistcontent'
import Footer from '../../components/Layout/Footer'

import Menulist from '../../components/Menu/Menulist'
function MenulistPage() {
  return (
    <div>
            <div className='gap-y-3 flex flex-col bg-cyan-100'>
                <Header />
                <div className='flex gap-4 '>
                    <Sidebar />
                    
                        <Menulist/>
                    
                    <Orderlistcontent />

                </div>
                <Footer/>
            </div>
        </div>
  )
}

export default MenulistPage