import React from 'react'
import { Input } from "@/components/ui/input";
import Image from 'next/image';


const SearchProduct = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input className='' type="text" placeholder="Search Products..." />
      <Image src="/search.svg" alt="search" width={25} height={25} />
    </div>
  );
}

export default SearchProduct