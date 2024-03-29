import React from 'react'
import "./listshow.css"
import ListshowMlitiescarousel from '../../component/listshowmulticarousel/ListshowMlitiescarousel'
import BannersCards from './BannersCards';
import Listshowcsider from './Listshowcsider';

function ShowsMainText({ title, desc }) {
  return (
      <div className="text-center">
          <h1 style={{fontSize:"48px",fontWeight:"700",color:"rgb(31, 37, 58)"}}>{title}</h1>
          <p style={{fontSize:"18px",fontWeight:"400",color:"rgb(31, 37, 58)"}}>{desc}</p>
          
      </div>
  );
}
const Listshow = () => {
  const cardData = [
    {
        imgPath: "shows/i-1.avif",
        title: "Performances",
    },
    {
        imgPath: "shows/i-2.avif",
        title: "Experiences",
    },
    {
        imgPath: "shows/i-3.avif",
        title: "Expositions",
    },
    {
        imgPath: "shows/i-4.avif",
        title: "Parties",
    },
    {
        imgPath: "shows/i-5.avif",
        title: "Sports",
    },
    {
        imgPath: "shows/i-6.avif",
        title: "Confercesses",
    },
];
  const cardDatas = [
    {
        imgPath: "shows/i-7.avif",
        title: "Online Sales & Marketing ",
        // background:"green"
    },
    {
        imgPath: "shows/i-8.avif",
        title: "Pricing ",
        // background:"purple"
    },
    {
        imgPath: "shows/i-9.avif",
        title: "Food & beverages, stalls and the works!",
        // background:"blue"
    },
    {
        imgPath: "shows/i-10.avif",
        title: "On ground support & gate entry management",
        // background:"yellow"
    },
    {
        imgPath: "shows/i-11.avif",
        title: "Reports & business insights",
        // background:"pink"
    },
    {
        imgPath: "shows/i-12.avif",
        title: "POS, RFID, Turnstiles & more...",
        // background:"red"
    },
];

  return (
    <section className="a_shows">
            <div className="my-3">
                <ListshowMlitiescarousel />
            </div>

            <div className="bg-white a_show_wrapper ">
                <div className="a_shows_container mx-auto ">
                    <ShowsMainText
                        title={"What you can host?"}
                        desc={
                            "As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the event. Let’s look at what you can host."
                        }
                    />
                    <div className="row">
                        {cardData.map(function (values, index) {
                            return (
                                <div key={index}  className="col-12 col-md-4 mt-4">
                                    <BannersCards background='rgb(236, 245, 255)' {...values} />
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center mt-5 pt-5">
                        <button style={{padding:"14px 95px",background:"rgb(236, 94, 113)",borderRadius:"8px"}} className="text-white btn btn-sm  fw-bold">List your show</button>
                    </div>
                </div>
            </div>

            <div className="bg-white  py-5 ">
                <div className="a_shows_container mx-auto ">
                    <ShowsMainText
                        title={"What are the services we offer?"}
                        desc={
                          "After successful collaborations with the best event organisers over the past decade and a half, we’re well equipped to bring your vision to life."
                        }
                    />
                    <div className="row">
                        {cardDatas.map(function (values, index) {
                            return (
                                <div key={index}   className="col-12 col-md-4 mt-4 ">
                                    <BannersCards background='rgb(252, 241, 241)' {...values} />
                                </div>
                            );
                        })}
                    </div>
                    <p className='text-center py-5' style={{fontSize:"18px",fontWeight:"400",color:"rgb(31, 37, 58)"}}>Apart form these must haves for any event, we also support a host of other services like SEO for your event, custom pricing for your tickets and this and also this.</p>
                    <div className="text-center mt-5">
                        <button style={{padding:"14px 95px",background:"rgb(236, 94, 113)",borderRadius:"8px"}} className="text-white btn btn-sm  fw-bold">List your show</button>
                    </div>
                </div>
            </div>

            <Listshowcsider  />

            <div style={{background: "#FFFFFF"}} className='pb-5'>
            <div style={{ width: "40%", background: "url(shows/security-imag.avif)" }} className="mx-auto a_security">
                    <ShowsMainText width={100} title={"Sit back and watch your event come to life"} desc={"Events maybe all fun and games, but we take it seriously. We ensure our customer’s security so that you don’t have to."} />
                </div>
            </div>
        </section>    
  )
}

export default Listshow