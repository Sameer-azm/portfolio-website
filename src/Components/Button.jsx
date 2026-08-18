import React from 'react'



const Button = ({text,icon}) => {
  return (
    <div className='md:min-w-60 w-fit'>
        <div className='bg-[rgba(255,255,255,0.03)] cursor-pointer hover:bg-[#00f5d4] text-white hover:text-black gap-2 border-2 border-gray-600 hover:border-[#00f5d4] transition-all duration-75 py-1 md:py-1.5 px-7 flex items-center justify-center rounded-2xl'>
<span >{icon}</span>
<span className='font-SpaceMono text-xs tracking-normal md:tracking-wider md:text-sm'>{text}</span>
        </div>
    </div>
  )
}

export default Button