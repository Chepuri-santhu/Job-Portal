import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Contact, Mail, Pen } from 'lucide-react'
import { Label } from './ui/label'
import { Appliedjobs } from './Appliedjobs'
import { UpdateProfle } from './UpdateProfile'

const skills = ["React.js", "Node.js", "Java", "Python"];
const isResume = true;
const applied = [1, 2, 3];

export const Profile = () => {

    const [open,setOpen]=useState(false);
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     phone: "",
    //     bio: "",
    //     skills: "",
    //     resume: null,
    //   });
    //   const handleChange = (e) => {
    //     const { name, value, files } = e.target;
    //     setFormData((prev) => ({
    //       ...prev,
    //       [name]: files ? files[0] : value,
    //     }));
    //   };
    
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     // You can now send `formData` to the backend
    //     setIsOpen(false);
    //   };
    return (
        <div>
            <Navbar />
            <div className='max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-5'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-4'>

                        <Avatar className="h-24 w-24">
                            <AvatarImage src="https://st3.depositphotos.com/43745012/44906/i/450/depositphotos_449066958-stock-photo-financial-accounting-logo-financial-logo.jpg" />

                        </Avatar>
                        <div>
                            <h1 className='font-medium text-xl'>Santhu Chepuri</h1>
                            <p>AI & Full Stack Developer,Student At VNRVJIET</p>
                        </div>

                    </div>
                    <Button  onClick={()=> setOpen(true)} className="text-right" variant="outline"><Pen /></Button>


                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>user4@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>4444444444</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1 className='mb-2'>Skills</h1>
                    <div className='flex items-center gap-1'>
                        {
                            skills.length != 0 ? skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>

                        }
                    </div>

                </div>
                <div className='max-w-7xl mx-auto p-4'>
                <h1 className="text-2xl font-extrabold text-gray-800 mt-6 mb-4 border-b pb-2 ">Resume </h1>
                    {
                        isResume ? <a target='blank' href='https://www.youtube.com/ ' className='text-blue-800 w-full hover:underline cursor-pointer'> Santhu's web app</a> : <span>NA</span>
                    }

                </div>

                

            </div>
            <div className="max-w-7xl mx-auto p-4">
                    <h1 className="text-2xl font-extrabold text-gray-800 mt-6 mb-4 border-b pb-2 tracking-wide">
                        Applied Jobs
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {applied.map((item, index) => (
                            <Appliedjobs key={index} />
                        ))}
                    </div>
                </div>
                <div>
                    <UpdateProfle open={open} setOpen={setOpen} />
                </div>

        </div>
    )
}
