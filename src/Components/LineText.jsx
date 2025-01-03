import React from 'react'

function LineText({onPress}) {
  return (
    <div onClick={onPress} className='py-3 bg-black sticky top-0 z-10 text-center fs-4 TitleHead'>START YOUR JOURNEY WITH US <button className='mb-2'>ENROLL</button></div>
  )
}

export default LineText