import React from 'react'
import "./event.css"
import Filter from '../../component/filter/Filter';
import Button from '../../component/Button';
import Cards from '../../component/Cards/Cards';
import Appliedfilter from '../../component/filter/Appliedfilter';
const data = [
  {
    title: "Date",
    buttons: ["Today", "Tomorrow", "This Weekend"],
  },
  {
    title: "Languages",
    buttons: ["English", "Hindi", "Telgu", "Punjabi"],
  },
  {
    title: "Categories",
    buttons: ["Workshop", "Online Streaming Events", "Comedy Shows", "Kids", "Performances", "Music Shows"],
  },
  {
    title: "More Filters",
    buttons: ["Online Streaming", "Fast Filling", "Outdoor Events", "Must Attend", "Unmissable Events", "Kids Activities", "Kids Allowed", "Offers for you"],
  },
  {
    title: "Price",
    buttons: ["Free", "0-500", "501-2000", "Above 2000"],
  },
];

const eventsData = [
  {
    name: "Ashwin Srinivas Live ",
    title1: "Spotlight Socials: Kochi",
    title2: "Stand up Comedy",
    description: "₹ 1000 onwards",
    src: "envetimg/e-1.avif",
  },
  {
    name: "Insomnia Wake Up Into The Dream",
    title1: "JT Performing Arts Centre",
    title2: "Magic",
    isNameSlice: false,
    description: "21179 onwards",
    src: "envetimg/e-2.avif",
  },
  {
    name: "Masterclass on Consistent Compounding",
    title1: "Bandra Reclamation: Mumbai",
    title2: "Workshops",
    description: "₹ 1000 onwards",
    src: "envetimg/e-3.avif",
  },
  {
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "envetimg/e-4.avif",
  },
  {
    name: "BMW Joytown 2024",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description: "₹ 4999 onwards",
    src: "envetimg/e-5.avif",
  },
  {
    name: "Exposure Math - Capture Any Photography Genre",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "envetimg/e-6.avif",
  },
  {
    name:"Talk Session in Culinary Arts (Ft. Joao Garcia)    ",
    title1:"Watch on Zoom    ",
    title2:"Education",
    description:"FREE",
    src:"envetimg/e-7.avif",
  },
  {
    name:"Kisi Ko Batana Mat Ft. Anubhav Singh Bassi    ",
    title1:"Shanmukhananda Hall    ",
    title2:"Stand up Comedy    ",
    description:"2799 onwards",
    src:"envetimg/e-8.avif",
  },
  {
    name:"Aaraanu Santhosham Aagrahikkathathu by WIT    ",
    title1:"Commons: Kochi    ",
    title2:"Stand up Comedy",
    description:"399 onwards    ",
    src:"envetimg/e-9.avif",
  },
  {
    name:"Talk Session in Business (Ft. Karthik ",
    title1:"Watch on Zoom    ",
    title2:"Education",
    description:"FREE",
    src:"envetimg/e-10.avif",
  },
  {
    name:"Bio-Math (Duo Standup Comedy Show)    ",
    title1:"Horg Store: Kochi    ",
    title2:"Stand up Comedy    ",
    description:"2199 onwards ",
    src:"envetimg/e-11.avif",
  },
  {
    name:"Talk Session in Med- Science (Ft. Malhar ",
    title1:"Watch on Zoom    ",
    title2:"Education",
    description:"FREE",
    src:"envetimg/e-12.avif",
  },
  
];

const Events = () => {
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
                title={"Events in Selu"}
                buttons={["Workshops", "Online Streaming Events", "Comedy Shows", "Kids", "Performaces", "Music Shows"]}
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

export default Events