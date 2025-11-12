'use client'

import { useRef, useState } from 'react'
import { useEdit } from '@/app/api/contex/EditContext'
import { educationinfo } from '@/app/api/data'

const Education = () => {
    const resumeRef = useRef<HTMLDivElement>(null)
    const { isEditing } = useEdit()
    const [educationData, setEducationData] = useState(educationinfo)

    const handleEdit = (index: number, field: 'Uni' | 'course' | 'year', value: string) => {
        const newData = [...educationData]
        newData[index] = {
            ...newData[index],
            [field]: value
        }
        setEducationData(newData)
    }

    return (
        <section ref={resumeRef} className={`scroll-mt-25`}>
            <div className='container mx-auto max-w-6xl px-4'>
                <h2 className='pt-9 pb-8 text-midnight_text font-bold text-4xl'>
                    Education
                </h2>
                <div className="overflow-x-auto">
                    <div className="border border-border rounded-lg">
                        <div className="bg-gray-100 border-b border-border py-4 px-6 flex justify-between">
                            <div className="">
                                <p className='text-sm text-left font-semibold text-grey'>University</p>
                            </div>
                            <div className="">
                                <p className='text-sm text-left font-semibold text-grey'>Course</p>
                            </div>
                            <div className="">
                                <p className='text-sm text-left font-semibold text-grey'>Year</p>
                            </div>
                        </div>
                        {educationData.map((item, index) => (
                            <div key={index} className="py-4 px-6 border-b border-border flex justify-between gap-4">
                                <div className="flex-1">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={item.Uni}
                                            onChange={(e) => handleEdit(index, 'Uni', e.target.value)}
                                            className='w-full p-1 border border-border rounded text-base font-medium text-midnight_text'
                                        />
                                    ) : (
                                        <p className='text-lg font-medium text-midnight_text'>
                                            {item.Uni}
                                        </p>
                                    )}
                                </div>
                                <div className="flex-1">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={item.course}
                                            onChange={(e) => handleEdit(index, 'course', e.target.value)}
                                            className='w-full p-1 border border-border rounded text-base text-midnight.text'
                                        />
                                    ) : (
                                        <p className='text-base text-midnight.text'>
                                            {item.course}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={item.year}
                                            onChange={(e) => handleEdit(index, 'year', e.target.value)}
                                            className='w-full p-1 border border-border rounded text-base text-midnight.text'
                                        />
                                    ) : (
                                        <p className='text-base text-midnight.text'>
                                            {item.year}
                                        </p>
                                    )}
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education