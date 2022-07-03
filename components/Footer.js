import { ChevronDownIcon, GlobeAltIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer>
      <div className="bg-black-custom flex h-[33vh] min-h-[500px] w-full items-center ">
        <div className="mb-10 flex w-[100%] justify-center text-[gray]">
          {/* Relative container */}
          <div className="w-[80%] items-center justify-center md:w-[60%] xl:w-[40%]">
            {/* Questions */}
            <div className=" absolute mt-[-50px] w-[200px] ">
              <p>Questions? Contact us</p>
            </div>

            <ul className="grid grid-cols-3 gap-4 text-[.80rem] font-light sm:grid-cols-3 md:grid-cols-4 xs:grid-cols-2">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Ways to Watch</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Corporate Information</a>
              </li>
              <li>
                <a href="#">Speed Test</a>
              </li>
              <li>
                <a href="#">Only on Netflix</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Media Center</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Cookie Preferences</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Legal Notices</a>
              </li>
            </ul>
            <div className=" absolute w-[200px]">
              <div className="flex flex-col">
                <button className="mr-6 mt-8  flex h-12 w-32 items-center justify-center rounded-sm border border-zinc-700 text-sm">
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
    </footer>
  );
}

export default Footer;
