import React from 'react'

const Button = ({ title, isRounded = false, btnType = "solid" }) => {

  switch (btnType) {
    case "outline":
      return <button className={`border color-red py-1 text-center mt-2 rounded-2 w-100  ${isRounded ? "rounded-pill px-3" : ""} bg-white `} style={{border:"1px solid rgb(220, 53, 75)",fontSize:"14px",fontWeight:"400"}}>{title}</button>

    default:
      return (
        <div>
          <button className={`border ${isRounded ? "rounded-pill px-3" : ""} bg-white a-13 px-2 py-1 color-red`}>{title}</button>
        </div>
      )
  }
}

export default Button