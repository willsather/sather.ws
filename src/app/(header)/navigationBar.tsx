"use client";

import Link from "next/link";
import React, { useState } from "react";

import menuLinks from "@/app/(header)/menuLinks";
import CloseIcon from "@/public/icons/close.svg";
import MenuIcon from "@/public/icons/menu.svg";

const NavigationBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex-col justify-between pt-2 md:flex-row">
      <div className="flex justify-end md:hidden">
        <button type="button" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <CloseIcon width={24} height={24} />
          ) : (
            <MenuIcon width={24} height={24} />
          )}
        </button>
      </div>

      <div className={mobileOpen ? "block md:hidden" : "hidden"}>
        {Object.entries(menuLinks).map(([text, link]) => (
          <div key={text} className="mt-3">
            <button
              type="button"
              className="hover:underline"
              onClick={() => setMobileOpen(false)}
            >
              <Link
                href={link}
                target="_self"
                className="text-right text-primary decoration-primary"
              >
                <p>{text}</p>
              </Link>
            </button>
          </div>
        ))}
      </div>

      {/*Desktop Navbar*/}
      <div className="hidden md:flex">
        {Object.entries(menuLinks).map(([text, link]) => (
          <button
            type="button"
            className="m-4 hover:underline"
            key={text}
            onClick={() => setMobileOpen(false)}
          >
            <Link
              href={link}
              target="_self"
              className="text-primary no-underline"
            >
              <p>{text}</p>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
