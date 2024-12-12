import React from 'react'

function LineText({onPress}) {
  return (
    <div onClick={onPress} className='py-4 bg-black  text-center fs-4 TitleHead'>START YOUR JOURNEY WITH US <button className='mb-2'>ENROLL</button></div>
  )
}

export default LineText