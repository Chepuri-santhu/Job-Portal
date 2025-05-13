import Navbar from "./shared/Navbar";
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

export const JobDescription = () => {
    const isApplied = true;
    return (
       
        <div className="max-w-7xl mx-auto my-10 px-4"> <Navbar/>
            <div className="flex items-start justify-between my-8">
                {/* Job Info */}
                <div>
                    <h1 className='font-bold text-xl '>Title</h1>
                    <div className='flex flex-wrap items-center gap-2 mt-4'>
                        <Badge className='text-blue-700 font-bold rounded-full px-3 py-1' variant="ghost">3 Positions</Badge>
                        <Badge className='text-[#C70039] font-bold rounded-full px-3 py-1' variant="ghost">Part Time</Badge>
                        <Badge className='text-[#61a220] font-bold rounded-full px-3 py-1' variant="ghost">20$ per hr</Badge>
                    </div>
                </div>

                {/* Apply Button */}
                <div className="mt-2">
                    {isApplied ? (
                        <Button disabled className="bg-gray-200 text-gray-600 cursor-not-allowed px-6 py-2 rounded-lg font-medium cursor-not-allowed">
                            Already Applied
                        </Button>
                    ) : (
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                            Apply Now
                        </Button>
                    )}
                </div>


            </div>
            <div className="bg-white p-6 rounded-xl shadow-md mt-10">
                <h1 className="text-2xl font-extrabold text-gray-800 mb-6 border-b pb-3">Job Description</h1>

                <div className="space-y-3 text-gray-700">
                    <p><span className="font-semibold">Role:</span> <span className="pl-4">Front End Developer</span></p>
                    <p><span className="font-semibold">Location:</span> <span className="pl-4">Remote / Hyderabad, India</span></p>
                    <p><span className="font-semibold">Description:</span>   <span className="pl-4">
                            We are looking for a skilled Front End Developer who is passionate about building clean, user-friendly web interfaces. You will be working with the design and backend teams to implement responsive and accessible user experiences.
                        </span>
                     
                    </p>
                    <p><span className="font-semibold">Experience Required:</span> <span className="pl-4">1-3 years</span></p>
                    <p><span className="font-semibold">Salary:</span> <span className="pl-4">₹8 LPA - ₹12 LPA (based on experience)</span></p>
                    <p><span className="font-semibold">Total Applicants:</span> <span className="pl-4">58</span></p>
                    <p><span className="font-semibold">Posted Date:</span> <span className="pl-4">April 18, 2025</span></p>
                </div>
            </div>


        </div>
    )
}
