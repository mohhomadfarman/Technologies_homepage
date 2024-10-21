import React from 'react'

function Header() {''
  return (
    <div className=' bg-[#ffef61]'>
   <div className='d-flex sticky-top justify-content-between  text-black p-3 max-w-[1140px] m-auto' >
    <div>
        <div>Header</div>
        </div>
   <div className='d-flex gap-5'>
   <div><a href="#">Home</a></div>
    <div><a href="#">About</a></div>
    <div><a href="#">Service</a></div>
    <div><a href="#">Contact</a></div>
   </div>
    
   </div>
    </div>

  )
}

export default Header