import React, { useEffect, useState } from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useLocation } from 'react-router-dom';
const Navigation = () => {
    const { pathname } = useLocation()
    const [navigation, setNavigation] = useState(<span>Home <HiOutlineArrowLongRight />  Movies</span>)

    useEffect(() => {
        switch (pathname) {
            case "/movies":
                setNavigation(<span>Home <HiOutlineArrowLongRight />  Movies</span>)
                break;
            case "/stream":
                setNavigation(<span>Home <HiOutlineArrowLongRight />  Stream</span>)
                break;
            case "/events":
                setNavigation(<span>Home <HiOutlineArrowLongRight />  Events</span>)
                break;
            case "/plays":
                setNavigation(<span>Home <HiOutlineArrowLongRight />  Plays</span>)
                break;
            case "/sports":
                setNavigation(<span>Home <HiOutlineArrowLongRight />  Sports</span>)
                break;
            case "/activities":
                setNavigation(<span>Home <HiOutlineArrowLongRight /> Activities </span>)
                break;
            case "/listshow":
                setNavigation(<span>Home <HiOutlineArrowLongRight /> List Your Show </span>)
                break;
            case "/corporates":
                setNavigation(<span>Home <HiOutlineArrowLongRight /> corporates </span>)
                break;
            case "/offers":
                setNavigation(<span>Home <HiOutlineArrowLongRight /> offers</span>)
                break;
            case "/gaftcards":
                setNavigation(<span>Home <HiOutlineArrowLongRight /> gaftcards </span>)
                break;
            default:
                setNavigation(<span>Home <HiOutlineArrowLongRight />  Movies</span>)
                break;
        }
    }, [pathname])
    return (
        <>
            <section className='bg-white'>
                <div className='container py-3  ' style={{ fontSize: "12px" }}>
                    {/* Home <HiOutlineArrowLongRight />  Movies */}
                    {navigation}

                </div>

            </section>

        </>
    )
}

export default Navigation