"use client";

import Logo from "@/icons/logo";
import NavigationBar from "@/ui/navigation-bar";

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
