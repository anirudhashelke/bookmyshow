import React from 'react'
import "./mucards.css"

const Mucards = ({ src, movieName, movieCertificate, language }) => {
    return (
        <div>
            <div>
                <div className='a-movies-card'>
                    <img src={src} alt="" />
                </div>
            </div>
            <div className=" mt-3">
                <h5 style={{fontSize:"19px"}}>{movieName}</h5>
                <h6 className=' a-13 my-1 text-muted'>{movieCertificate}</h6>
                <h6 className=' a-13 text-muted'>{language}</h6>
            </div>
        </div>
    )
}

export default Mucards