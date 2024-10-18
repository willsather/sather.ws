"use client";

import NavigationBar from "@/app/(header)/navigationBar";
import Logo from "@/icons/Logo";

const Header = () => {
  return (
    <div className="sticky m-4 flex justify-between">
      <a href="/">
        <Logo width={100} height={100} />
      </a>

      <NavigationBar />
    </div>
  );
};

export default Header;
