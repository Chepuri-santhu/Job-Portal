import React from 'react';
import { Badge } from './ui/badge';

export const Appliedjobs = () => {
    return (
        <div className="bg-white border rounded-2xl shadow-sm p-6 mb-6">
            {/* Company Info */}
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h1 className="text-xl font-semibold text-gray-800">Amazon</h1>
                    <p className="text-sm text-gray-500">India</p>
                </div>

                {/* Job Status */}
                <div className="flex flex-col items-end">
                    <Badge className="bg-yellow-100 text-yellow-800 font-medium px-3 py-1 rounded-full" variant="ghost">
                       Selected
                    </Badge>
                    <span className="text-xs text-gray-500 mt-2"> Applied On:Feb 15, 2025</span>
                </div>
            </div>

            {/* Role and Description */}
            <div className="mt-2">
                <h2 className="text-lg font-bold text-gray-900 mb-1">Front End Developer</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                   Lorem ipsum dolor sit amet.
                </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-3 mt-4">
                <Badge className="bg-blue-50 text-blue-700 font-semibold px-4 py-1 rounded-full" variant="ghost">
                    3 Positions
                </Badge>
                <Badge className="bg-red-50 text-[#C70039] font-semibold px-4 py-1 rounded-full" variant="ghost">
                    Part Time
                </Badge>
            </div>
        </div>
    );
};
