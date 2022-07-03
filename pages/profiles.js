import NetflixLogo from "../img/logo.png";
import Image from "next/image";
import Link from "next/link";
import Avatar1 from "../img/avatar1.jpg";

function Profiles() {
  return (
    <div className="flex h-[100vh] w-[100vw] items-center justify-center bg-black">
      <div className="\ flex h-[50%] w-[100vw] flex-col items-center justify-center">
        {/* Logo container */}
        <div className="absolute h-full w-full">
          <div className="relative z-[60] ml-5 h-[10%] w-[15vw] md:mt-2 md:h-[80px] md:w-[120px]">
            <Link href="/">
              <a>
                <Image
                  src={NetflixLogo}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                  alt="netflix logo"
                />
              </a>
            </Link>
          </div>
        </div>
        {/* Profile container */}
        <h1>Whose watching?</h1>
        <div className="z-50 flex flex-row gap-x-3">
          <div className="relative h-[100px] w-[100px] rounded-md hover:border-2 hover:border-gray-200">
            <Link href="/moviepage">
              <a>
                <Image
                  src={Avatar1}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="left"
                  className="rounded-md"
                  alt="Avatar image"
                />
              </a>
            </Link>
          </div>
        </div>
        <p className="text-white font-normal text-xl">You</p>
      </div>
    </div>
  );
}

export default Profiles;
