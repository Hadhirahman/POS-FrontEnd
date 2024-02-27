
import Header from '../components/Layout/Header'
import Sidebar from '../components/Layout/Sidebar'
import OrderList from '../components/Order/Orderlist'
import Orderlistcontent from '../components/Layout/Orderlistcontent'
import Footer from '../components/Layout/Footer'

function Orderpage() {
    return (

        <div>
            <div className='gap-y-3 flex flex-col bg-cyan-100'>
                <Header />
                <div className='flex gap-4 '>
                    <Sidebar />
                    <div className="flex flex-wrap justify-center bg-red-300  w-7/12">
                        <OrderList />
                    </div>
                    <Orderlistcontent />

                </div>
                <Footer/>
            </div>
        </div>

    )
}

export default Orderpage
