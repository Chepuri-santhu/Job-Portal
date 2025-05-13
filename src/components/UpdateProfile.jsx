import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";
import React from "react";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea"; // Assuming you have a Textarea component
import { useSelector } from "react-redux";


export const UpdateProfle = ({ open, setOpen }) => {

  const[loading,setLoading]=useState(false);
  const {user}=useSelector(store=>store.auth);
  const [formData, setFormData] = useState({
    name: user?.fullName || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.Profile?.bio || "",
    skills: user?.Profile?.skills?.join(", ") || "", // Join skills array into comma separated string
    resume: null,
  });

  
  
 
  
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setOpen(false);
  };
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-xl p-8 rounded-xl shadow-lg border border-gray-200 bg-white" onInteractOutside={()=>setOpen(false)}>
          <DialogHeader className="flex justify-between items-center mb-6">
            <DialogTitle className="text-2xl font-semibold text-gray-800">
              Edit Your Profile
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onClick={() => setOpen(false)}
            >
              <X className="w-5 h-5 text-gray-600" />
            </Button>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              />
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              />
            </div>

            <div>
              <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              />
            </div>

            <div>
              <Label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                Short Bio
              </Label>
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows={3}
                required
                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              />
            </div>

            <div>
              <Label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
                Skills & Expertise
              </Label>
              <Input
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="e.g., React, Node.js, Tailwind CSS"
                required
                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              />
            </div>

            <div>
              <Label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Resume (PDF, DOC, DOCX)
              </Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
              />
            </div>

            <DialogFooter className="mt-8 flex justify-end gap-3">
              {loading ? (
  <Button 
    className="w-full my-4 flex items-center justify-center gap-2 bg-gray-500 text-white cursor-not-allowed"
    disabled
  >
    <Loader2 className="h-5 w-5 animate-spin" />
    Please wait...
  </Button>
) : (<Button type="submit" className="w-full my-4 bg-[#FF9D23]">Update</Button>
)}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};