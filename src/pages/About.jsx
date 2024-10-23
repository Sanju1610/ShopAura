import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
       <div className="text-2xl text-center pt-8 border-t">
          <Title text1={'ABOUT'} text2={'US'}/>
       </div>
       
       <div className="my-10 flex flex-col md:flex-row gap-16">
         <img className='w-full md:max-w-[450px]' src={assets.about_img1} alt=''/>
         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
           <p>Shop Aura was born out of a passion for innovation and a disire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a paltform where customers can easiy discove,explore,and purchase a wide range of products from the comfort of their homes.</p>
           <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality prodcuts that cater to every taste and preference.From fashion and beauty to electronics and home essentials,we offer and extensive collection sourced from trusted brands and suppliers.</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Our mission at Shop Aura is to empower customers with choice,convenience,and confidence.We're dedicated to providing a seamless shopping experience that exceeds expectations,from browsing and ordering to delivery and beyond.</p>
         </div>
       </div>
       <div className="flex flex-col md:flex-row text-sm mb-20">
          <div  className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convinience:</b>
            <p className='text-gray-600'> with our user-friendly interface and hasslefree ordring process,shipping has never been easier</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Services:</b>
            <p className='text-gray-600'>Our team of dedicated pofessionals is here to assist you the way,ensuring your satisfaction is our top priority</p>
          </div>
       </div>
       <NewsLetterBox/>
    </div>
  )
}

export default About
