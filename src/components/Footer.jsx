import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'react-external-link';

const Footer = () => {
  return (
    <div className='flex items-center justify-center gap-4 py-3 mt-20'>
        <img src={assets.logo} alt='Logo' width={150} />
            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Devloped By <ExternalLink href="https://www.instagram.com/siddhesh_gawade11/"><span className='text-red-500 cursor-pointer underline'>Siddhesh Gawade</span></ExternalLink> | All rights reserved</p>

            <div className='flex gap-2.5'>
                <img src={assets.facebook_icon} alt='' width={34} className='hover:scale-[1.2]'/>
                <img src={assets.twitter_icon} alt='' width={34} className='hover:scale-[1.2]' />
                <img src={assets.instagram_icon} alt='' width={34} className='hover:scale-[1.2]' /> 
            </div>
    </div>
  )
}

export default Footer