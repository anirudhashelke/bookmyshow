import React from 'react'
import { Carousel } from "react-responsive-carousel";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const siderdata = [
    {
        discrip: "We at Jio MAMI Mumbai Film Festival with Star are proud of our partnership with BMS. They turned around the registration to the festival and the on ground management of delegates at our venues altering visitor experience at the festival which is  the cornerstone of engagement at any LIVE event. BMS is an integral part of building MAMI and its growth in the last 6   years. Despite being a huge corporate their commitment to independent institutions in cultural spaces is unflinching.  Our gratitude to Ashish Hemrajani and his team at BMS fortheir faith and support.”  ",
        title1: "Smriti Kiran",
        title2: "Artistic Director - Mumbai Academy of Moving ",
        title3: " Image (MAMI)",
        title4: "Jio MAMI Mumbai Film Festival with Star",
        imgdata1: "shows/smrit.avif",
        imgdata: "shows/jio.avif",
    },
    {
        discrip: "It’s been eight fantastic years of  RED FM working with Bookmyshow  for listing and promoting its events and IPs through BMS.  It has never felt like a client-vendor relationship. Both the brands have been equal partners, bringing incredible synergies to the projects. And both being leaders in their respective industries, RED FM and BMS have always set examples for other brands to follow.” ",
        title1: "Rajat Uppal",
        title2: "National Marketing Head - RED FM",
        imgdata: "shows/red-fmm.avif",
    },
    {
        discrip: "Apart from being market leaders and pioneers of the entertainment segment, Bookmyshow has also helped evolve Indian markets to consume fresh and different content. Sunburn and Bookmyshow’s association are years strong, and we will continue to work together, and grow together. Bookmyshow today not just offers to be a ticketing platform for Sunburn, put a partner with many more integrated offerings like marketing, planning and on ground operations support. We at Sunburn are proud and grateful to be associated with Bookmyshow!” ",
        title1: "Karan Singh",
        title2: "COO - Percept Live & ",
        title3: "CEO - Sunburn Percept Live Pvt. Ltd.",
        imgdata1: "shows/kar.avif",
        imgdata: "shows/perceptn.avif",
    },
    {
        discrip: "Felicity Theatre feels immensely proud and honoured to have partnered with Book My Show in releasing some of our most loved plays including Selfie, Patte Khul Gaye and the magnum opus Mahabharat, each witnessing phenomenal openings. We’d like to safely assume that no other brand would’ve helped open the doors of theatre to a wider audience than Book My Show, bringing the joy and excshare-itement of watching theatre to millions of Indians!  Book My Show has indeed made entertainment a part and parcel of the daily lives of Indians and continues to make it grow bigger by the year, with new innovations and additions to the events, movies, concerts and entertainment world. It’ll be thrilling to see them grow more in the years to come and possibly become either an OTT platform themselves, produce the best cinema, or open new arenas for entertainme  events, sports and live concerts on their platform!”",
        title1: "Rahul Bhuchar ",
        title2: "CEO - Felicity theatre ",
        imgdata1: "shows/rah.avif",
        imgdata: "shows/felicit.avif",
    },
]
const Listshowcsider = () => {
    return (
        <div style={{ background: "#FFFFFF", padding: "150px 0px 100px 0px" }}  >
            <Carousel showThumbs={false} interval={5000} infiniteLoop={true} showStatus={false} autoPlay>
                {siderdata.map((values) => {
                    return <div className='row d-flex  align-items-center ' style={{ margin: "0px 100px" }}>
                        <div className='col-12 col-md-7'>
                            <div className='position-relative'>
                                <div style={{ left: "-30px", top: "-30px" }} className='position-absolute '><BiSolidQuoteAltLeft size={30} /></div>
                                <p className='text-start a-20' style={{ color: "#333", fontWeight: "400" }}>
                                    {values.discrip}
                                </p>
                                <div className='d-flex gap-4 mt-4 align-items-center '>
                                    <div className='a-left-box'>
                                        <div className='a-left-img'>
                                            <img src={values.imgdata1} alt="" />
                                        </div>
                                    </div>
                                    <div className='a-right-box'>
                                        <h6 className="fw-bold text-start">
                                            {values.title1}
                                        </h6>
                                        <h6 className="fw-bold text-start mt-2">
                                            {values.title2}
                                        </h6>
                                        <h6 className="fw-bold text-start mt-2">
                                            {values.title3}
                                        </h6>
                                        <h6 className="fw-bold text-start mt-2">
                                            {values.title4}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div>
                                <img src={values.imgdata} alt="" />
                            </div>
                        </div>
                    </div>
                })}
            </Carousel>
        </div>
    )
}

export default Listshowcsider