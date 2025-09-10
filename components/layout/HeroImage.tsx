import Image from 'next/image'
import React from 'react'
import Profile from '@/public/profilepic.png'

const HeroImage = () => {
  return (
    <div className='flex-shrink-0 justify-end flex-1'>
            <Image
            src={Profile}
            alt='Sumit Chachadi'
            width={600}
            height={600}
            className='rounded-full border-4 border-gray-300 shadow-lg dark:border-grey-700'/>
    </div>
  )
}

export default HeroImage
