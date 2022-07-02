import BgImage from "../img/mainPageBg.jpeg";
import Image from "next/image";
import SignIn from "../components/signin/SignIn";
import NetflixLogo from "../img/logo.png";
import Link from "next/link";
import FooterCopy from "../components/signin/FooterSignIn";

function Signin() {
  return (
    <div>
      <div className="relative sm:h-full h-[100vh] w-[100vw]">
        <div className="black-overlay absolute z-50 h-full w-full"></div>
        <Image
          src={BgImage}
          layout="fill"
          objectFit="cover"
          objectPosition="left"
        />
        <div className="absolute h-full w-full">
          <div className="relative mt-[-10px] z-[60] ml-5 h-[110px] w-[200px]">
            <Link href="/">
              <a>
                <Image
                  src={NetflixLogo}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="left"
                />
              </a>
            </Link>
          </div>
        </div>

        <SignIn />

        <div className=" w-full sm:bottom-0">
          <FooterCopy />
        </div>
      </div>
    </div>
  );
}

export default Signin;
