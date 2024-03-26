import React from 'react'
import "./multicarouselcard.css"
import MultiCarousel from "react-multi-carousel";
import { MdOutlineChevronRight } from "react-icons/md";
const Multicarouselcard = ({ srcData = [], title, isShowAll = false ,book=false }) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='a_movies_carousel py-4'>
    {(title || isShowAll) && <div className='d-flex justify-content-between align-items-center  mx-1'>
        <h4 style={{fontSize:"24px",color:"rgb(51, 51, 51)",fontWeight:"700"}}>{title}</h4>
        {isShowAll && <div className='color-red d-flex align-items-center'>
            <span style={{cursor:"pointer"}} className=' a-14 '>See All</span>
            <MdOutlineChevronRight />
        </div>}
    </div>}
    <MultiCarousel responsive={responsive}>
        {srcData.map((path, index) => {
            return <div key={index} className="a_carousel_img_box">
                <img src={path} alt="#" />
            </div>
        })}
         
    </MultiCarousel>
    {book && <div style={{color:" rgb(220, 53, 75)",fontSize:"20px",fontWeight:"500",margin:"10px 0px 0px 20px"}}>pre book</div>}
</div>
  )
}

export default Multicarouselcard