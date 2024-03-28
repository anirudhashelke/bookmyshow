import React from 'react'
import "./listshow.css"
import { Link } from 'react-router-dom'
const Listcontents = ({ background = "", title, description, imgPath }) => {
  return (
    <div className='p-3 mx-2 text-white' style={{ background, width: "50%" }}>
    <div className="row align-items-center">
        <div className="col-12 col-md-7">
            <h2 style={{fontSize:"30px",fontWeight:"700",color:"rgb(255, 255, 255)"}} className='mb-2'>{title}</h2>
            <p style={{color:"rgb(255, 255, 255)",fontSize:"20px",fontWeight:"400"}} className='a-20'>{description}</p>
            <Link   to={"/"}   className=' text-decoration-none  ' style={{color:"rgb(255, 255, 255)",fontSize:"20px",fontWeight:"400"}}>
                Know More
            </Link><br />
            <button className=' border-0  mt-2 px-4 ' style={{ padding: "6px 20px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 8px",fontWeight:"500",color:"rgb(235, 78, 98)",background:"rgb(255, 255, 255)",borderRadius:"2px" }}>
                Contact Us Today
            </button>
        </div>
        <div className="col-12 col-md-5">
            <div className='a_banner_card_img_box'>
                <img src={imgPath} alt="" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Listcontents