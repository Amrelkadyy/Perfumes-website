import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <div className='flex flex-col items-center max-w-sm mx-auto'>
        <img src={assets.exchange_icon} className='w-13 mb-5' alt="" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>Our exchange policy covers only the delivery fee. The product price remains unchanged.</p>
      </div>

      {/* 4-Days Return Policy with limited width */}
      <div className='flex flex-col items-center max-w-sm mx-auto'>
        <img src={assets.quality_icon} className='w-13 mb-5' alt="" />
        <p className='font-semibold'>4-Days Return Policy</p>
        <p className='text-gray-400 text-center'>
          We accept returns within 4 days of delivery, provided the items are unused and in their original condition.
        </p>
      </div>

      <div className='flex flex-col items-center max-w-sm mx-auto'>
        <img src={assets.support_img} className='w-13 mb-5' alt="" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We offer 24-hour customer support! For any inquiries or assistance, feel free to contact us on Instagram at @majestic.egy. We're here to help!</p>
      </div>
    </div>
  )
}

export default OurPolicy
