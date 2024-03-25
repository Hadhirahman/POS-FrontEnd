
import Header from '../components/Layout/Header'
import Sidebar from '../components/Layout/Sidebar'
import OrderList from '../components/Order/Orderlist'
// import Orderlistcontent from '../components/Layout/Orderlistcontent'
import Footer from '../components/Layout/Footer'

function Orderpage() {
    return (

        <div>
            <div className='gap-y-3 flex flex-col bg-cyan-100'>
                <Header />
                <div className='flex gap-4 '>
                    <Sidebar />
                    
                        <OrderList />
                    
                  

                </div>
                <Footer/>
            </div>
        </div>

    )
}

export default Orderpage
