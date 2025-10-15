"use client";

import Logo from "@/icons/logo";
import NavigationBar from "@/ui/navigation-bar";

const Header = () => {
  return (
    <div className="sticky m-4 flex justify-between">
      <a href="/">
        <Logo className="size-24 fill-secondary" />
      </a>

      <NavigationBar />
    </div>
  );
};

export default Header;
