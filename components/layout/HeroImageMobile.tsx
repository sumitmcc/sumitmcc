import Image from 'next/image'
import React from 'react'
import Profile from '@/public/profilepic.png'


const HeroImageMobile = () => {
  return (
    <div className='flex-shrink-0 mb-16'>
        <Image
        src={Profile}
        alt='Sumit Chachadi'
        width={600}
        height={200}
        className=' rounded-full border-4 border-gray-300 shadow-lg w-72 lg:w-full dark:border-grey-700'/>
    </div>
  )
}

export default HeroImageMobile
