import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const SocialLinks = () => {
  const data = [
    <FaFacebookF />,
    <BsTwitterX />,
    <FaInstagram />,
    <FaYoutube />,
    <FaPinterestP />,
    <FaLinkedinIn />
  ];
  return (

    <>
      <section style={{ background: "#333338" }}>
        <div className='pt-3  a-img-box '>
        <div className='container a-img-boxs  py-1 ' >
          <div className=' a-imgs px-3   '>
          <img  src="logo.svg" alt="#" />
          </div>
        </div>

        </div>
        <div className='container '>
          <div className='a-sociallinks d-flex justify-content-center mt-5   m-auto w-25 '>
            <div className='m-auto d-flex gap-2'>
              {data.map((values, index) => {
                return <>
                  <div key={index} className='a-icons'>{values}</div>
                </>
              })}
            </div>
          </div>
          
        </div>
        <div className='text-center py-5 '><p className='m-auto ' style={{ color: "rgb(102, 102, 102)", fontSize: "11px",width:"94%" }}>Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved. <br /> The content and images used on this site are copyright protected and copyrights vests with the respective  owners. The usage of the content and images on this website is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited  and punishable by law.</p></div>
      </section>
    </>
  )
}

export default SocialLinks