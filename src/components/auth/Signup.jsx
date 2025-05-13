import React, { useState } from 'react'
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { USER_API_END_POINT } from '@/utils/const';
import { toast } from 'sonner';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';



const Signup = () => {
  const [input,setInput]=useState({
    fullName:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""
  });
  const {loading}=useSelector(store=>store.auth)
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const changeEventHandler=(e)=>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  const changeFileHandler=(e)=>{
    setInput({...input,file:e.target.files?.[0]});
  }
  const submitHandler=async (e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("fullName",input.fullName);
    formData.append("email",input.email);
    formData.append("phoneNumber",input.phoneNumber);
    formData.append("password",input.password);
    formData.append("role",input.role);
      if(input.file){
        formData.append("file",input.file);
      }
    
    try {
      dispatch(setLoading(true));
      const res= await axios.post(`${USER_API_END_POINT}/register`,formData,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        withCredentials:true,
      });
      if(res.data.success){
        navigate("/login");
        console.log("succesfull");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }finally{
      dispatch(setLoading(false));
    }
  }
  return (
    <div>
      <Navbar />

      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Signup</h1>
          <div className='my-2'>
            <Label>User Name</Label>
            <Input
              type="text"
              placeholder="Enter Your Name" 
              name="fullName"
              value={input.fullName} 
              onChange={changeEventHandler}/>

          </div>
          <div className='my-2'>
            <Label>email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter Your email" />

          </div>
          <div className='my-2'>
            <Label>Phone Number</Label>
            <Input
              type="tel"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="Enter Your Phone number" />

          </div>
          <div className='my-2'>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter Your Password" />

          </div>
          <div className='flex item-center justify-between'>
            <RadioGroup className='flex items-ceter gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input
                type="radio"
                name="role"
                value="student"
                onChange={changeEventHandler}
                checked={input.role==="student"}
                className="cursor-pointer"
                />
        
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
              <Input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role==="recruiter"}
                onChange={changeEventHandler}
                className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          <div className='flex items-center gap-2'>
            <Label>Profile</Label>
            <Input
            accept="image/*"
            type="file"
            name="file"
            onChange={changeFileHandler}
            placeholder="Upload Your Profile"
            className="cursor-pointer"
             />
          </div>
          {loading ? (
  <Button 
    className="w-full my-4 flex items-center justify-center gap-2 bg-gray-500 text-white cursor-not-allowed"
    disabled
  >
    <Loader2 className="h-5 w-5 animate-spin" />
    Please wait...
  </Button>
) : (<Button type="submit" className="w-full my-4 bg-[#FF9D23]">Signup</Button>
)}
          
        <span className='text-sm'>Already have an account?<Link to="/login" className="text-blue-700"> Login</Link></span>
        </form>
      </div>

    </div>
  )
}

export default Signup;