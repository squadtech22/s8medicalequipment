"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { PrimaryButton, SecondaryButton } from "./components/_button";
import { FormEvent, useEffect, useState } from "react";
import productsData from "@/public/data/products.json";
import Link from "next/link";
import { toggleDialog } from "./utils/DialogHelper";

interface Product {
  id: string;
  name: string;
  image: string;
  keyBenefits: string[];
}

export default function Home() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: Record<string, any> = {};

    formData.forEach((value, key) => {
      if (key !== "consent") {
        data[key] = value;
      }
    });

    try {
      const res = await fetch(
        "https://healthmedneeds.com/api/s8-medical-equipment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await res.json();
      console.log(result);
      console.log("Submitting:", data);

      if (result.success) {
        alert("Form submitted successfully!");
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Network error occurred.");
    }
  };
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <main className="w-full min-h-screen">
      {/* Hero Slider Section */}
      <section className="w-full h-screen">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          <SwiperSlide className="relative w-full h-full">
            <Image
              src="/images/main-slider-img-2.jpg"
              alt="Medical equipment hero image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center px-4 md:px-8 gap-4 md:gap-6 text-center">
              <h1 className="lg:pt-20 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase">
                Accuracy You Can Rely On
                <br />
                Quality You Can Depend On
              </h1>
              <hr className="w-1/2 md:w-1/3 border-white h-1 bg-white rounded-lg mx-auto" />
              <p className="w-full md:w-2/3 text-white mx-auto text-sm md:text-base">
                Our medical equipment and devices both meet and surpass global
                healthcare standards. Each solution guarantees unmatched safety,
                accuracy, and consistent performance across a range of medical
                situations, from high-dependency hospitals to outpatient
                clinics, and is tested for durability and supported by clinical
                validation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mx-auto">
                <Link href="/services">
                  <PrimaryButton className="w-full sm:w-auto">
                    View Services
                  </PrimaryButton>
                </Link>
                <Link href="/about-us">
                  <SecondaryButton className="w-full sm:w-auto">
                    Learn More
                  </SecondaryButton>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative w-full h-full">
            <Image
              src="/images/main-slider-img-1.jpg"
              alt="Medical innovation hero image"
              fill
              className="object-cover"
            />
            <div className="lg:pt-20 absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col justify-center px-4 md:px-8 gap-4 md:gap-6 text-center">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase">
                Your Medical
                <br />
                Innovation Partner
              </h1>
              <hr className="w-1/2 md:w-1/3 border-white h-1 bg-white rounded-lg mx-auto" />
              <p className="w-full md:w-2/3 text-white mx-auto text-sm md:text-base">
                From product selection and procurement to installation,
                training, and continuing technical support, we offer complete
                end-to-end solutions that address every phase of the healthcare
                equipment lifecycle. Our seamless service structure is designed
                to guarantee optimum efficiency and less downtime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mx-auto">
                <Link href="/services">
                  <PrimaryButton className="w-full sm:w-auto">
                    View Services
                  </PrimaryButton>
                </Link>
                <Link href="/about-us">
                  <SecondaryButton className="w-full sm:w-auto">
                    Learn More
                  </SecondaryButton>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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
                <p>9.00-15.00</p>
              </li>
              <li className="flex items-center justify-between font-bold py-3">
                <p>Saturday</p>
                <p>9.00-15.00</p>
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
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Services</h2>
        <hr className="h-1 bg-[#65AD47] w-full border-[#65AD47] rounded-lg my-4" />
        <div className="flex flex-col lg:flex-row gap-8">
          {/* DME Equipment */}
          <div className="w-full lg:w-1/2 p-4 md:p-6 flex flex-col gap-4 border rounded-lg hover:shadow-lg transition">
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
                  and enhanced quality of life at home or in clinical settings,
                  S8 Medical Equipments offers a wide selection of Durable
                  Medical Equipment (DME).
                </p>
                <p className="mt-2 text-sm md:text-base">
                  We guarantee that every product satisfies stringent safety
                  regulations and is supported by knowledgeable support and
                  maintenance services, whether for individual patients or
                  healthcare facilities. You can rely on S8 to provide equipment
                  that works when it counts most.
                </p>
              </div>
            </div>
            <Link href="/services">
              <PrimaryButton className="mt-2 w-full md:w-full">
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
            </Link>
          </div>

          {/* Caregivers */}
          <div className="w-full lg:w-1/2 p-4 md:p-6 flex flex-col gap-4 border rounded-lg hover:shadow-lg transition">
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
                  enhance safety, and improve the overall caregiving experience.
                  We're here to empower those who care for others.
                </p>
              </div>
            </div>
            <Link href="/services" className="w-full">
              <PrimaryButton className="mt-2 w-full md:w-full">
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
            </Link>
          </div>
        </div>
      </section>

      {/* Full Width Banner Section */}
      <section className="relative h-auto md:h-screen py-16 md:py-0">
        <Image
          src="/images/fullwidth-img-1.jpeg"
          alt="Doctor with medical equipment"
          fill
          className="w-full h-full absolute left-0 top-0 z-0 object-cover"
          quality={100}
        />
        <div className="w-full h-full absolute top-0 left-0 bg-black/60 z-10"></div>
        <div className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto flex items-center justify-between z-20 relative py-16 md:py-0">
          <div className="flex flex-col gap-4 md:gap-8 w-full md:w-1/2">
            <div className="w-40 md:w-48 lg:w-56 mt-8">
              <Image
                src="/images/logo.png"
                alt="Company Logo S8Medical"
                width={300}
                height={150}
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Our Services!
            </h2>
            <p className="text-sm md:text-base text-white">
              We at S8 Medical Equipments provide a broad range of medical
              solutions designed to satisfy the demands of contemporary
              healthcare. Our services are based on safety, performance, and
              long-term dependability, and range from premium Durable Medical
              Equipment (DME) and caregiver support tools to cutting-edge
              diagnostic instruments and clinic-grade machinery.
            </p>
            <p className="text-sm md:text-base text-white">
              Our staff provides professional advice, seamless assistance, and
              equipment that is trusted by experts across the country,
              regardless of whether you are a hospital, clinic, or home-care
              provider. We empower, train, and assist in addition to providing.
            </p>
            <Link href="/services">
              <SecondaryButton className="w-full mt-4">
                Get In Touch
              </SecondaryButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full px-4 md:w-[90%] lg:w-[80%] mx-auto py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Products</h2>
        <hr className="h-1 bg-[#65AD47] w-full border-[#65AD47] rounded-lg my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-4 border rounded-lg p-4 shadow hover:shadow-lg transition relative"
            >
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain rounded"
                />
              </div>
              <h2 className="text-lg md:text-xl font-semibold">
                {product.name}
              </h2>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-1">
                {product.keyBenefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <PrimaryButton
                className="absolute top-4 right-4 p-2"
                onClick={() => toggleDialog("popup")}
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
                  <path d="M14 4.1 12 6" />
                  <path d="m5.1 8-2.9-.8" />
                  <path d="m6 12-1.9 2" />
                  <path d="M7.2 2.2 8 5.1" />
                  <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" />
                </svg>
              </PrimaryButton>
            </div>
          ))}
        </div>
      </section>

      {/* Qualification Form Section */}
      <section className="w-full my-12">
        <div className="p-4 md:p-8 md:pl-12 lg:pl-24 bg-[#65AD47] w-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white text-center">
            Check Your Qualification
          </h2>
          <hr className="h-1 bg-white w-full md:w-2/3 border-white rounded-lg my-4 mx-auto" />
          <form
            onSubmit={handleSubmit}
            method="post"
            className="py-2 w-full md:w-2/3 mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
              {/* Form Fields */}
              {[
                { id: "fname", label: "First Name", type: "text" },
                { id: "lname", label: "Last Name", type: "text" },
                { id: "zip_code", label: "Zip Code", type: "text" },
                { id: "phone", label: "Phone", type: "text" },
                { id: "dob", label: "DOB", type: "date" },
                { id: "message", label: "Message", type: "text" },
              ].map((field) => (
                <div
                  key={field.id}
                  className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center"
                >
                  <label
                    htmlFor={field.id}
                    className="w-full md:w-1/3 text-white text-sm md:text-base"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.id}
                    id={field.id}
                    placeholder={field.label}
                    className="w-full md:w-2/3 bg-white border-2 border-[#65AD47] rounded-md p-2 text-sm md:text-base"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2 items-start text-white text-sm md:text-base">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                className="mt-1"
              />
              <span>
                By tapping the "Submit" button, I expressly endorse S8 Medical
                Equipment to call me or send me recorded messages or messages
                about their Supplies, or other Clinical things using electronic
                advancement to my telephone/cell number I entered already. I
                understand that I am not supposed to give my consent as a
                condition of any purchase.
              </span>
            </div>
            <div className="flex justify-center mt-6">
              <SecondaryButton className="w-full md:w-2/3 hover:bg-white hover:border-white hover:text-[#65AD47]">
                See If I Qualify
              </SecondaryButton>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
