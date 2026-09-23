"use client";

import Image from "next/image";
import { PrimaryButton, SecondaryButton } from "../components/_button";
import Link from "next/link";
import { toggleDialog } from "../utils/DialogHelper";

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="flex relative h-screen">
        <Image
          src="/images/services-hero.jpeg"
          className="absolute top-0 left-0 z-0 object-cover"
          fill
          priority
          alt="Medical equipment services hero image"
        />
        <div className="flex flex-col gap-4 bg-black/50 z-10 w-full h-full items-center justify-center text-white text-center px-4 md:px-0 pt-20 md:pt-28 select-none">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide">
            Comprehensive Medical Solutions
          </h1>
          <p className="w-full md:w-[80%] mx-auto text-sm md:text-base">
            At S8 Medical Equipments, we offer complete healthcare solutions
            rather than simply equipment supply. We are your go-to source for
            high-quality service, from equipment setup and consulting to
            training, upkeep, and post-purchase assistance. We guarantee smooth
            integration and dependable performance at every stage, whether for
            clinics, hospitals, or home care agencies.
          </p>
          <Link href="/about-us">
            <SecondaryButton className="px-8 md:px-12 mt-4">
              Learn More
            </SecondaryButton>
          </Link>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto my-8">
        <div className="flex flex-col md:flex-row border-4 border-[#65AD47] bg-white rounded-lg overflow-hidden">
          {/* Opening Hours */}
          <div className="flex flex-col gap-4 w-full md:w-1/3 p-4 border-b md:border-b-0 md:border-r-2 border-[#65AD47]">
            <h1 className="text-[#65AD47] font-bold text-xl md:text-2xl">
              Opening Hours
            </h1>
            <ul className="divide-y-2 divide-[#65AD47]/50">
              <li className="flex items-center justify-between font-bold py-3">
                <p>Monday - Friday</p>
                <p>8.00-18.00</p>
              </li>
              <li className="flex items-center justify-between font-bold py-3">
                <p>Saturday</p>
                <p>9.00-17.00</p>
              </li>
              <li className="flex items-center justify-between font-bold py-3">
                <p>Sunday</p>
                <p>9.00-15.00</p>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div className="flex flex-col gap-4 w-full md:w-1/3 p-4 border-b md:border-b-0 md:border-r-2 border-[#65AD47]">
            <h1 className="text-[#65AD47] font-bold text-xl md:text-2xl">
              About Us
            </h1>
            <p className="text-sm md:text-base">
              From product selection and procurement to installation, training,
              and continuing technical support, we offer complete end-to-end
              solutions that address every phase of the healthcare equipment
              lifecycle. Our seamless service structure is designed to guarantee
              optimum efficiency and less downtime.
            </p>
            <Link href="/about-us" className="mt-auto">
              <PrimaryButton className="w-full md:w-auto">
                Learn More
              </PrimaryButton>
            </Link>
          </div>

          {/* Emergency Cases */}
          <div className="flex flex-col gap-4 w-full md:w-1/3 p-4">
            <h1 className="text-[#65AD47] font-bold text-xl md:text-2xl flex gap-2">
              Emergency Cases
            </h1>
            <p className="items-center text-xl md:text-2xl lg:text-3xl flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-8"
              >
                <path d="M13 2a9 9 0 0 1 9 9" />
                <path d="M13 6a5 5 0 0 1 5 5" />
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              +1 (510)-573-1931
            </p>
            <p className="text-sm md:text-base">
              We are only a phone call away if you need medical equipment
              immediately. Call S8 Medical Equipments at +1 (510)-573-1931,
              24/7, for prompt assistance and dependable support whenever you
              need it.
            </p>
            <p className="text-sm md:text-base">
              <b>Complaint Number:</b> +1 (510) 925-2257
            </p>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative h-auto md:h-screen py-16 md:py-0">
        <Image
          src="/images/services-banner.jpg"
          alt="Doctor with medical equipment"
          fill
          className="w-full h-full absolute left-0 top-0 z-0 object-cover"
          quality={100}
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/60 z-10"></div>
        <div className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto flex items-center justify-between z-20 relative text-white py-16 md:py-0">
          <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/2">
            <div className="w-40 md:w-48 lg:w-56">
              <Image
                src="/images/logo.png"
                alt="Company Logo S8Medical"
                width={300}
                height={150}
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Welcome To Our S8 Medical Equipment!
            </h2>
            <p className="text-sm md:text-base">
              We at S8 Medical Equipments provide a broad range of medical
              solutions designed to satisfy the demands of contemporary
              healthcare. Our services are based on safety, performance, and
              long-term dependability, and range from premium Durable Medical
              Equipment (DME) and caregiver support tools to cutting-edge
              diagnostic instruments and clinic-grade machinery.
            </p>
            <p className="text-sm md:text-base">
              Our staff provides professional advice, seamless assistance, and
              equipment that is trusted by experts across the country,
              regardless of whether you are a hospital, clinic, or home-care
              provider. We empower, train, and assist in addition to providing.
            </p>
            <SecondaryButton
              className="mt-4"
              onClick={() => toggleDialog("popup")}
            >
              Get In Touch
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Services Intro Section */}
      <section className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-4 font-bold tracking-wide">
          The professionals trust it. Innovation Drives Us
        </h2>
        <p className="w-full md:w-[80%] mx-auto text-center text-sm md:text-base">
          Discover our most sought-after medical devices and vital healthcare
          offerings, all of which are made to provide accuracy, dependability,
          and assistance when it counts most. We can assist you with improving
          your clinic or increasing the scope of treatment you can provide.
        </p>
      </section>

      {/* Services and Products Section */}
      <section className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto py-4 md:py-8 flex flex-col lg:flex-row gap-8">
        {/* Trending Products */}
        <div className="w-full lg:w-[40%] border-b-2 border-[#65AD47]">
          <div className="h-1 bg-[#65AD47] w-full rounded-lg"></div>
          <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide py-4">
            Trending Products
          </h2>
          <div className="h-1 bg-[#65AD47] w-full rounded-lg"></div>
          <div className="grid grid-cols-1 gap-6 my-6">
            {[
              {
                image: "/products/wheelchairs.jpg",
                title: "Wheelchairs",
                description:
                  "Designed to be independent, comfortable, and mobile. Sturdy, lightweight, and designed for daily use.",
              },
              {
                image: "/products/knee-braces.jpg",
                title: "Knee Braces",
                description:
                  "Whether you're recuperating or continuing to be active, keep your joints stable, supported, and protected.",
              },
              {
                image: "/products/cgm-monitors.jpg",
                title: "CGM Monitors",
                description:
                  "Accurately monitor blood glucose levels in real time. Improve your diabetes treatment by using more intelligent monitoring.",
              },
              {
                image: "/products/tense-unit.jpg",
                title: "Tense Unit",
                description:
                  "At your fingers is portable pain alleviation. Use scientifically proven technology to address both acute and chronic pain.",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center p-4 border rounded-lg hover:shadow-lg transition"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32">
                  <Image
                    src={product.image}
                    fill
                    style={{ objectFit: "contain" }}
                    alt={product.title}
                    className="z-10"
                  />
                </div>
                <h4 className="z-20 text-lg md:text-xl font-bold tracking-wide mt-4">
                  {product.title}
                </h4>
                <p className="text-center text-xs md:text-sm mt-2">
                  {product.description}
                </p>
                <PrimaryButton
                  className="w-full mt-4"
                  onClick={() => toggleDialog("popup")}
                >
                  Learn More
                </PrimaryButton>
              </div>
            ))}
          </div>
        </div>

        {/* Services Details */}
        <div className="w-full lg:w-[60%]">
          <div className="h-1 bg-[#65AD47] w-full rounded-lg"></div>
          <div className="flex flex-col gap-8">
            {/* DME Equipment */}
            <div className="p-4 md:p-6 flex flex-col gap-4 mt-4 border rounded-lg hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-md bg-[#65AD47] p-2 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10 md:w-16 md:h-16"
                  >
                    <path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
                    DME Equipments
                  </h2>
                  <p className="mt-2 text-sm md:text-base">
                    In order to assist patients' long-term care, rehabilitation,
                    and enhanced quality of life at home or in clinical
                    settings, S8 Medical Equipments offers a wide selection of
                    Durable Medical Equipment (DME).
                  </p>
                  <p className="mt-2 text-sm md:text-base">
                    We guarantee that every product satisfies stringent safety
                    regulations and is supported by knowledgeable support and
                    maintenance services, whether for individual patients or
                    healthcare facilities. You can rely on S8 to provide
                    equipment that works when it counts most.
                  </p>
                </div>
              </div>
              <PrimaryButton
                className="mt-2 w-full md:w-auto"
                onClick={() => toggleDialog("popup")}
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 ml-2"
                >
                  <path d="M14 4.1 12 6" />
                  <path d="m5.1 8-2.9-.8" />
                  <path d="m6 12-1.9 2" />
                  <path d="M7.2 2.2 8 5.1" />
                  <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                </svg>
              </PrimaryButton>
            </div>

            {/* Caregivers */}
            <div className="p-4 md:p-6 flex flex-col gap-4 border rounded-lg hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-md bg-[#65AD47] p-2 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-10 h-10 md:w-16 md:h-16"
                  >
                    <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
                    <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
                    <path d="m2 13 6 6" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
                    Caregivers
                  </h2>
                  <p className="mt-2 text-sm md:text-base">
                    Whether for individual patients or medical institutions, we
                    promise that every product meets strict safety standards and
                    is backed by competent support and maintenance services.
                  </p>
                  <p className="mt-2 text-sm md:text-base">
                    From ergonomic lifting aids and mobility tools to monitoring
                    systems and daily living support products, our
                    caregiver-focused solutions are designed to reduce strain,
                    enhance safety, and improve the overall caregiving
                    experience. We're here to empower those who care for others.
                  </p>
                </div>
              </div>
              <PrimaryButton
                className="mt-2 w-full md:w-auto"
                onClick={() => toggleDialog("popup")}
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 ml-2"
                >
                  <path d="M14 4.1 12 6" />
                  <path d="m5.1 8-2.9-.8" />
                  <path d="m6 12-1.9 2" />
                  <path d="M7.2 2.2 8 5.1" />
                  <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                </svg>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide py-4 border-b-2 border-[#65AD47]">
          Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
          {[
            {
              name: "Emily R",
              tagline: "Freedom in Motion",
              review:
                "The transition to this wheelchair completely altered day-to-day living. It folds up easily for travel and is smooth and light.",
            },
            {
              name: "David M",
              tagline: "Knee Brace That Actually Works",
              review:
                "Over the years, I've tried a dozen different knee braces. This one supported me well without making me feel heavy. It holds up.",
            },
            {
              name: "Sara T",
              tagline: "Game-Changer for Diabetes",
              review:
                "The CGM monitor has been a life saver. I can steer clear of hazardous increases thanks to real-time tracking, and the smartphone warnings are also useful.",
            },
            {
              name: "Marcus A",
              tagline: "Pain Relief in My Pocket",
              review:
                "Compared to certain medications, the TENS machine is more effective at managing my back pain. It is easy to use, small, and rechargeable.",
            },
          ].map((review, index) => (
            <div
              key={index}
              className="p-4 shadow-sm rounded-lg text-center hover:shadow-md transition"
            >
              <div className="relative w-16 h-16 mx-auto">
                <Image
                  src="/images/review-icon.png"
                  alt="Review icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="flex gap-2 items-center justify-center text-xl md:text-2xl font-bold tracking-wide mt-4">
                {review.name}
              </h4>
              <p className="text-xs my-2">{review.tagline}</p>
              <p className="text-xs md:text-sm mt-4">{review.review}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
