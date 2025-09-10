import React from 'react'
import HeroImage from './HeroImage'
import HeroImageMobile from './HeroImageMobile'

const Hero = () => {
    const pText: string[] = [`I'm an Observability Engineer by profession, currently based in Bangalore, Karnataka. 
    Over the past decade, I’ve lived in Belgaum, Mangalore, Raleigh, and Buffalo, soaking in diverse cultures and experiences along the way.`,
    `I’m passionate about programming and enjoy building small projects in my free time. Beyond the keyboard, 
    I’m a hobby photographer with a keen eye for landscapes and long exposures. And yes, I absolutely love baking sourdough!`,
    `These days, life is a bit busier (and a lot messier) as I spend most of my time with my newborn, embracing the joys and chaos of parenthood.`,
    `Welcome to my little corner of the internet!`]
    const funText: string = `Fun fact: I’ve experienced some of nature’s most dramatic moods – from earthquakes and hurricanes to blizzards, snowstorms, and hailstorms.`
    const hText: string = "Hi, I'm Sumit Chachadi!"
  return (
    <section className='bg-[#f8f8f8] lg:py-16 py-8 bg-transparent'>
      <div className='mx-auto flex-row items-center gap-x-72 lg:flex hidden justify-between flex-shrink-0 '>
        <div className='text-left lg:flex-1 '>
            <h1 className='text-4xl font-bold text-gray-800 mb-4 text-center dark:text-slate-100'>
                {hText}
            </h1>

                {pText.map((para, index) => (
                    <p key={index} className='text-gray-600 leading-relaxed text-xl font-semibold mb-2 dark:text-slate-100'>{para}<br/></p>
                ))}
                <br></br>
                <p className='text-gray-600 leading-relaxed text-xl font-semibold dark:text-slate-100'>
                    {funText}
                </p> 
        </div>
        <HeroImage/>
      </div>

      {/* For mobile */}
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:hidden'>
        <HeroImageMobile/>
            <div className='text-center lg:text-left mx-4 '>
                <h1 className='text-4xl font-bold text-gray-800 mb-4 dark:text-slate-100'>
                    {hText}
                </h1>
                
                {pText.map((para, index) => (
                    <p key={index} className='text-lg text-gray-600 leading-relaxed mb-2 dark:text-slate-100'>{para}<br/></p>
                ))}
                <br></br>
                <p className='text-lg text-gray-600 leading-relaxed dark:text-slate-100'>
                    {funText}
                </p> 
            </div>
        
      </div>
    </section>
  )
}

export default Hero
