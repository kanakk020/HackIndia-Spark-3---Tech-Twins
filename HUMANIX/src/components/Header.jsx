import React from 'react'

export default function Header() {
    return (
      <>
      <div className="flex justify-between font-one text-white py-2">
      <div>
         <p className="text-4xl md:text-6xl md:ml-16 ml-6 bg-violet-700 inline-block text-transparent bg-clip-text">Hey there,</p>
         <p className="text-slate-600 text-2xl ml-6 md:text-4xl md:ml-16">Convert your AI generated response to humanized text</p>
      </div>
      
      </div>
   </>
    )
  }