import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export const SliderItem = () => {
  return (
    <li className={cn("absolute inset-0 overflow-hidden after:absolute after:w-full after:h-full after:left-0 after:bottom-0")}>
        <div className='relative w-full h-full'>
            <Image src="/9.jpg" alt="image" fill className='object-cover' />
        </div>
        <div className='space-y-4 absolute left-[10%] top-[20%] w[500px] max-w-[80%] z-10' >
        <p className={cn("uppercase tracking-[10px] text-white translate-y-[30px] blur-[20px] opacity-0 animate-show-content")}>
            Lorem input </p>
        </div>
    </li>
  )
}

