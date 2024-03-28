import React from 'react'
import { BsExclamationCircle } from "react-icons/bs";
// function ShowsMainText({ title, desc }) {
//     return (
//         <div className="text-center">
//             <h1 style={{fontSize:"48px",fontWeight:"700",color:"rgb(31, 37, 58)"}}>{title}</h1>
//             <p style={{fontSize:"18px",fontWeight:"400",color:"rgb(31, 37, 58)"}}>{desc}</p>
//         </div>
//     );
//   }
const BannersCards = ({ imgPath, title, background = ""}) => {
    // const cardData = [
    //     {
    //         imgPath: "shows/i-1.avif",
    //         title: "Performances",
    //     },
    //     {
    //         imgPath: "shows/i-2.avif",
    //         title: "Experiences",
    //     },
    //     {
    //         imgPath: "shows/i-3.avif",
    //         title: "Expositions",
    //     },
    //     {
    //         imgPath: "shows/i-4.avif",
    //         title: "Parties",
    //     },
    //     {
    //         imgPath: "shows/i-5.avif",
    //         title: "Sports",
    //     },
    //     {
    //         imgPath: "shows/i-6.avif",
    //         title: "Confercesses",
    //     },

    // {
    //         imgPath: "shows/i-7.avif",
    //         title: "Online Sales & Marketing",
    //     },
    //     {
    //         imgPath: "shows/i-8.avif",
    //         title: "Experiences",
    //     },
    //     {
    //         imgPath: "shows/i-9.avif",
    //         title: "Expositions",
    //     },
    //     {
    //         imgPath: "shows/i-10.avif",
    //         title: "Parties",
    //     },
    //     {
    //         imgPath: "shows/i-11.avif",
    //         title: "Sports",
    //     },
    //     {
    //         imgPath: "shows/i-12.avif",
    //         title: "Confercesses",
    //     },

    // ];
    return (
        <>
            <div style={{background,height:"100%"}} className=" a_shows_card py-4" >
                <div className='a_shows_card_img'>
                    <img src={imgPath} alt="" />
                </div>
                <h4 style={{ fontSize: "24px", fontWeight: "700", textAlign: "center" }}>{title}</h4>
                <BsExclamationCircle size={25} className='color-red' />
            </div>

        </>


        // <div className="bg-white a_show_wrapper ">
        //     <div className="a_shows_container mx-auto ">
        //         <ShowsMainText
        //             title={"What you can host?"}
        //             desc={
        //                 "As the purveyor of entertainment, BookMyShow enables your event with end to end solutions from the time you register to the completion of the event. Let’s look at what you can host."
        //             }
        //         />
        //         <div className="row">
        //             {cardData.map(function (values, index) {
        //                 return (
        //                     <div key={index} className='col-12 col-md-4 mt-5  '>
        //                         <div className='a_shows_card py-4'>
        //                         <div className='a_shows_card_img'>
        //                             <img src={values.imgPath} alt="" />
        //                         </div>
        //                         <h4 style={{ fontSize: "24px", fontWeight: "700" }}>{values.title}</h4>
        //                         <BsExclamationCircle size={25} className='color-red' />
        //                         </div>
        //                     </div>
        //                 );
        //             })}
        //         </div>
        //         <div className="text-center mt-5">
        //             <button style={{ padding: "14px 95px", background: "rgb(236, 94, 113)", borderRadius: "8px" }} className="text-white btn btn-sm  fw-bold">List your show</button>
        //         </div>
        //     </div>
        // </div>
    )
}

export default BannersCards