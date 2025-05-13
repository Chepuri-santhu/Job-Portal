import React from 'react'
import { Button } from './ui/button'
import {  Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'


export const Job = () => {
  const navigate=useNavigate();
  const Jobid="dkfha";
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500'>2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
      </div>


      <div className='flex items-center gap-2 my-2'>
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className='text-sm text-gray-500'>India</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nesciunt fuga possimus facere rem. Aspernatur ipsum accusamus deleniti cum tenetur!
        </p>
      </div>

      <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-700  font-bold rounded-full px-3 py-1 m-2'} variant="ghost">3 Positions</Badge>
            <Badge className={'text-[#C70039] font-bold rounded-full px-3 py-1 m-2'} variant="ghost">Part Time </Badge>
            <Badge className={'text-[#61a220] font-bold rounded-full px-3 py-1 m-2'} variant="ghost">20$ per hr</Badge>
        </div>

      <div className='flex items-center gap-4 mt-4'>
        <Button onClick={()=> navigate(`/description/${Jobid}`)} variant="outline">Details</Button>
        <Button className=" bg-[#FF9D23] " >Save for Later</Button>
      </div>




    </div>
  )
}
