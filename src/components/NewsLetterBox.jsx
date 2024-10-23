import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHamdler = (event)  =>{
        event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 25% off</p>
      <p className='text-gray-400 mt-3'>Stay updated with the latest trends, exclusive offers, and style tips by subscribing to our newsletter. As a special welcome, you’ll receive 25% off your first order!</p>
      <form onSubmit={onSubmitHamdler} className='w-full sm:w-1/2 flex items-center space-x-6 mx-auto my-6 border pl-14'>
        <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='enter your email'required/>
        <button className='bg-black text-white text-xs px-10 py-4 '>SUBSCIBE NOW 🔔</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
