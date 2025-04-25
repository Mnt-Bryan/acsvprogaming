
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ReviewFilters = () => {
  return (
    <section className="py-8 bg-gaming-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input 
              placeholder="Search games..." 
              className="pl-10 bg-black/30 border-gaming-black text-white" 
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-black/30 border-gaming-black text-white">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray text-white border-gaming-black">
                <SelectItem value="all">All Platforms</SelectItem>
                <SelectItem value="ps5">PlayStation 5</SelectItem>
                <SelectItem value="xbox">Xbox Series X/S</SelectItem>
                <SelectItem value="pc">PC</SelectItem>
                <SelectItem value="switch">Nintendo Switch</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-[180px] bg-black/30 border-gaming-black text-white">
                <SelectValue placeholder="Genre" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray text-white border-gaming-black">
                <SelectItem value="all">All Genres</SelectItem>
                <SelectItem value="action">Action</SelectItem>
                <SelectItem value="rpg">RPG</SelectItem>
                <SelectItem value="fps">FPS</SelectItem>
                <SelectItem value="adventure">Adventure</SelectItem>
                <SelectItem value="strategy">Strategy</SelectItem>
              </SelectContent>
            </Select>
            
            <Select defaultValue="recent">
              <SelectTrigger className="w-full sm:w-[180px] bg-black/30 border-gaming-black text-white">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="bg-gaming-gray text-white border-gaming-black">
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="rating-high">Highest Rated</SelectItem>
                <SelectItem value="rating-low">Lowest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewFilters;
