import React from 'react'
import "./listshowmulticarousel.css"
import MultipCarousel from "react-multi-carousel";
const ListshowMlitiescarousel = ({srcData,title }) => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  
  return (
    <>
    <h1>{title}</h1>
    <MultipCarousel responsive={responsive} infiniteLoop autoPlay showStatus={false}>
    {srcData.map((path, index) => {
        return <div key={index} className="a_carousel_imgbox ">
          {path}
          
        </div>
    })}
     
</MultipCarousel>
</>
 
  )
}

export default ListshowMlitiescarousel