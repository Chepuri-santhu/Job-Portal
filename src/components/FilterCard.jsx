import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
  {
    filterType: "Location",
    array: ["Hyderabad", "Pune", "Bangalore", "Mumbai"]

  },
  {
    filterType: "Role",
    array: ["Front End Developer", "Backend Developer", "Data Scientist", "ML engineer"]

  },
  {
    filterType: "Salary",
    array: ["3-4 lpa", "4-10 lpa", "10-15 lpa", "15+ lpa"]

  },

]
export const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'> Filter Jobs </h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
          filterData.map((data, index) => (
            <div>
              <h1 className='font-bold text-lg'> {data.filterType}</h1>
              {
                data.array.map((item, index) => {
                  return (
                    <div className='flex items-center space-x-2 my-2'>
                      <RadioGroupItem value={item}/>
                        <Label>{item}</Label>
                    </div>
                  )

                })
              }
            </div>
          ))
        }
      </RadioGroup>




    </div>
  )
}
