
import { Route, Routes } from 'react-router-dom'
import MainHome from '../pages/MainHome'

import Orderpage from '../pages/Orderpage'
import Tablemanagementpage from '../pages/Tablemanagement'
import Staffpage from '../pages/staff/Staffpage'
import StaffAddandUpdate from '../pages/staff/StaffAddandUpdate'
import Menupage from '../pages/Menupage'

function Owner() {
  return (
    <>
       <Routes>
      <Route path='/' element={<MainHome/>}/>
      <Route path='/orderlist' element={<Orderpage/>}/>
      <Route path='/tables' element={<Tablemanagementpage/>}/>
      <Route path='/staff' element={<Staffpage/>}/>
      <Route path='/staffdetaies' element={<StaffAddandUpdate/>}/>
      <Route path='/staffdetaies/:id' element={<StaffAddandUpdate/>}/>
      <Route path='/menu' element={<Menupage/>}/>
      {/* <Route path='/orderlist' element={<Staffpage/>}/> */}

      </Routes>
    </>
    
  )
}

export default Owner