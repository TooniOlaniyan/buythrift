import React from "react";
import Image from "next/image";
import { SearchProduct } from ".";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between py-2 px-4">
      <div>
        <Image src='/logo.svg' alt="logo" width={150} height={150}/>
      </div>
      <SearchProduct />
      <div className="flex items-center gap-8">
        <Image className="cursor-pointer object-contain" src='/Account.svg' alt="cart" width={25} height={25}/>
        <Image className="cursor-pointer object-contain" src='/Notification.svg' alt="cart" width={25} height={25}/>
        <Image className="cursor-pointer object-contain" src='/bag.svg' alt="cart" width={25} height={25}/>
      </div>
    </header>
  );
};

export default Header;
