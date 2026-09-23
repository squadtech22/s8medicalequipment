"use client";

import Image from "next/image";
import Link from "next/link";
import { closeDialog, toggleDialog } from "../utils/DialogHelper";
import PopupForm from "./_popup_form";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Top Section - Newsletter and Social */}
      <div className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center py-4 gap-4 border-b border-[#65AD47]">
        <form
          action=""
          method="POST"
          className="w-full md:w-auto flex bg-white rounded-md border-2 border-[#65AD47]"
        >
          <input
            type="email"
            name="email"
            id="email"
            className="w-full md:w-[200px] p-2 focus:outline-none"
            placeholder="Enter Your Email"
            required
          />
          <button
            type="submit"
            className="w-[50px] flex items-center justify-center bg-[#65AD47] text-white"
            aria-label="Subscribe"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
          </button>
        </form>

        <div className="flex items-center gap-1">
          <Link
            href="https://www.linkedin.com/company/s8squadmedical/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <div className="p-2 hover:bg-gray-100 rounded-full transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#65AD47"
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
            aria-label="Facebook"
          >
            <div className="p-2 hover:bg-gray-100 rounded-full transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#65AD47"
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

      {/* Main Footer Content */}
      <div className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Logo and Description */}
        <div className="p-2">
          <div className="mb-4">
            <Image
              src="/images/logo.png"
              width={200}
              height={50}
              alt="company logo s8-medical-equipment"
              className="w-40 lg:w-48"
            />
          </div>
          <p className="text-sm">
            Devoted to improving healthcare using cutting-edge, dependable
            medical technologies. We empower experts globally.
          </p>
        </div>

        {/* Services */}
        <div className="p-2">
          <h3 className="text-xl md:text-2xl font-bold tracking-wide">
            Services
          </h3>
          <hr className="border border-[#65AD47] bg-[#65AD47] rounded-lg h-1 my-2 w-3/4" />
          <ul className="space-y-2">
            <li className="hover:text-[#65AD47] transition">
              <Link href="/services#dme">DME Equipments</Link>
            </li>
            <li className="hover:text-[#65AD47] transition">
              <Link href="/services#caregivers">Caregivers</Link>
            </li>
          </ul>
        </div>

        {/* Head Office */}
        <div className="p-2">
          <h3 className="text-xl md:text-2xl font-bold tracking-wide">
            Head Office
          </h3>
          <hr className="border border-[#65AD47] bg-[#65AD47] rounded-lg h-1 my-2 w-3/4" />
          <address className="not-italic mb-4">
            3155 Kearney St Suite # 170
            <br />
            Fremont, CA 94538
          </address>
          <div className="text-sm space-y-1">
            <p>
              <b>Mon-Thu:</b> 9:00 – 15:00
            </p>
            <p>
              <b>Fri:</b> 9:00 – 15:00
            </p>
            <p>
              <b>Sat:</b> 9:00 – 15:00
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="p-2">
          <h3 className="text-xl md:text-2xl font-bold tracking-wide">
            Quick Links
          </h3>
          <hr className="border border-[#65AD47] bg-[#65AD47] rounded-lg h-1 my-2 w-3/4" />
          <ul className="space-y-2">
            <li className="hover:text-[#65AD47] transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#65AD47] transition">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-[#65AD47] transition">
              <Link href="/products">Products</Link>
            </li>
            <li className="hover:text-[#65AD47] transition">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="hover:text-[#65AD47] transition">
              <button
                onClick={() => toggleDialog("popup")}
                className="cursor-pointer"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="p-4 text-center text-white bg-[#65AD47]">
        <p className="text-sm">
          Copyright <b>©</b> {new Date().getFullYear()} S8Medical Equipment LLC.
          All Rights Reserved.
        </p>
      </div>
      <PopupForm id="popup" onClose={() => closeDialog("popup")} />
    </footer>
  );
}
