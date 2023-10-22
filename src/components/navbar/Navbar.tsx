import React from "react";
import { Link } from "react-router-dom";
import {
  IoPaperPlaneOutline,
  IoDocumentTextOutline,
  IoClose,
  IoMenu,
} from "react-icons/io5";
import { Disclosure } from "@headlessui/react";

interface NavbarProps {
  defaultClass?: string;
}

const Navbar: React.FC<NavbarProps> = ({ defaultClass }) => {
  return (
    <Disclosure as="nav" className="bg-[#F4F4F5]">
      {({ open }) => (
        <>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/" className=" text-base font-medium">
                    Seungmi Na
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center space-x-1">
                  <button
                    type="button"
                    className="relative rounded-full p-2 text-stone-900 hove:bg-gray-200 hover:text-stone-200 focus-outline-none focus:ring-2 hover:bg-stone-800"
                  >
                    <span className="absloute -inset-1.5" />
                    <span className="sr-only">View Resume</span>
                    <IoDocumentTextOutline
                      aria-hidden="true"
                      className="w-5 h-5"
                    />
                  </button>
                  <button
                    type="button"
                    className="relative rounded-full p-2 text-stone-900 hove:bg-gray-200 hover:text-stone-200 focus-outline-none focus:ring-2 hover:bg-stone-800"
                  >
                    <span className="absloute -inset-1.5" />
                    <span className="sr-only">contact</span>
                    <IoPaperPlaneOutline
                      aria-hidden="true"
                      className="w-5 h-5"
                    />
                  </button>
                </div>
              </div>
              {/* Mobile menu button */}
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700">
                  <span className="ablsolute -inset-0.5">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <IoClose
                        // aria-hidden="true"
                        className="w-5 h-5"
                      />
                    ) : (
                      <IoMenu
                        // aria-hidden="true"
                        className="w-5 h-5"
                      />
                    )}
                  </span>
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden bg-white">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="/"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200 hover:text-gray-700"
              >
                Resume
              </Link>
              <Link
                to="/"
                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-200 hover:text-gray-700"
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
