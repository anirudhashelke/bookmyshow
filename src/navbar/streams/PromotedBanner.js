import React from 'react'
import { IoMdPlay } from "react-icons/io";
const PromotedBanner = ({ path, posterPath, title, movieName, slug, language, description, isPremiere = false }) => {
    return (
        <div className='a-promoted' style={{ background: path }}>
            <div className='a-promoted-banners'>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <div className="a-img-boxs">
                                <img src={posterPath} alt="#" />
                            </div>
                        </div>
                        <div className="col-12 col-md-7 text-white text-start d-flex align-items-center">
                            <div className='d-flex flex-column gap-4'>
                                {isPremiere && <div style={{ width: "fit-content", background: "#313035" }} className='d-flex rounded-pill pe-2  gap-2 align-items-center '>
                                    <div className='a-playicon'>
                                        <IoMdPlay />
                                    </div>
                                    <h6 className='a-14 my-1 a-premiere'>PREMIERE</h6>
                                </div>}
                                <h6 className='a-stream'>{title}</h6>
                                <h2 style={{ color: "rgb(255, 255, 255)", fontSize: "36px", fontWeight: "bold" }}>{movieName}</h2>
                                <h6 className='a-stream'>{slug}</h6>
                                <h6 className='a-stream'>{language}</h6>
                                <h6 className='a-description '>{description}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromotedBanner