import React from 'react'
import { assets } from '../assets/assets'
export const Footer = () => {
  return (
    <div className='flex flex-row justify-between p-4'>
    <div >
      <img src={assets.logo}/>
      <p>Copy Right @GreatStack.dev|| All right reserved</p>
    </div> 
      <div className='flex flex-row justify-end p-4 gap-4 '>
        <img className='w-38' src={assets.facebook_icon}/>
        <img className='w-38' src={assets.twitter_icon}/>
        <img className='w-38' src={assets.instagram_icon}/>
      </div>
    </div>
  )
}

