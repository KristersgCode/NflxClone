import React, { useState, useEffect } from "react";
import Image from "next/image";
import NetflixLogo from "../../img/logo.png";
import Avatar1 from "../../img/avatar1.jpg";
import Link from "next/link";
import { BellIcon, CheckIcon, SearchIcon } from "@heroicons/react/solid";
import Dropdown from "./Dropdown";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-[999] sticky transit top-0 flex h-16 items-center ${
        isScrolled && "bg-black"
      } `}
    >
      {/* Logo DIV */}
      <div className="relative z-50  ml-8 h-20 w-32 md:h-28  md:w-40 xl:h-40 xl:w-44 ">
        <Link href="/">
          <Image
            src={NetflixLogo}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="Netflix logo"
          />
        </Link>
      </div>
      <div className="pl-5 justify-end flex w-full">
        <div className="flex gap-x-4 items-center">
          <Link href="/">
            <button className="red h-9 w-20 rounded-sm text-sm font-light">
              <a>Sign out</a>
            </button>
          </Link>
          {/* BUTTON DIV */}
          <div className="relative mr-5 flex float-right h-8 w-8 ">
            <Image
              src={Avatar1}
              layout="fill"
              objectFit="cover"
              objectPosition="left"
              className="rounded-md"
              alt="Avatar profile"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
