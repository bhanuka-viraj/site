import React from 'react'
import LottlieLoader from '../sub/LottlieLoader'
import LandingAnimation from '@/assets/lottiefiles/landing.json'
import Link from 'next/link'
import { FlipWords } from '../aceternity/flip-words'

const Hero = () => {

  const words = [" Smart", " Fast", " Acumen"];


  return (
    <>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row'>
        {/* Left */}
        <div className='w-full lg:w-1/2 p-4 lg:p-8 flex flex-col justify-center'>
          <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl lg:text-7xl">
            Get<FlipWords words={words} />
          </h1>
          <p className="mt-4 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-gray-500 md:text-xl dark:text-gray-400">
            Digital experiences delivered as apps, workflows, and automations require powerful cloud native infrastructure to do the heavy lifting. You can now focus on your business requirements while we handle the complexities.
          </p>
          <Link
            className="md:w-[160px] inline-flex mt-6 h-10 items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            href="#"
          >
            Get Started
          </Link>
        </div>
        {/* Right */}
        <div className='w-full lg:w-1/2 p-4 lg:p-10 flex items-center justify-center'>
          <LottlieLoader file={LandingAnimation} height={500} width={500} />
        </div>
      </section>
    </>
  )
}

export default Hero