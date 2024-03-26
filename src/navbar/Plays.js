import React from 'react'

const Plays = () => {
  return (
    <section className='container w-50 mx-auto  '>
       <div>
       <h2 className='py-5' style={{color:"rgb(51, 51, 51)",fontSize:"24px",fontWeight:"700"}}>Plays In Kochi</h2>
       </div>
       <div className='d-flex justify-content-end align-items-center '>
        <div className='text-center  mt-5 '>
        <img  src="nada.avif" alt="" width={300} height={189}/>
           <h6 className='pt-4' style={{color:"rgb(0, 0, 0)",fontSize:"16px",fontWeight:"500"}}>Nope! Nothing! Nada!</h6>
           <p className='pb-3' style={{color:"rgb(102, 102, 102)",fontSize:"12px"}}>Sorry! There was nothing to load on this page. Kindly <br /> visit the homepage for more entertainment.</p>
           <button style={{background:"rgb(220, 53, 88)",color:"rgb(255, 255, 255)",fontSize:"12px" ,padding:"6px 90px",borderRadius:"4px",border:"none"}}>Visit Homepage</button>
        </div>
       </div>
    </section>
  )
}

export default Plays