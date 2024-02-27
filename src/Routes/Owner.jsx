
import { Route, Routes } from 'react-router-dom'
import MainHome from '../pages/MainHome'

import Orderpage from '../pages/Orderpage'
import Tablemanagementpage from '../pages/Tablemanagement'
import Staffpage from '../pages/Staffpage'

function Owner() {
  return (
    <>
       <Routes>
      <Route path='/' element={<MainHome/>}/>
      <Route path='/orderlist' element={<Orderpage/>}/>
      <Route path='/tables' element={<Tablemanagementpage/>}/>
      <Route path='/staff' element={<Staffpage/>}/>
      {/* <Route path='/orderlist' element={<Staffpage/>}/> */}

      </Routes>
    </>
    
  )
}

export default Owner