import Link from "next/link";
import { useTheme } from 'next-themes'
import Image from 'next/image'
import {useEffect, useState } from 'react'
import SearchBar from "../components/SearchBar";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
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
    <div className="base-container pt-4 pb-4">
      <nav className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white">
          <Link href={"/"}>
            <a className="font-semibold text-xl tracking-tight text-black dark:text-white mr-12">Nóng quá nóng</a>
          </Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href={"/posts"}>
              <a className="block menu-text lg:inline-block lg:mt-0 mr-4">
                Posts
              </a>
            </Link>

            <Link href={"/tils"}>
              <a className="block menu-text lg:inline-block lg:mt-0 mr-4">
                Tils
              </a>
            </Link>

            <Link href={"/talks"}>
              <a className="block menu-text lg:inline-block lg:mt-0">
                Talks
              </a>
            </Link>
          </div>
          <div className="flex items-center">
            <SearchBar className="mr-4" />

            <DarkModeToggle/>
          </div>
        </div>
      </nav>
    </div>
  );
}
