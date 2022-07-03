import { ArrowDownIcon } from "@heroicons/react/solid";
import React, { useState, useCallback } from "react";

const useToggle = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};

export default function App() {
  const [isTextChanged, setIsTextChanged] = useToggle();
  const [isDropdownToggle, setIsDropdownToggle] = useToggle();

  return (
    <>
      <div className="relative">
        <button
          className="text-xs font-bold  text-white rounded"
          onClick={setIsDropdownToggle}
        >
          <ArrowDownIcon className="h-5" />
        </button>

        {isDropdownToggle ? (
          <div className="absolute w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5">
            <ul className="space-y-3 dark:text-white">
              <li className="font-medium">
                <a
                  href="#"
                  className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                >
                  <div className="mr-3"></div>
                  Account
                </a>
              </li>
              <li className="font-medium">
                <a
                  href="#"
                  className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                >
                  <div class="mr-3"></div>
                  Setting
                </a>
              </li>
              <hr className="dark:border-gray-700" />
              <li className="font-medium">
                <a
                  href="#"
                  className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                ></a>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
