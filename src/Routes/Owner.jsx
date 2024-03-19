
import { Route, Routes } from 'react-router-dom'
import MainHome from '../pages/MainHome'

import Orderpage from '../pages/Orderpage'
import Tablemanagementpage from '../pages/Tablemanagement'
import Staffpage from '../pages/staff/Staffpage'
import StaffAddandUpdate from '../pages/staff/StaffAddandUpdate'
import Menupage from '../pages/menu/Menupage'
import MenulistPage from '../pages/menu/MenulistPage'

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
      <Route path='/productlist' element={<MenulistPage/>}/>
      <Route path='/productadd' element={<Menupage/>}/>
      <Route path='/productedit/:id' element={<Menupage/>}/>
      {/* <Route path='/orderlist' element={<Staffpage/>}/> */}

      </Routes>
    </>
    
  )
}

export default Owner