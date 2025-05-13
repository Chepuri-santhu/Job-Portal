import React from 'react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const {user} = useSelector(store=>store.auth);
  // const user=true;
  return (
    <div className="bg-white shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
        <h1 className="text-2xl font-bold">
          <Link to="/">Job<span className="text-[#FF9D23]">Portal</span></Link>
        </h1>
        <div className='flex items-center gap-12'>
          <ul className="flex font-medium items-center gap-5 ml-auto">
            <li className="cursor-pointer hover:text-[#3d5a80]"><Link to="/">Home</Link></li>
            <li className="cursor-pointer hover:text-[#3d5a80]"><Link to="/Jobs">Jobs</Link></li>
            <li className="cursor-pointer hover:text-[#3d5a80]"><Link to="/Browse">Browse</Link></li>
          </ul>
          {
            !user ? (
              <div className='flex items-center gap-2'>
                <Link to="/login"><Button variant="outline">Login</Button></Link>
                <Link to="/signup"><Button className="bg-[#FF9D23] hover">Signup</Button></Link>
      
            </div>
  
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className='cursor-pointer'>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className='w-80'>
                  <div>

                    <div className='flex gap-4 space-y-2'>
                      <Avatar className='cursor-pointer'>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      </Avatar>
                      <div>
                        <h4 className='font-medium'>Santhu Chepuri</h4>
                        <p className='text-sm text-muted-foreground'>AI&DS Student</p>
                      </div>
                    </div>

                    <div className='flex flex-col my-2 text-gray-600'>
                      <div className='flex w-fit  items-center gap-2 cursor-pointer'>
                        <User2 />
                        <Button variant="link"><Link to="/Profile">View Profile</Link></Button>
                      </div>
                      <div className='flex w-fit items-center gap-2 cursor-pointer'>
                        <LogOut />
                        <Button variant="link"> Logout</Button>
                      </div>
                    </div>

                  </div>

                </PopoverContent>
              </Popover>

            )
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;


