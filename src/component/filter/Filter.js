import React, { useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import Button from '../Button';

const Filter = ({ buttons, title }) => {
  const [open, setOpen] = useState(false)


  function toggleButton() {
    setOpen(!open)
  }
  return (
      <section>
        <div className='bg-white p-2 rounded my-2 '>
          <div onClick={toggleButton} className='d-flex align-items-center justify-content-between' style={{ cursor: "pointer" }}>
            <div className='d-flex align-items-center gap-3'>
              {open ? <GoChevronDown /> :
                <GoChevronUp />}
              <h6 className={`${open ? "color-red" : "text-dark"}  a-14`}>{title}</h6>
            </div>
            <h6 className=' a-13 text-secondary'>Clear</h6>
          </div >

          {open && <div className="mt-3 d-flex flex-wrap gap-2">
            {buttons.map((value) => {
              return <Button key={value} title={value} />
            })}
          </div>}
        </div>
      </section>
  )
}

export default Filter