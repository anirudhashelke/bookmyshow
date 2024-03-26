import React from 'react'
import Cards from '../../component/Cards/Cards';
import Appliedfilter from '../../component/filter/Appliedfilter';
import Button from '../../component/Button';
import Filter from '../../component/filter/Filter';


const data = [
  {
    title: "Date",
    buttons: ["Today", "Tomorrow", "This Weekend"],
  },
  {
    title: "Categories",
    buttons: ["Amusement Park","Tourist Attraction","Adventure","Food and Drink","Gaming","Unique Toure"],
  },
  {
    title: "More Filters",
    buttons: [ "Outdoor Events", "Kids Activities", "Kids Allowed", "Online Streaming",  "Pool Party" ,"Weekend Getaway"],
  },
  {
    title: "Price",
    buttons: ["Free", "0-500", "501-2000", "Above 2000"],
  },
];

const eventsData = [
  {
    name: "Imagicaa Water Park    ",
    title1: "Imagica Water Park    ",
    title2: "Theme parka    ",
    description: "₹ 796 onwards",
    src: "Activitiimg/ac-1.avif",
  },
  {
    name: "Easter Brunch at Jetty, Forte Kochi Hotel    ",
    title1: "Jetty Hotel Forte Kochi    ",
    title2: "Fine Dining    ",
    isNameSlice: false,
    isTitle1Slice: false,
    description: "1769",
    src: "Activitiimg/ac-2.avif",
  },
  {
    name: "Imagicaa Theme Park    ",
    title1: "Imagica Theme Park    ",
    title2: "Theme Park",
    description: "₹ 2664 onwards",
    src: "Activitiimg/ac-4.avif",
  },
  {
    name: "Indian Music Experience Museum    ",
    title1: "Indian Music Experience    ",
    title2: "Theme Park    ",
    isNameSlice: false,
    description: "₹ 2500 onwards",
    src: "Activitiimg/ac-3.avif",
  },
  {
    name: "Wonderla Amusement Park Koch    ",
    title1: "Wonderla. Kochi    ",
    title2: "Theme Park    ",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 1012 onwards",
    src: "Activitiimg/ac-5.avif",
  },
  {
    name: "onderla Amusement Park    ",
    title1: "Multiple Venues   ",
    title2: "Adventure Park    ",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 1012 onwards",
    src: "Activitiimg/ac-6.avif",
  },
  {
    name: "magicaa- A Themed Entertainment    ",
    title1: "Multiple Venues  ",
    title2: "Theme Park    ",
    description: "₹ 664 onwards",
    src: "Activitiimg/ac-7.avif",
  },
];
const Activities = () => {
  return (
    <section>
       <div className="container my-5">
        <div className="row position-relative">
          {/* //left  */}
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
                title={"Activities in Kochi"}
                buttons={["Outdoor Events", "Amusement Park", "Tourist Attraction", "Adventure", "Food and Drink", "Gaming","Unique Toure"]}
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
  )
}

export default Activities