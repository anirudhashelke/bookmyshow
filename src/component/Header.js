import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoReorderThreeSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
    <header>
        <div className='container py-4'>
            <div className="row justify-content-between">
                <div className='col-12 col-md-7'>
                    <div className='gap-3 row  d-flex   '>
                        <div className='logo col-12 col-md-2 '></div>
                        <div className='a-header col-12 col-md-9'>
                           <div>
                            
                           <CiSearch className=' fs-5' /> <input className='py-1'  type="text" placeholder='Search for Movie, Event ,Plays,Sports and activities '  style={{outline:"none",border:"none" }}  />
                           </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='a-header-right  d-flex px-4 '>
                        <div className='w-50 d-flex align-items-center gap-3' style={{fontSize:"14px",color:"(26, 26, 26)"}}>Kochi   <RiArrowDropDownLine  className='fs-4' /></div>
                        <div className='w-50 d-flex align-items-center gap-3'>
                            <button>Sign</button>
                            <IoReorderThreeSharp className='fs-1 ' />
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* bottom header */}

        <section className='container a-heade-bottom'>
             <div className="row justify-content-between">
                <div className='col-12 col-md-4'>
                    <nav>
                        <ul className='d-flex '>
                            <li><NavLink to={"/movies"}>Movies</NavLink></li>
                            <li><NavLink to={"/stream"}>Stream</NavLink></li>
                            <li><NavLink to={"/events"}>Events</NavLink></li>
                            <li><NavLink to={"/plays"}>Plays</NavLink></li>
                            <li><NavLink to={"/sports"}>Sports</NavLink></li>
                            <li><NavLink to={"/activities"}>Activities</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className='col-12 col-md-4 '>
                    <nav>
                        <ul className='d-flex  '>
                            <li><NavLink to={"/listshow"}>ListYoueShow</NavLink></li>
                            <li><NavLink to={"/corporates"}>Corporates</NavLink></li>
                            <li><NavLink to={"/offers"}>Offers</NavLink></li>
                            <li><NavLink to={"/gaftcards"}>Gift Cards</NavLink></li>
                            
                        </ul>
                    </nav>
                </div>
             </div>
        </section>
    </header>
     </>
  )
}

export default Header