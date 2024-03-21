import React from 'react'
import Button from '../Button'

const Appliedfilter = ({ title, buttons }) => {
    return (
        <div>
            <h4 style={{color:"rgb(51, 51, 51)",fontSize:"24px",fontWeight:"700"}}>{title}</h4>
            <div className='d-flex gap-2 mt-2 flex-wrap'>
                {buttons.map((ele) => {
                    return <Button isRounded={true} title={ele} />
                })}
            </div>
        </div>
    )
}

export default Appliedfilter