'use client'
import React, { useEffect, useState } from 'react'
import { Progress as ProgressData } from '@/app/api/data'
import { toast } from 'react-hot-toast'
import { useEdit } from '@/app/api/contex/EditContext'

// Define the interface for ProgressItem
interface ProgressItem {
  title: string
  Progress: number
}

const Progresswork = ({ isColorMode }: { isColorMode: Boolean }) => {
  const [progressValues, setProgressValues] = useState<ProgressItem[]>([])
  const { isEditing } = useEdit()

  useEffect(() => {
    setProgressValues(ProgressData)
  }, [])

  const handleEdit = (index: number, field: keyof ProgressItem, value: string | number) => {
    const newValues = [...progressValues]
    newValues[index] = {
      ...newValues[index],
      [field]: field === 'Progress' ? Number(value) : value
    }
    setProgressValues(newValues)
  }

  const handleSave = () => {
    // Here you would typically save to a backend
    toast.success('Changes saved successfully!')
  }

  return (
    <section className={`scroll-mt-25`}>
      <div className='container mx-auto max-w-6xl px-4'>
        <div>
          <div className='flex justify-between items-center pb-8'>
            <h2 className='text-midnight_text font-bold text-4xl'>
              Skills Gained Through Experience
            </h2>
          </div>
          <div className='grid md:grid-cols-3 grid-cols-2 gap-12 mx-auto'>
            {progressValues.map((item, index) => (
              <div
                key={index}
                className='progress_bar_item flex flex-wrap gap-2'>
                <div className='flex-1 w-auto text-sm font-normal '>
                  {isEditing ? (
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => handleEdit(index, 'title', e.target.value)}
                      className='w-full p-1 border rounded'
                    />
                  ) : (
                    item.title
                  )}
                </div>
                <div className='item_value shrink text-sm font-normal text-grey '>
                  {isEditing ? (
                    <input
                      type="number"
                      value={item.Progress}
                      onChange={(e) => handleEdit(index, 'Progress', e.target.value)}
                      min="0"
                      max="100"
                      className='w-16 p-1 border rounded'
                    />
                  ) : (
                    `${item.Progress}%`
                  )}
                </div>
                <div className='w-full'>
                  <div className='w-full h-2 bg-gray-200 rounded-full'>
                    <div
                      className='h-2 bg-primary rounded-full'
                      style={{ width: `${item.Progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Progresswork
