"use client";

import Image from "next/image";

import { NavSheet } from "./nav-sheet";

export default function MobileNavbar() {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full justify-center">
      <div className="relative mt-5 flex w-5/6 flex-col items-center rounded-full border border-violet-600 bg-[#4E16B2]/40 px-2 py-2 backdrop-blur-lg md:hidden md:w-3/5">
        <div className="flex w-full items-center justify-between">
          <Image
            src={"/kh-logo.svg"}
            alt="Kh-logo"
            width={150}
            height={150}
            className="p-3"
          />

          <NavSheet />
        </div>
      </div>
    </div>
  );
}
