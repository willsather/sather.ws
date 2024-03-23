"use client";

import Image from "next/image";
import NavigationBar from "@/src/app/(header)/navigationBar";

const Header = () => {
  return (
    <div className="flex justify-between sticky m-4">
      <a href="/">
        <Image
          className=""
          src="/assets/logo.png"
          alt="Will Sather"
          width={100}
          height={100}
        />
      </a>

      <NavigationBar />
    </div>
  );
};

export default Header;
