import React from 'react'
type HeadingContainerProps = {
    heading : string
}
export default function HeadingContainer({heading} : HeadingContainerProps) {
  return (
    <>
      <div className="py-1 px-2">
        <h1 className='text-[25px] font-bold'>{heading}</h1>
      </div>
      <div className="my-[4px] px-2">
        <div className='border border-[#83C8F2]'></div>
      </div>
    </>
  )
}
