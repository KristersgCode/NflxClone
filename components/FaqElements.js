import { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";

function FaqElements({ answer, question }) {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="mt-2 w-full  sm:w-[80%] md:w-[80%] lg:w-[800px]">
      <details className="details-color">
        <summary className="details-color flex w-[100%]  justify-between">
          <div
            onClick={handleToggle}
            className="pl-5 flex w-full h-14 cursor-pointer items-center justify-between lg:h-[70px]"
          >
            <p className="font-light sm:text-xl lg:text-2xl">{question}</p>

            <PlusIcon className={isActive ? "icon-class" : "icon-class2"} />
          </div>
        </summary>
        <p className="border-t-2 border-black p-5 font-light lg:text-2xl">
          {answer}
        </p>
      </details>
    </div>
  );
}

export default FaqElements;
