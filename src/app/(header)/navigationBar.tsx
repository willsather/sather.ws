"use client";

import { Typography } from "@mui/material";
import Link from "next/link";
import menuLinks from "@/src/app/(header)/menuLinks";
import React, { useState } from "react";
import MenuIcon from "@/public/icons/menu.svg";
import CloseIcon from "@/public/icons/close.svg";

const NavigationBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex-col md:flex-row justify-between pt-2">
      <div className="flex md:hidden justify-end">
        <div onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <CloseIcon width={24} height={24} />
          ) : (
            <MenuIcon width={24} height={24} />
          )}
        </div>
      </div>

      <div className={mobileOpen ? "block md:hidden" : "hidden"}>
        {Object.entries(menuLinks).map(([text, link]) => (
          <div key={text} className="mt-3">
            <div
              className="hover:underline"
              onClick={() => setMobileOpen(false)}
            >
              <Link
                href={link}
                target="_self"
                className="text-primary decoration-primary"
                style={{
                  color: "black",
                  textDecoration: "none",
                  textAlign: "right",
                }}
              >
                <Typography variant="body1">{text}</Typography>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/*Desktop Navbar*/}
      <div className="hidden md:flex">
        {Object.entries(menuLinks).map(([text, link]) => (
          <div
            className="hover:underline m-4"
            key={text}
            onClick={() => setMobileOpen(false)}
          >
            <Link
              href={link}
              target="_self"
              className="text-primary no-underline"
            >
              <Typography variant="body1">{text}</Typography>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationBar;
