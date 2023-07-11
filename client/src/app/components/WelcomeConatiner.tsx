import React from 'react'
type WelcomeConatinerProps = {
    para : string
}
export default function WelcomeConatiner({para} : WelcomeConatinerProps) {
  return (
    <>
     <div className="border bg-white px-2 py-3 mb-4">
        <p>{para}</p>
     </div>
    </>
  )
}
