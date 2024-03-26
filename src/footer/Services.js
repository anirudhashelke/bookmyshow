import React from 'react'
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiTicket } from "react-icons/gi";
import { FaEnvelopeOpenText } from "react-icons/fa";
const Services = () => {
    const data = [
        {
            icon: <RiCustomerService2Fill size={50} />,
            title: "24/7 CUSTOMER CARE",
        },
        {
            icon: <GiTicket size={50} />,
            title: "RESEND BOOKING CONFORMATIONS",
        },
        {
            icon: <FaEnvelopeOpenText size={50} />,
            title: "SUBSCRIBE TO THE NEWSLETTERS",
        },
    ];
    return (
        <>
            <section style={{ background: "rgb(64, 64, 67)" }}>
                <div className='container'>
                    <div className="row py-4" >

                        {data.map((value,index) => {
                            return <div key={index} className="col-12 col-md-4 text-center b_service_box">
                            <div className='a-services' style={{ color: "rgba(188, 192, 196, 0.74)" }}>
                                <div className='py-2 '> {value.icon}</div>
                                <p className="b_h12 roboto-light mt-1" style={{ fontSize: "11px" }}>{value.title}</p>
                            </div>
                        </div>
                                
                        })}


                    </div>
                </div>
            </section>
        </>
    )
}

export default Services