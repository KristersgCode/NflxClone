import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/solid";

function FooterSignIn() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* SIGN IN FORM */}
        <div className="black-background-opacity border-t border-[gray] sm:border-none z-50 sm:min-h-[300px] w-full flex flex-col items-center">
          <div className="z-50 flex w-[100%] justify-center text-[gray]">
            {/* Relative container */}
            <div className=" relative w-[80%] items-center justify-center md:w-[60%] xl:w-[40%]">
              {/* Questions */}
              <div className="absolute  z-50 mt-[30px] w-[200px] ">
                <p>Questions? Contact us</p>
              </div>

              <ul className="mt-20 grid grid-cols-3 gap-4 text-[.80rem] font-light sm:grid-cols-3 md:grid-cols-4 xs:grid-cols-2">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
              <div className="absolute z-50 w-[200px]">
                <div className="flex flex-col">
                  <button className="mr-6 mt-8  flex h-12 w-32 items-center justify-center rounded-sm border border-zinc-700 stext-sm">
                    <GlobeAltIcon className="m-1 h-4 pr-3" />
                    English <ChevronDownIcon className="m-1 h-5" />
                  </button>
                  <p className="pt-6 text-xs">
                    Netflix clone for training purpose
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSignIn;
