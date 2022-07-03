import Image from "next/image";
import NetflixLogo from "../img/logo.png";
import { GlobeAltIcon, ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <div className="my-auto  flex h-16 cursor-pointer items-center justify-between">
        {/* Logo DIV */}
        <div className="relative z-50 mt-7 ml-8 h-20 w-32 items-center md:h-28  md:w-40 xl:h-40 xl:w-44">
          <Image
            src={NetflixLogo}
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="Netflix logo"
          />
        </div>

        {/* BUTTON DIV */}
        <div className="z-50 mt-7 flex">
          <button className=" w-26 mr-6 flex h-9 items-center rounded-sm border border-zinc-400 text-sm font-light">
            <GlobeAltIcon className="m-1 h-4" />
            English
            <ChevronDownIcon className="m-1 h-5" />
          </button>

          <Link href="/signin">
            <button className="cursor-pointer red mr-10 h-9 w-20 rounded-sm text-sm font-light">
              <a>Sign in</a>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
