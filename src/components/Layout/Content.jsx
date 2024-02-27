// import React from 'react'

import { Route, Routes } from "react-router-dom"
import Dashboard from "../Dashboard/Dashboard"
import OrderList from "../Order/Orderlist"

function Content() {
    return (
        
                <div className="flex flex-wrap justify-center bg-red-300  w-7/12">
        <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/u" element={<OrderList/>}/>

            </Routes>
        </div>
    )
}

export default Content
