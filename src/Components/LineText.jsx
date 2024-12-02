import React from 'react'

function LineText({onPress}) {
  return (
    <div onClick={onPress} className='py-3 bg-black  text-center fs-4 TitleHead'>START YOUR JOURNEY WITH US <button>ENROLL</button></div>
  )
}

export default LineText