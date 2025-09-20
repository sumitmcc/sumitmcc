import Hero from '@/components/layout/Hero'
import React from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"

const Home = () => {
  return (
    <div>
      <Hero/>
      <SpeedInsights />
    </div>
  )
}

export default Home
