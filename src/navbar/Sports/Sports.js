import React from 'react'
import Cards from '../../component/Cards/Cards';
import Button from '../../component/Button';
import Filter from '../../component/filter/Filter';
import Appliedfilter from '../../component/filter/Appliedfilter';
const data = [
  {
    title: "Date",
    buttons: ["Today", "Tomorrow", "This Weekend"],
  },
  {
    title: "Categories",
    buttons: ["Cricket","Football","Running"]
  },
  {
    title: "More Filters",
    buttons: [ "Outdoor Events","Ipl","Fast Filling",  "Kids Allowed",],
  },
  {
    title: "Price",
    buttons: ["Free", "0-500", "501-2000", "Above 2000"],
  },
];

const eventsData = [
  {
    name: " Lucknow Super Giants vs Punjab Kings",
    title1: "BRSABV Ekana Cricket Stadium: Lucknow",
    title2: "T20",
    // isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 399 onwards",
    src: "Sportimg/p-1.avif",
  },
  {
    name: "Mumbai Indians VS Rajasthan Royals ",
    title1: "Wankhede Stadium: Mumbai",
    title2: "T20",
    isNameSlice: false,
    description: "₹ 990 onwards",
    src: "Sportimg/p-2.avif",
  },
  {
    name: "Mumbai City FC vs Odisha FC ",
    title1: "Mumbai Football Arena: Andheri West",
    title2: "Football",
    isNameSlice: false,
    description: "₹ 199 onwards",
    src: "Sportimg/p-3.avif",
  },
  {
    name: " Rajasthan Royals vs Lucknow Super Giants",
    title1: "Sawai Mansingh Stadium: Jaipur",
    title2: "T20",
    isNameSlice: false,
    description: "₹ 1200 onwards",
    src: "Sportimg/p-4.avif",
  },
  {
    name: "Lucknow Super Giants vs Gujarat Titans ",
    title1: "BRSABV Ekana Cricket Stadium: Lucknow",
    title2: "T20",
    isNameSlice: false,
    description: "₹ 399 onwards",
    src: "Sportimg/p-5.avif",
  },
  {
    name: "Run for Equality - Get Medal by Courier ",
    title1: "Your Place and Your Time: India",
    title2: "5k",
    isNameSlice: false,
    description: "₹ 390 onwards",
    src: "Sportimg/p-6.avif",
  },
  {
    name: "India vs Afghanistan - FIFA World Cup Qualifier 2026 ",
    title1: "Indira Gandhi Athletic Stadium: Guwahati",
    title2: "Football",
    description: "₹ 200 onwards",
    src: "Sportimg/p-7.avif",
  },
  {
    name: "Rajasthan Royals vs Delhi Capitals ",
    title1: "Sawai Mansingh Stadium: Jaipur",
    title2: "T20",
    isNameSlice: false,
    description: "₹ 1200 onwards",
    src: "Sportimg/p-8.avif",
  },
  {
    name: "21 Days Walking Challenge by Malsar.in ",
    title1: "Your Place and Your Time: Mumbai",
    title2: "Marathon",
    isNameSlice: false,
    description: "₹ 149 onwards",
    src: "Sportimg/p-9.avif",
  },
  {
    name: "Mumbai City FC - ISL Season 2023/24 ",
    title1: "Multiple Venues",
    title2: "Football",
    isNameSlice: false,
    description: "₹ 199 onwards",
    src: "Sportimg/p-10.avif",
  },
  {
    name: "ISL Season 2023-24 - CHENNAIYIN FC ( Chennai ) ",
    title1: "Multiple Venues",
    title2: "Football",
    description: "₹ 150 onwards",
    src: "Sportimg/p-11.avif",
  },
  {
    name: "Indian Premier League All Matches ",
    title1: "Multiple Venues",
    title2: "T20",
    isNameSlice: false,
    description: "₹ 399 onwards",
    src: "Sportimg/p-12.avif",
  },
  
];
const Sports = () => {
  return (
    <>
    <section style={{background:"#EBEBEB"}}>
      <div  className='container py-2 '><img style={{borderRadius:"10px",width:"100%"}} src="Sportimg/Sp-b.avif" alt="#" /></div>
    </section>
    <section>
    <div className="container my-5">
     <div className="row position-relative">
       <div className="col-12 col-md-3 ps-0 a_sticky">
         <h4 style={{color:"rgb(51, 51, 51)",fontSize:"24px",fontWeight:"700"}}>Filters</h4>
         {data.map((value, index) => {
           return (
             <Filter 
               key={index}
               buttons={value.buttons}
               title={value.title}
             />
           );
         })}
         <Button btnType="outline" title={"Browse by venues"} />
       </div>
       <div className="col-12 col-md-9">
         <div>
           <Appliedfilter
             title={"Sports in Kochi"}
             buttons={["Cricket","Football","Running"]}
           />

           <div className="row">
             {eventsData.map(value => <div key={value.movieName} className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-3">
               <Cards {...value} />
             </div>)}
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
 </>
  )
}

export default Sports