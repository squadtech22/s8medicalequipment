"use client";

import Image from "next/image";
import { PrimaryButton } from "./_button";
import Link from "next/link";
import PopupForm from "./_popup_form";
import { closeDialog, toggleDialog } from "../utils/DialogHelper";

export default function Header() {
  return (
    <>
      <section className="lg:absolute sm:relative w-full top-0 left-0 z-100 lg:bg-black/10">
        {/* Top info bar */}
        <div className="bg-[#65AD47] p-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              <div className="flex flex-col md:flex-row md:items-center md:divide-x-2 w-full md:w-auto">
                <div className="text-white text-xs md:text-sm p-1 md:p-2 text-center md:text-left">
                  <p className="flex flex-wrap justify-center md:justify-start gap-1">
                    <b>Location:</b> 3155 Kearney St Suite # 170 Fremont, CA
                    94538
                  </p>
                </div>
                <div className="text-white text-xs md:text-sm p-1 md:p-2 flex flex-col md:flex-row justify-between gap-2 md:gap-4 md:border-r-2">
                  <p className="flex justify-center md:justify-start gap-1">
                    <b>Contact us:</b> +1 (510)-573-1931
                  </p>
                  <p className="flex justify-center md:justify-start gap-1">
                    <b>Complaint Number:</b> +1 (510) 925-2257
                  </p>
                  <p className="flex justify-center md:justify-start gap-1">
                    <b>Email:</b> info@s8medicalequipmentllc.com
                  </p>
                </div>
              </div>

              {/* Social icons */}
              <div className="w-[10%] flex items-center gap-1">
                <Link
                  href="https://www.linkedin.com/company/s8squadmedical/"
                  target="_blank"
                >
                  <div className="p-1 md:p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="https://www.facebook.com/s8squadequipment"
                  target="_blank"
                >
                  <div className="p-1 md:p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main header with logo and navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="flex flex-col md:flex-row w-full justify-between items-center py-4 lg:text-white sm:text-black">
            {/* Logo */}
            <Link href="/" className="mb-4 md:mb-0">
              <Image
                src="/images/logo.png"
                width={200}
                height={50}
                alt="company logo s8-medical-equipment"
                className="w-40 md:w-48 lg:w-52"
              />
            </Link>

            {/* Navigation */}
            <nav className="w-full md:w-auto">
              <ul className="flex flex-wrap justify-center gap-1 md:gap-2 lg:gap-5 items-center">
                <Link href="/">
                  <li className="border-b-2 border-transparent hover:border-[#65AD47] px-2 py-1 cursor-pointer transition transition-ease-out text-sm md:text-base">
                    Home
                  </li>
                </Link>
                <Link href="/products">
                  <li className="border-b-2 border-transparent hover:border-[#65AD47] px-2 py-1 cursor-pointer transition transition-ease-out text-sm md:text-base">
                    Products
                  </li>
                </Link>
                <Link href="/services">
                  <li className="border-b-2 border-transparent hover:border-[#65AD47] px-2 py-1 cursor-pointer transition transition-ease-out text-sm md:text-base">
                    Services
                  </li>
                </Link>
                <Link href="/about-us">
                  <li className="border-b-2 border-transparent hover:border-[#65AD47] px-2 py-1 cursor-pointer transition transition-ease-out text-sm md:text-base">
                    About Us
                  </li>
                </Link>
                <li className="mt-2 md:mt-0">
                  <PrimaryButton
                    className="text-sm md:text-base px-3 py-1 md:px-4 md:py-2"
                    onClick={() => toggleDialog("popup")}
                  >
                    Contact Us
                  </PrimaryButton>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </section>
      <PopupForm id="popup" onClose={() => closeDialog("popup")} />
    </>
  );
}
