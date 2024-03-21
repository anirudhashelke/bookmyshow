import React from 'react'
import { MdChevronRight } from "react-icons/md";
const Headerbaner = ({ title, title2 }) => {
  return (
    <div style={{cursor:"pointer"}} className='bg-white py-4  px-5 rounded-2 shadow-sm d-flex flex-wrap gap-2 justify-content-between align-items-center'>
            <h5 style={{fontSize:"20px",fontWeight:"bold"}}>{title}</h5>
            <h5 className='a-15 color-red '>{title2} <MdChevronRight size={20} /></h5>
        </div>
  )
}

export default Headerbaner