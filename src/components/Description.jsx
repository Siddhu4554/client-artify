import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'


const Description = () => {
  return (
    <motion.div
    initial={{ opacity:0.2 , y:100 }} 
    whileInView={{ opacity: 1, y:0 }}
    transition={{ duration:1 }}
    viewport={{ once: true }}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Create AI Images!</h1>
        <p className='text-gray-500 mb-8'>Turn your imaginations into Visuals.</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
            <img src={assets.sample_img_1} alt='' className='w-80 xl:w-96 rounded-lg ' />
                <div>
                    <h2 className='text-3xl font-medium max-w-lg'>ArtifyAI: Your Imagination to Life</h2>
                    <p className='text-gray-600 mb-4'>ArtifyAI is a groundbreaking platform that turns your text into stunning, AI-generated images. Whether you’re an artist, storyteller, or just curious, ArtifyAI makes it easy to bring your ideas to life. Simply type a prompt, and watch as the AI creates unique, visually striking artwork tailored to your imagination.</p>
                    <p className='text-gray-600'>With its simple and user-friendly interface, ArtifyAI is designed for everyone. From creating custom designs to exploring new creative possibilities, the platform offers endless opportunities for artistic expression. Let your words transform into breathtaking visuals and redefine creativity with ArtifyAI.</p>
                </div>
        </div>

    </motion.div>
  )
}

export default Description
