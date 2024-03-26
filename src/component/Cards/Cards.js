import React from 'react'
import "./cards.css"
const Cards = ({ src, name, title1, title2,ani, description, isTitle1Slice = true, isNameSlice = true }) => {
  return (
    <div>
            <div>
                <div className='a_movie_card'>
                    <img src={src} alt="" />
                </div>
            </div>
            <div className="a_bottom mt-3">
                <h5 style={{fontSize:"18px",fontWeight:"500",color:"rgb(0, 0, 0)"}}>{(name?.length < 24 || !isNameSlice) ? name : `${name.slice(0, 24)}...`}</h5>
                <h6 style={{fontSize:"16px",color:"rgb(51, 51, 51)"}} className=' my-1 '>{(title1?.length < 18 || !isTitle1Slice) ? title1 : `${title1.slice(0, 18)}...`}</h6>
                {title2 && <h6 style={{color:"rgb(102, 102, 102)",fontSize:"14px"}}>{title2}</h6>}
                <h6 style={{color:"rgb(102, 102, 102)",fontSize:"14px"}}>{description}</h6>
            </div>
        </div>
  )
}

export default Cards