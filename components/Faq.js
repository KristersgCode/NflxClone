import FaqElements from "../components/FaqElements";
import {
  QuestFive,
  QuestFour,
  QuestOne,
  QuestSeven,
  QuestSix,
  QuestThree,
  QuestTwo,
} from "../components/Data/FaqData";
import { ChevronRightIcon } from "@heroicons/react/solid";
function Faq() {
  return (
    //Section container
    <>
      <div className="bg-black-custom flex h-[100%] w-[100%] flex-col items-center justify-center border-b-8 border-zinc-800">
        {/* Container for text and details */}
        <div className="flex h-[80%] w-[100%] flex-col items-center">
          <h1 className="info-section-h1 mt-14 mb-4">
            Frequently Asked Questions
          </h1>

          <FaqElements {...QuestOne} />
          <FaqElements {...QuestTwo} />
          <FaqElements {...QuestThree} />
          <FaqElements {...QuestFour} />
          <FaqElements {...QuestFive} />
          <FaqElements {...QuestSix} />
          <FaqElements {...QuestSeven} />

          {/* CONTAINER FOR HEADING */}
          <div className="mt-5 flex w-[40vh] min-w-[300px] flex-col items-center gap-5  text-center md:w-[50vh] xl:w-[60vh] xs:w-[80%]">
            <h3 className="text-lg font-light xs:text-lg">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
          </div>

          {/* Input for email */}
          <div className="mt-4 flex w-[70vw] sm:min-w-[600px] flex-col items-center lg:w-[60vh] lg:flex-row xs:w-[80%]">
            <input
              className="text-gray-500 h-12 w-full pl-3 md:h-14 lg:mb-14 xl:h-16"
              placeholder="Email adress"
              type="text"
            />

            <button
              onClick={() =>
                alert(
                  "Please press sign in button on top right corner of the website"
                )
              }
              className="red mb-2 lg:mb-14 mt-4 flex h-10 w-36 items-center rounded-sm bg-slate-100 pl-5 font-light lg:mt-0 lg:h-14 lg:w-72 lg:pl-8 lg:text-2xl xl:h-16 xl:w-80 xl:pl-10"
            >
              Get Started <ChevronRightIcon className="h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
