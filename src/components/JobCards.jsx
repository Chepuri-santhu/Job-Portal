import { Badge } from './ui/badge';
import React from 'react'

const JobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>
            <h1 className='font-medium text-lg'>Company Name</h1>
            <p className='text-sm text-gray-500'>Hyderabad,India</p>
        </div>
        <div>
            <h2 className='font-bold text-lg'>Job Title</h2>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700  font-bold rounded-full px-3 py-1 m-2'} variant="ghost">3 Positions</Badge>
            <Badge className={'text-[#C70039] font-bold rounded-full px-3 py-1 m-2'} variant="ghost">Part Time </Badge>
            <Badge className={'text-[#61a220] font-bold rounded-full px-3 py-1 m-2'} variant="ghost">20$ per hr</Badge>
        </div>
    </div>
  )
}

export default JobCards