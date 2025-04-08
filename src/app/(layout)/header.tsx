"use client";

import NavigationBar from "@/app/(layout)/navigation-bar";
import Logo from "@/icons/logo";

const Header = () => {
  return (
    <div className="sticky m-4 flex justify-between">
      <a href="/">
        <Logo width="100" height={100} />
      </a>

      <NavigationBar />
    </div>
  );
};

export default Header;
