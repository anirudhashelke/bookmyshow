import React from 'react'
import { GiHut } from "react-icons/gi";
const ContactToday = () => {
    return (
            <section className='py-4 text-white' style={{ background: "rgb(49, 48, 53)" }}>
                <div className='container'>
                    <div className="row align-items-center">
                        <div className='col-12 col-md-9'>
                            <div className='d-flex gap-3 align-items-center'>
                                <GiHut style={{ fontSize: "30px" }} />
                                <h6 style={{ fontSize: "16px", color: "rgb(255, 255, 255)", fontWeight: "600" }}>List Your Show</h6>
                                <h6 style={{ fontSize: "16px", color: "rgb(255, 255, 255)", fontWeight: "400" }} className='fw-normal'>Got a show, event, activity or a great experience? Partner with us & get listed on BookMyShow</h6>
                            </div>
                        </div>
                        <div className='col-12 col-md-2 text-end ms-auto'>
                            <button style={{ background: "rgb(236, 94, 113", padding: "10px 20px", color: "rgb(255, 255, 255)", border: "none", borderRadius: "4px" }}>Contact today</button>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default ContactToday