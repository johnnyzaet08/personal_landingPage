'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '@/app/api/data'
import Link from 'next/link'
import { useEdit } from '@/app/api/contex/EditContext'

interface PortfolioItem {
  image: string
  alt: string
  title: string
  info: string
  slug: string
  pdf?: string
}

const PortfolioCard = () => {
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(portfolioinfo)
  const { isEditing } = useEdit()

  const handleEdit = (index: number, field: keyof PortfolioItem, value: string) => {
    const newItems = [...portfolioItems]
    newItems[index] = {
      ...newItems[index],
      [field]: value
    }
    setPortfolioItems(newItems)
  }

  const handleProjectClick = (pdfUrl: string) => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank')
    }
  }

  return (
    <div id='portfolio'>
      <div className="grid sm:grid-cols-3 grid-cols-1 gap-4">
        {portfolioItems.map((item, index) => (
          <div key={index} className='group'>
            <div className='relative overflow-hidden rounded-lg'>
              <Link href={item.slug}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={800}
                  style={{ width: '100%', height: 'auto' }}
                  className='group-hover:scale-110 group-hover:cursor-pointer transition-all duration-500'
                  onClick={() => !isEditing && item.pdf && handleProjectClick(item.pdf)}
                />
              </Link>
              {isEditing && (
                <div className='absolute top-2 right-2 left-2 bg-white/90 p-2 rounded'>
                  <label htmlFor="Image url" className="text-black">
                    Image Url:
                  </label>
                  <input
                    type="text"
                    value={item.image}
                    onChange={(e) => handleEdit(index, 'image', e.target.value)}
                    className='w-full p-1 border border-border rounded mb-2 text-black'
                    placeholder="Image URL"
                  />
                </div>
              )}
            </div>
            {isEditing ? (
              <div className='pt-4 space-y-2'>
                <label htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  name='title'
                  value={item.title}
                  onChange={(e) => handleEdit(index, 'title', e.target.value)}
                  className='w-full p-1 border border-border rounded'
                  placeholder="Title"
                />
                <label htmlFor="info">Info</label>
                <input
                  name='info'
                  type="text"
                  value={item.info}
                  onChange={(e) => handleEdit(index, 'info', e.target.value)}
                  className='w-full p-1 border border-border rounded'
                  placeholder="Info"
                />
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  name='link'
                  value={item.slug}
                  onChange={(e) => handleEdit(index, 'slug', e.target.value)}
                  className='w-full p-1 border border-border rounded'
                  placeholder="Link URL"
                />
              </div>
            ) : (
              <div
                className="cursor-pointer"
                onClick={() => item.pdf && handleProjectClick(item.pdf)}
              >
                <Link href={item.slug} className='pb-1 pt-9 group-hover:text-primary group-hover:cursor-pointer text-2xl text-midnight_text font-bold inline-block'>
                  {item.title}
                </Link>
                <p className='text-secondary font-normal text-lg group-hover:text-primary group-hover:cursor-pointer info'>
                  {item.info}
                </p>
                <p className='hidden text-secondary font-normal text-lg link'>
                  {item.slug}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioCard
