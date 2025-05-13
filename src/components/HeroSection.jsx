import React from 'react'

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you're using shadcn/ui for the button

const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-black font-bold">
          No.1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br />
          <span className="text-[#FF9D23]">Earn!!</span>
        </h1>
        <p>
          This website helps you to post and also search{" "}
          <span className="font-bold">
            freelance jobs, including non-technical jobs
          </span>
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 py-3 pl-3 pr-2 rounded-full items-center mx-auto">
          <input
            type="text"
            placeholder="Find what you want"
            className="border-none outline-none w-full bg-transparent"
          />
          <Button className="rounded-full p-4 bg-[#FF9D23] hover:bg-[#e68a00] text-white">
            <Search className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
