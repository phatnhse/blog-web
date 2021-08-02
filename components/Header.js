import Link from "next/link";
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import SearchBar from "../components/SearchBar";
import DarkModeToggle from "./DarkModeToggle";
import { Transition } from "@headlessui/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState("/dark-mode.svg")
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    if (theme == 'dark') {
      setSrc('/dark-mode.svg')
    } else {
      setSrc('/light-mode.svg')
    }
  }, [theme])

  return (
    <div>
      <nav className="base-container mt-8">
        <div className="mx-auto">
          <div className="flex items-center justify-between h-16">
            <Link href={"/"}>
              <a className="font-semibold text-xl tracking-tight text-black">Nóng quá nóng</a>
            </Link>
            <div className="hidden md:flex">
              <Link href={"/posts"}>
                <a className="block menu-text lg:inline-block lg:mt-0 mr-4">
                  Posts
                </a>
              </Link>

              <Link href={"/today-i-learn"}>
                <a className="block menu-text lg:inline-block lg:mt-0 mr-4">
                  TIL
                </a>
              </Link>

              <Link href={"/talks"}>
                <a className="block menu-text lg:inline-block lg:mt-0">
                  Talks
                </a>
              </Link>
              <span className="ml-5">
                {/* <SearchBar className="mr-4" /> */}

                <DarkModeToggle />
              </span>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href={"/posts"}>
                  <a className="block menu-text lg:inline-block lg:mt-0 mr-4">
                    Posts
                  </a>
                </Link>

                <Link href={"/today-i-learn"}>
                  <a className="block menu-text lg:inline-block lg:mt-0 mr-4">
                    TIL
                  </a>
                </Link>

                <Link href={"/talks"}>
                  <a className="block menu-text lg:inline-block lg:mt-0">
                    Talks
                  </a>
                </Link>
                <div className="flex items-center">
                  {/* <SearchBar className="mr-4" /> */}

                  <DarkModeToggle />
                </div>
              </div>

            </div>
          )}
        </Transition>
      </nav>
    </div >
  );
}

// export default function Header() {
//   const [src, setSrc] = useState("/dark-mode.svg")
//   const { theme, setTheme } = useTheme()
//   useEffect(() => {
//     if (theme == 'dark') {
//       setSrc('/dark-mode.svg')
//     } else {
//       setSrc('/light-mode.svg')
//     }
//   }, [theme])

//   return (
//     <div className="base-container mt-8 pt-4 pb-4">
//       <nav className="flex items-center justify-between flex-wrap">
//         <div className="flex items-center flex-shrink-0 text-white">
//           <Link href={"/"}>
//             <a className="font-semibold text-xl tracking-tight text-black mr-12">Nóng quá nóng</a>
//           </Link>
//         </div>


//         <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//           <div className="text-sm lg:flex-grow">
//             <Link href={"/posts"}>
//               <a className="block menu-text lg:inline-block lg:mt-0 mr-4">
//                 Posts
//               </a>
//             </Link>

//             <Link href={"/today-i-learn"}>
//               <a className="block menu-text lg:inline-block lg:mt-0 mr-4">
//                 TIL
//               </a>
//             </Link>


//         </div>
//       </nav>
//     </div>
//   );
// }
