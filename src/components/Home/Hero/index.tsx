'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useEdit } from '@/app/api/contex/EditContext'

const Hero = () => {
  const { isEditing } = useEdit()
  const [imageUrl, setImageUrl] = useState('/images/hero/hero-image.png')

  return (
    <section className='relative bg-cover text-white'>
      <div className='container mx-auto max-w-6xl px-4 grid sm:grid-cols-2 grid-cols-1 gap-8 relative z-10'>
        <div className="relative before:absolute m-auto before:content-[''] before:bg-[url('/images/hero/line-leyar.svg')] before:bg-no-repeat before:-right-1/4 before:top-0 before:h-24 before:w-52 before:-z-10 lg:before:inline-block before:hidden after:absolute after:content-[''] after:bg-[url('/images/hero/round-leyar.svg')] after:bg-no-repeat xl:after:inline-block after:hidden after:-left-1/4 after:bottom-0 after:h-6.25 after:w-6.25 after:-z-10">
          <div className="relative">
            {isEditing && (
              <div className='absolute top-2 right-2 left-2 bg-white/90 p-2 rounded z-20'>
                <label htmlFor="Image url" className="text-black">
                  Image Url:
                </label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className='w-full p-1 border border-border rounded mb-2 text-black'
                  placeholder="Image URL"
                />
              </div>
            )}
            <Image
              src={imageUrl}
              alt='hero-image'
              width={350}
              height={150}
              quality={100}
              className='rounded-lg mx-auto'
            />
          </div>
        </div>
        <div className='p-4 md:px-4 px-0 space-y-4 flex flex-col items-start justify-center'>
          <h1 className='text-midnight_text font-bold text-4xl md:text-5xl md:leading-[1.15]' contentEditable={isEditing} suppressContentEditableWarning>
            John Doe
          </h1>
          <p className='text-black text-lg' contentEditable={isEditing} suppressContentEditableWarning>
            I am a passionate software developer dedicated to continuous learning and professional growth, striving to become an exceptional developer.
          </p>
          <div className='grid sm:grid-cols-2 grid-cols-1 mt-4 w-full'>
            <div>
              <span className='text-grey text-base'>Phone</span>
              <p className='bg-transparent border-0 text-midnight_text text-lg' contentEditable={isEditing} suppressContentEditableWarning>
                +323-25-8964
              </p>
            </div>
            <div>
              <span className='text-grey text-base'>Email</span>
              <p className='bg-transparent border-0 text-midnight_text text-lg' contentEditable={isEditing} suppressContentEditableWarning>
                templatesnextjs@gmail.com
              </p>
            </div>
            <div className='col-span-2 pt-4'>
              <span className='text-grey text-base'>Location</span>
              <p className='bg-transparent border-0 text-midnight_text text-lg' contentEditable={isEditing} suppressContentEditableWarning>
                Ahmedabaad, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
