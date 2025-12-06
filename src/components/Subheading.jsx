import React from 'react'

const Subheading = ({text,className}) => {
  return (
    <h2 className={`font-sans font-extrabold text-[#192239] text-[48px] ${className}`}>{text}</h2>
  )
}

export default Subheading