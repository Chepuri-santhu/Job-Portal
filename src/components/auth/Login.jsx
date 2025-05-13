import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';
import store from '@/redux/store';
import { Loader2 } from 'lucide-react';

const USER_API_END_POINT = import.meta.env.VITE_API_URL;

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const dispatch = useDispatch();
  const { loading } = useSelector(store => store.auth);
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/user/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
          <h1 className='font-bold text-xl mb-5'>Login</h1>
          <div className='my-2'>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Enter Your Email"
            />
          </div>
          <div className='my-2'>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter Your Password"
            />
          </div>
          <div className='flex item-center justify-between'>
            <RadioGroup className='flex items-ceter gap-4 my-5'>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  onChange={changeEventHandler}
                  value="student"
                  checked={input.role === "student"}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  onChange={changeEventHandler}
                  checked={input.role === "recruiter"}
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="w-full my-4 flex items-center justify-center gap-2 bg-gray-500 text-white cursor-not-allowed" disabled>
              <Loader2 className="h-5 w-5 animate-spin" />
              Please wait...
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4 bg-[#FF9D23] hover:bg-[#e68a00] text-white font-semibold py-2 rounded-lg shadow-md transition duration-300">
              Login
            </Button>
          )}
          <span className='text-sm'>Don't have an account?<Link to="/signup" className="text-blue-700"> Signup</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login;