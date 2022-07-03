import Link from "next/link";

function SignIn() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* SIGN IN FORM */}
        <div className="black-background-opacity sm:mt-20 sm:mb-20 z-50 flex h-full  w-full flex-col items-center rounded-md sm:h-[660px] sm:w-[430px]">
          <form className="mt-10 flex h-[500px] mb-20 w-full flex-col justify-center px-10 sm:w-[320px] sm:px-0 ">
            <h1 className="mb-7 font-medium">Sign in</h1>
            <div className="flex w-full flex-col gap-5">
              <input
                placeholder="Leave blank"
                className="details-color h-12 rounded-md border-none pl-5 font-light placeholder-[gray]"
                type="text"
              />
              <input
                placeholder="Leave blank"
                className="details-color h-12 rounded-md border-none pl-5 font-light placeholder-[gray]"
                type="password"
              />
              <Link href="/profiles">
                <button className="red mt-5 h-12 rounded-md font-normal">
                  Sign in
                </button>
              </Link>
              {/* Checkbox */}
              <div className=" mb-6 flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded-sm border-none bg-[gray] text-gray-500 focus:ring-black dark:focus:ring-black "
                    required
                  />
                </div>

                <div className="flex w-full justify-between text-gray-300">
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-normal "
                  >
                    Remember me
                  </label>
                  <a className="text-sm font-light" href="">
                    Need help?
                  </a>
                </div>
              </div>
              {/* Bottom container */}
              <div className="mt-10 text-[gray]">
                <div className="flex">
                  <p>New to Netflix?</p>&nbsp;
                  <a className="text-white">Sign up now</a>
                </div>
                <div>
                  <p className="text-xs">
                    This page is protected by Google reCAPTCHA to ensure you are
                    not a bot.
                    <a href="" className="text-blue-600">
                      Learn more.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
