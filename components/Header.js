import { ChevronRightIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="relative z-50 flex h-[70vh] min-h-[500px] items-center border-b-8 border-zinc-800">
      <div className="flex w-[100vw] flex-col items-center ">
        {/* CONTAINER FOR HEADING */}
        <div className="flex w-[40vw] min-w-[400px] flex-col items-center gap-5 text-center md:w-[50vh] xl:w-[70vh] xs:w-[80%] xs:min-w-[200px]">
          <h2 className="text-5xl font-medium xl:text-[4rem] xs:text-3xl">
            Unlimited movies, TV shows, and more.
          </h2>
          <h2 className="text-2xl font-light xs:text-lg">
            Watch anywhere. Cancel anytime.
          </h2>

          <h3 className="text-lg font-light xs:text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
        </div>

        {/* CONTAINER FOR INPUT AND BUTTON */}
        <div className="mt-4 flex w-[48vh] sm:min-w-[600px] flex-col items-center lg:w-[60vh] lg:flex-row xs:w-[80%]">
          <input
            className="h-12 w-[80%] text-gray-500 pl-3 md:h-14 xl:h-16"
            placeholder="Email adress"
            type="text"
            required
          />

          <button className="red lg: mt-4 flex h-10 w-36 items-center justify-center rounded-sm bg-slate-100 font-light lg:mt-0 lg:h-14 lg:w-72 lg:text-2xl xl:h-16 xl:w-80">
            Get Started <ChevronRightIcon className="h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
