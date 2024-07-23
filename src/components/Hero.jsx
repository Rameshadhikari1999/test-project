import React from 'react'
import hero from '../assets/image/hero.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
  useGSAP(()=>{
    gsap.from('#hero-img',{
        x:500,
        delay:0.5,
        duration:1.5,
        opacity:0,
        ease: 'power4.out',
    });
    gsap.from('#hero-para',{
        x:-1000,
        delay:1.5,
        duration:1.5,
        ease: 'power4.out',
    })
    gsap.from('#hero-heder',{
        y:-1000,
        delay:1,
        duration:1.5,
        ease: 'power4.out',
    })
  })
  return (
    <div id="hero" className="p-5 py-10 md:py-20 w-full h-fit flex flex-col md:flex-row items-center justify-center z-10">
      <div className='p-5 md:w-1/2' id='hero-content'>
        <h1 id='hero-heder' className='text-5xl font-mono'>Welcome, <span className='text-purple-600'>Ramesh Adhikari</span></h1>
        <p id='hero-para' className='w-full font-serif font-medium text-justify py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque libero quo tempore neque ratione reiciendis. Voluptatibus fugit expedita consectetur quo dolore voluptas ipsa. Quisquam a eius ea facere mollitia, similique tenetur fuga cupiditate in aliquid, accusamus nobis eveniet distinctio atque?</p>
      </div>
      <div className='md:w-1/2 p-5 pr-10 flex items-center justify-center'>
        <img src={hero} id='hero-img' className='w-1/2 opacity-1 rounded-xl shadow-md shadow-gray-700' alt="hero" />
      </div>
    </div>
  )
}

export default Hero
