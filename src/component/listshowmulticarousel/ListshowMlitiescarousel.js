import React from 'react'
import "./listshowmulticarousel.css"
import Flickity from 'react-flickity-component'
import Listcontents from '../../navbar/ListyouShow/Listcontents'
const flickityOptions = {
  initialIndex: 2
}
const ListshowMlitiescarousel = () => {
  const listshowdata=[
  { 
    background:"rgb(43, 49, 72)",
  imgPath:"shows/b-2.avif",
  title:"Ticket scanning made easy",
  description:"Experience the ease of managing entry at an event.",
   
},
  { 
    background:"rgb(81, 108, 122)",
  imgPath:"shows/b-1.avif",
  title:"Introducing an event management tool",
  description:"Experience the ease of event creation and publishing",
   
},
  { 
    background:"rgb(56, 84, 52)",
  imgPath:"shows/b-4.avif",
  title:"Empower the artist within you",
  description:"List your own performances, gigs and more with BookMyShow",
   
},
  { 
    background:"rgb(81, 108, 122)",
  imgPath:"shows/b-5.avif",
  title:"Conduct workshops and much more",
  description:"Share your skills with people around the world - from home!",
   
},
  { 
    background:"rgb(158, 109, 76)",
  imgPath:"shows/b-3.avif",
  title:"Take advantage of our M-ticket feature",
  description:"Lets your audience skip the box office queue and head straight to the gate.",
   
},
  ]
  return (
    <Flickity
    className={'carousel'} // default ''
    elementType={'div'} // default 'div'
    options={{ ...flickityOptions, wrapAround: true }} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    static // default false,

    >
      {listshowdata.map((values,index)=>{
      return  <Listcontents  key={index} {...values} />
      })}
    </Flickity>
  )
}

export default ListshowMlitiescarousel