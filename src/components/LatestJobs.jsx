
import React from 'react'
import JobCards from './JobCards'
const randomJobs=[1,2,3,4,5,6,7,8,9]

const LatestJobs = () => {
  return (
    <div className='mx-auto my-20 max-w-7xl'>
        <h1 className='text-4xl font-bold'><span className='text-[#FF9D23]'>Latest & Top  </span>Job Openings</h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
     { 
     randomJobs.slice(0,6).map((item,index)=> <JobCards/>)
     }

    </div>
    </div>
    

  )
}

export default LatestJobs