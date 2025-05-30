import React, { useEffect, useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import { ShoppingCart, Search } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function App() {
  const [slideIn, setSlideIn] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => setSlideIn(true), 500);
  }, []);

  return (
    <div>
      <style>{`
        .swiper-button-next, .swiper-button-prev,
        .swiper-button-next::after, .swiper-button-prev::after {
          color: #fbbf24 !important;
        }
      `}</style>

      <header className="bg-black backdrop-blur-xs text-white px-4 md:px-8 py-4 flex items-center justify-between fixed w-full top-0 z-50">
        <div className="flex items-center gap-2 text-xl font-bold">
          <img src="/logomusiscent.jpeg" className="w-[30px]" alt="Logo" />
          <h1 className="text-lg font-serif">MusiScent</h1>
        </div>
        <div className="flex-1 flex justify-end md:hidden">
          <div className="flex items-center gap-2">
            <button className="hover:text-amber-600 hover:cursor-pointer">
              <Search size={20} />
            </button>
            <button className="hover:text-amber-600 hover:cursor-pointer">
              <ShoppingCart size={20} />
            </button>
            <button
              className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none ml-2"
              onClick={() => setNavOpen(!navOpen)}
              aria-label="Open navigation menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  navOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  navOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                  navOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>
          </div>
        </div>

        <nav
          className="hidden md:flex space-x-6 text-sm font-medium justify-center flex-1"
          aria-label="Main navigation"
        >
          <a href="#Home" className="hover:text-amber-500 transition">
            Home
          </a>
          <a href="#About" className="hover:text-amber-500 transition">
            About
          </a>
          <div className="relative group">
            <button
              className="hover:text-amber-500 transition flex items-center gap-1"
              tabIndex={0}
              aria-haspopup="true"
            >
              Product
              <svg
                className="w-4 h-4 inline ml-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 bg-white text-black rounded shadow-lg py-2 px-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[120px]">
              <a href="#Men" className="block py-1 hover:text-amber-600">
                Men
              </a>
              <a href="#Women" className="block py-1 hover:text-amber-600">
                Women
              </a>
              <a href="#Unisex" className="block py-1 hover:text-amber-600">
                Unisex
              </a>
            </div>
          </div>
          <a href="#Testimonials" className="hover:text-amber-500 transition">
            Testimonials
          </a>
          <a href="#Story" className="hover:text-amber-500 transition">
            Story
          </a>
          <a href="#Contact" className="hover:text-amber-500 transition">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="hover:text-amber-600 hover:cursor-pointer">
            <Search size={20} />
          </button>
          <button className="hover:text-amber-600 hover:cursor-pointer">
            <ShoppingCart size={20} />
          </button>
          <button className="border border-white text-white px-4 py-2 text-xs hover:cursor-pointer transition duration-300 hover:bg-amber-600 rounded-lg ">
            Login
          </button>
        </div>
      </header>

      {navOpen && (
        <div className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-black bg-opacity-95 z-50 flex flex-col items-center justify-start pt-24 animate-fade-in shadow-lg transition-all duration-300">
          <button
            className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
            onClick={() => setNavOpen(false)}
            aria-label="Close navigation menu"
          >
            &times;
          </button>
          <nav
            className="flex flex-col gap-6 text-lg font-semibold text-white w-full px-8"
            aria-label="Mobile navigation"
          >
            <a
              href="#Home"
              className="hover:text-amber-500 transition"
              onClick={() => setNavOpen(false)}
            >
              Home
            </a>
            <a
              href="#About"
              className="hover:text-amber-500 transition"
              onClick={() => setNavOpen(false)}
            >
              About
            </a>
            <details className="w-full">
              <summary className="hover:text-amber-500 transition flex items-center gap-1 cursor-pointer">
                Product
                <svg
                  className="w-4 h-4 inline ml-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="ml-4 mt-2 bg-white text-black rounded shadow-lg py-2 px-4">
                <a
                  href="#Men"
                  className="block py-1 hover:text-amber-600"
                  onClick={() => setNavOpen(false)}
                >
                  Men
                </a>
                <a
                  href="#Women"
                  className="block py-1 hover:text-amber-600"
                  onClick={() => setNavOpen(false)}
                >
                  Women
                </a>
                <a
                  href="#Unisex"
                  className="block py-1 hover:text-amber-600"
                  onClick={() => setNavOpen(false)}
                >
                  Unisex
                </a>
              </div>
            </details>
            <a
              href="#Testimonials"
              className="hover:text-amber-500 transition"
              onClick={() => setNavOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#Story"
              className="hover:text-amber-500 transition"
              onClick={() => setNavOpen(false)}
            >
              Story
            </a>
            <a
              href="#Contact"
              className="hover:text-amber-500 transition"
              onClick={() => setNavOpen(false)}
            >
              Contact
            </a>
            <button
              className="border border-white text-white px-4 py-2 text-xs hover:cursor-pointer transition duration-300 hover:bg-amber-600 rounded-lg mt-4 w-full"
              onClick={() => setNavOpen(false)}
            >
              Login
            </button>
          </nav>
        </div>
      )}

      <section id="Home">
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-screen mt-10">
          <img
            src="/heroparmen.jpeg"
            className="w-full h-[60vh] md:h-screen object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={`transition-all duration-700 transform w-full px-4 md:px-0 ${
                slideIn
                  ? "translate-x-0 opacity-100"
                  : "translate-x-32 opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-8xl text-white font-bold mb-4 text-center">
                Musi Scent
              </h1>
              <p className="text-base md:text-xl text-white mb-8 text-center">
                Welcome to Musi Scent that is redefining elegance with every
                fragrance.
              </p>
              <div className="flex justify-center">
                <a href="#Men">
                  <button className="border border-white text-white px-4 py-2 hover:cursor-pointer transition duration-300 hover:bg-amber-600 hover:scale-105 ">
                    Shop Now{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-10 md:h-0"></div>

      <section
        id="About"
        className="max-w-screen-xl h-auto md:h-screen bg-white mx-auto space-y-8 my-8 md:my-32 flex flex-col justify-center items-center px-2 md:px-4 relative z-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-full flex flex-col gap-4 items-start">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-center underline underline-offset-8 decoration-amber-300 ">
                ABOUT US
              </h1>
              <p className="text-base md:text-lg text-gray-600 mt-8 md:mt-16 font-base text-center">
                Musi Scent is a premium fragrance brand inspired by the rich
                heritage of Sriwijaya. We blend tradition and modernity to
                create unique scents that evoke elegance, confidence, and
                timeless charm. Our mission is to deliver high-quality perfumes
                that leave a lasting impression and celebrate the beauty of
                Indonesian culture.
              </p>

              <div className="flex justify-center mt-4 font-semibold">
                <button className="border border-amber-300 text-amber-300 px-4 py-2 hover:cursor-pointer transition duration-300 hover:bg-amber-300 hover:text-white hover:border-none rounded-xl transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="/heroparfum1.jpg"
              className="w-full object-cover rounded-xl shadow-xl max-h-[300px] md:max-h-none"
            />
          </div>
        </div>
      </section>

      <section
        id="Product"
        className="w-screen flex flex-col justify-center items-center bg-red-950 py-32"
      >
        <div className="p-5">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              OUR PRODUCT
            </h1>
            <p className="text-yellow-500 font-medium text-sm tracking-wider uppercase mb-3">
              HARUM NUSANTARA, ENERGI BARU UNTUK SETIAP LANGKAH.
            </p>
          </div>

          <div
            id="Men"
            className="text-2xl text-yellow-300 font-medium flex justify-start items-center mt-8 mb-8"
          >
            {" "}
            MEN'S COLLECTION
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/14.jpg"
                  alt="Kenanga"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                  Sriwijaya Valor
                </h2>
                <p className="text-sm text-gray-400">
                  Amber – Spicy – Woody Oriental
                </p>
                <p className=" text-normal text-gray-400 mb-2">
                  Aroma hangat dan berani yang terinspirasi dari kejayaan
                  Sriwijaya memadukan rempah eksotis, sentuhan amber, dan kayu
                  berkualitas tinggi.
                </p>
                <div>
                  <div className="rating rating-xs ">
                    <input
                      type="radio"
                      name="rating-5"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (99)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/men.jpg"
                  alt="Songket Silk"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                  Benteng Breeze
                </h2>
                <p className="text-sm text-gray-400">
                  Woody – Fresh Spicy – Aquatic
                </p>
                <p className=" text-normal text-gray-400 mb-1">
                  Perpaduan aroma kayu kokoh, rempah segar, dan hembusan aquatic
                  yang ringan, menciptakan kesan yang maskulin.
                </p>
                <div>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-6"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-6"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (101)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/6.jpg"
                  alt="Songket Silk"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Sekanak Spice</h2>
                <p className="text-sm text-gray-400">
                  Warm spicy – oriental – herbal
                </p>
                <p className=" text-normal text-gray-400 mb-1">
                  Wangi rempah hangat berpadu karakter maskulin, menggambarkan
                  kehidupan dan keaslian pasar tradisional Sekanak.
                </p>
                <div>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-7"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-7"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                      defaultChecked
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (120)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/cow.jpg"
                  alt="Songket Silk"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                  Palembang Nights
                </h2>
                <p className="text-sm text-gray-400">Smoky – spicy – amber</p>
                <p className=" text-normal text-gray-400 mb-1">
                  Aroma malam yang dalam dan memikat, mencampurkan wangi rempah,
                  asap kayu, dan sentuhan amber.{" "}
                </p>
                <div>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-8"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-8"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-8"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-8"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-8"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-8"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                      defaultChecked
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (100)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="Women"
            className="text-2xl text-yellow-300 font-medium flex justify-start items-center mb-6"
          >
            {" "}
            WOMEN'S COLLECTION
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="card bg-white w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/4.jpg"
                  alt="Kenanga"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                  Palembang Petang
                </h2>
                <p className="text-sm text-gray-400">Floral – Sweet – Creamy</p>
                <p className=" text-normal text-gray-400 mb-2">
                  Seperti angin lembut senja yang membawa harum bunga sepatu dan
                  sisa matahari di atas air sungai, aroma ini memeluk hangat.
                </p>
                <div>
                  <div className="rating rating-xs ">
                    <input
                      type="radio"
                      name="rating-1"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-1"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                      defaultChecked
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (110)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/12.jpg"
                  alt="Songket Silk"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Songket Silk</h2>
                <p className="text-sm text-gray-400">Amber – Rose – Oud</p>
                <p className=" text-normal text-gray-400 mb-1">
                  Seperti kilau benang emas di songket, aroma ini pancarkan
                  kemewahan klasik rose Turki pekat, amber hangat, dan oud yang
                  dalam.{" "}
                </p>
                <div>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-2"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                      defaultChecked
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (180)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/11.jpg"
                  alt="Kenanga"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Kemaro Blom</h2>
                <p className="text-sm text-gray-400">
                  Tropical Floral – Fresh – Feminine
                </p>
                <p className=" text-normal text-gray-400 mb-2">
                  Kemaro Blom dengan sentuhan floral tropis yang segar. Parfum
                  ini mencerminkan wanita modern, berani dan lembut.
                </p>
                <div>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-3"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-3"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                      defaultChecked
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (165)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/new.jpg"
                  alt="Kenanga"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Gulo Puan</h2>
                <p className="text-sm text-gray-400">Sweet – Fresh – Creamy</p>
                <p className=" text-normal text-gray-400 mb-2">
                  Aroma manis gula merah yang segar berpadu lembut dengan
                  sentuhan susu kerbau creamy dan wangi pandan alami.{" "}
                </p>
                <div>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-4"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-4"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                      defaultChecked
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (190)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            id="Unisex"
            className="text-2xl text-yellow-300 font-medium flex justify-start items-center mt-8 mb-8"
          >
            {" "}
            UNISEX COLLECTION
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/unisex.jpg"
                  alt="Kenanga"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Pulau Tiga</h2>
                <p className="text-sm text-gray-400">
                  Salty – Citrus – Warm Amber
                </p>
                <p className=" text-normal text-gray-400 mb-2">
                  Gabungan aroma garam laut, kulit jeruk tropis, dan hangatnya
                  amber, seolah membawa perjalanan pulang dari pulau ke pulau.
                </p>
                <div>
                  <div className="rating rating-xs ">
                    <input
                      type="radio"
                      name="rating-9"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-9"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-9"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-9"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-9"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-9"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (99)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/unisex2.jpg"
                  alt="Songket Silk"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Gading Aura</h2>
                <p className="text-sm text-gray-400">Floral – Spicy – Amber</p>
                <p className=" text-normal text-gray-400 mb-1">
                  Harum bunga melati bercampur rempah hangat dan amber yang
                  memikat, mencerminkan kemewahan klasik budaya Palembang.
                </p>
                <div>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-10"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-10"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (101)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/uni2.jpg"
                  alt="Songket Silk"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">
                  Beringin Shade
                </h2>
                <p className="text-sm text-gray-400">Woody – Earthy – Herbal</p>
                <p className=" text-normal text-gray-400 mb-1">
                  Keharuman kayu tua dan aroma tanah basah berpadu dengan herbal
                  segar, menciptakan suasana teduh di bawah pohon beringin.
                </p>
                <div>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-11"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-11"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-11"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-11"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-11"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-11"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                      defaultChecked
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (120)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 w-72 shadow-sm mb-6">
              <figure>
                <img
                  src="/uni.jpg"
                  alt="Songket Silk"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300 hover:cursor-pointer"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl font-bold">Musi Morning</h2>
                <p className="text-sm text-gray-400">
                  Aquatic – Green – Citrus
                </p>
                <p className=" text-normal text-gray-400 mb-1">
                  Kesegaran pagi di tepian Sungai Musi, memadukan aroma embun,
                  daun hijau, dan sentuhan jeruk lokal. Cocok untuk pecinta
                  ketenangan
                </p>
                <div>
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-12"
                      className="rating-hidden"
                      aria-label="clear"
                    />
                    <input
                      type="radio"
                      name="rating-12"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-12"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="2 star"
                    />
                    <input
                      type="radio"
                      name="rating-12"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-12"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-12"
                      className="mask mask-star-2 bg-yellow-500"
                      aria-label="5 star"
                      defaultChecked
                    />
                  </div>
                  <span className=" text-xs text-gray-400 font-semibold">
                    (100)
                  </span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-1 border-yellow-300 w-full text-yellow-400 flex items-center justify-center gap-3">
                    <ShoppingCart size={18} />
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Testimonials" className="w-full py-2 px-2 md:px-4">
        <div>
          <h1 className="text-3xl md:text-5xl my-8 mt-16 font-bold text-black text-center underline underline-offset-8 decoration-amber-300 ">
            Testimonials
          </h1>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          modules={[Navigation]}
          className="my-8 md:my-16 text-amber-300"
        >
          <SwiperSlide>
            <div className="text-center">
              <img
                src="/mas ade.jpeg"
                className="mx-auto mb-4 w-60 rounded-full"
              />
              <h3 className="text-2xl text-black font-semibold mb-2">
                Mas Ade
              </h3>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500 text-xl" />
                ))}
              </div>
              <p className="text-lg text-gray-900 px-10 ">
                "Ga lucu!!! serius ini parfum bener-bener bikin gua ngerasa percaya diri banget, walaupun gua ada hernia."
              </p>
              <div className="mt-4"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src="/deankt (2).jpeg"
                className="mx-auto mb-4 w-60 rounded-full"
              />
              <h3 className="text-2xl text-black font-semibold mb-2">Deankt</h3>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500 text-xl" />
                ))}
              </div>
              <p className="text-lg text-gray-900 px-10">
                "Gelooo Guysss!!! habis pake parfum ini gua langsung otw ke FX Sudirman, mau 2 shoot sama melody JKT48"
              </p>
              <div className="mt-4"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src="/adel.jpeg"
                className="mx-auto mb-4 w-60 rounded-full"
              />
              <h3 className="text-2xl text-black font-semibold mb-2">Adel</h3>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500 text-xl" />
                ))}
              </div>
              <p className="text-lg text-gray-900 px-10">
                "Aduh del del..., itulah yang gua denger kata temen-temen gua, katanya kenapa baru beli sekarang, wanginya cewe bangettt"
              </p>
              <div className="mt-4"></div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center">
              <img
                src="/sisil.jpeg"
                className="mx-auto mb-4 w-60 rounded-full"
              />
              <h3 className="text-2xl text-black font-semibold mb-2">
                sisil
              </h3>
              <div className="flex justify-center mb-2">
                {[...Array(4)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500 text-xl" />
                ))}
                <FaStarHalfAlt className="text-amber-500 text-xl" />
              </div>
              <p className="text-lg text-gray-900 px-10 ">
                "Kisah Naruto emang sedih, tapi lebih sedih lagi kalian gak kebagian parfum yang wangi banget ini, serius deh, gua sampe nangis pas pake ini."
              </p>
              <div className="mt-4"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src="/cendy.jpeg"
                className="mx-auto mb-4 w-60 rounded-full"
              />
              <h3 className="text-2xl text-black font-semibold mb-2">Cendy</h3>
              <div className="flex justify-center mb-2">
                {[...Array(3)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500 text-xl" />
                ))}
                <FaRegStar className="text-amber-500 text-xl" />
                <FaRegStar className="text-amber-500 text-xl" />
              </div>
              <p className="text-lg text-gray-900 px-10">
                "Gausah heran kenapa gua suka stream irl bareng banyak cewek, ya udah jelas karna wangi broo pakai parfum Musi Scent ini, bikin gua ngerasa kayak artis Korea."
              </p>
              <div className="mt-4"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img
                src="/rezaarap.jpeg"
                className="mx-auto mb-4 w-60 rounded-full"
              />
              <h3 className="text-2xl text-black font-semibold mb-2">Reza Arap</h3>
              <div className="flex justify-center mb-2">
                {[...Array(10)].map((_, i) => (
                  <FaStar key={i} className="text-amber-500 text-xl" />
                ))}
              </div>
              <p className="text-lg text-gray-900 px-10">
                "Walau ditingal istri yang penting badan gua wangi"
              </p>
              <div className="mt-4"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <section
        id="Story"
        className="max-w-screen-xl bg-gray-50 mx-auto space-y-8 my-32 flex flex-col justify-center items-center px-4"
      >
        <div className="text-center mb-10">
          <div className="h-full flex flex-col gap-4 items-center justify-center">
            <h1 className=" text-black   text-4xl font-bold text-center mt-7 ">
              THE STORY OF OUR SCENTS
            </h1>
            <p className="text-lg text-yellow-500 mt-8 font-base text-center max-w-4xl mx-auto">
              The aroma of Musi Scent was born from a journey along the banks of
              the Musi River—a lifeline that has long witnessed the meeting of
              cultures and the beauty of nature.
              <br />
              From bustling traditional markets filled with spices to blooming
              flower gardens under the sun, every place holds a story.
              <br />
              Our perfumers draw inspiration from this rich diversity, capturing
              the scents of nature, folklore, and traditions passed down through
              generations.
              <br />
              <br />
              Within each bottle of Musi Scent lies a harmony between aromas
              that soothe the soul and stories that bridge the past and the
              future.
              <br />
              This is not just a perfume—it's a journey through the roots of
              culture and the timeless charm of nature.
            </p>
          </div>
        </div>

        <div className="carousel carousel-center carousel-item rounded-box">
          <div className="carousel-item ">
            <img
              src="/carousel9.jpg"
              alt="Pizza"
              className="w-70 h-[100] object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carousel6.jpg"
              className="w-70 h-[100] object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carousel5.jpg"
              alt="Pizza"
              className="w-70 h-[100] object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carousel4.jpg"
              alt="Pizza"
              className="w-70 h-[100] object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carousel3.jpg"
              alt="Pizza"
              className="w-70 h-[100] object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carousel2.jpg"
              alt="Pizza"
              className="w-70 h-[100] object-cover transition-transform duration-300 hover:scale-110 "
            />
          </div>
          <div className="carousel-item">
            <img
              src="/carousel1.jpg"
              alt="Pizza"
              className="w-70 h-[100] object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center bg-white py-8 md:py-16 px-2 md:px-20 mb-8 md:mb-16">
        <div>
          <h1 className="text-2xl md:text-4xl text-black font-bold mb-4 underline underline-offset-8 decoration-amber-300">
            FAQ
          </h1>
        </div>
        <div className="join join-vertical bg-base-100 text-black w-full max-w-xs sm:max-w-xl md:max-w-3xl text-base sm:text-lg md:text-2xl mt-8 md:mt-16">
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title font-semibold ">
              How do I place an order?
            </div>
            <div className="collapse-content text-lg">
              Browse our products, select your desired items, and click "Add to
              Cart." Once you're ready, proceed to checkout and follow the
              instructions.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              from where do you ship?
            </div>
            <div className="collapse-content text-lg">
              We ship from our warehouse located in Palembang, Indonesia. We
              offer international shipping to various countries.
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border-base-300 border">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-semibold">
              What payment methods do you accept?
            </div>
            <div className="collapse-content text-lg">
              We accept various payment methods including credit/debit cards,
              PayPal, and bank transfers. Please choose your preferred method at
              checkout.
            </div>
          </div>
        </div>
      </section>

      <section id="Contact" className="bg-gray-100 py-8 md:py-16 px-2 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          <div className="space-y-6 text-gray-700 text-sm">
            <h2 className="text-3xl font-bold text-black mb-4 underline underline-offset-8 decoration-amber-300 ">
              CONTACT US
            </h2>
            <div className="flex items-start gap-3">
              <span>📍</span>
              <p>Jl. Sungai Sahang no. 889</p>
            </div>
            <div className="flex items-start gap-3">
              <span>📧</span>
              <p>@musiscent@gmail.com</p>
            </div>
            <div className="flex items-start gap-3">
              <span>📞</span>
              <p>(123) 456-78909</p>
            </div>
            <div className="flex items-start gap-3">
              <span>🕒</span>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
            <div className="flex items-start gap-3">
              <span>🕒</span>
              <p>Saturday: 10:00 AM - 3:00 PM</p>
            </div>
            <div className="flex items-start gap-3">
              <span>🕒</span>
              <p>Sunday: Closed</p>
            </div>
            <div className="flex items-start gap-3">
              <span>🌐</span>
              <p>www.musiscent.com</p>
            </div>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();

              const name = e.target.name.value;
              const email = e.target.email.value;
              const message = e.target.message.value;

              const waNumber = "6285156812031";
              const text = `Halo, saya ${name} (${email}) ingin bertanya:\n${message}`;
              const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(
                text
              )}`;

              window.open(url, "_blank");
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-amber-300"
              required
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-[#541212] text-white rounded-full hover:bg-[#664141] transition hover:cursor-pointer w-full"
            >
              Submit via WhatsApp
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-neutral-900 text-white py-6">
        <div className="w-full mx-auto px-2 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 text-center items-center">
          <div className="text-sm text-gray-300">© 2025 MusiScent</div>
          <div className="flex justify-center gap-5 text-xl">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="hover:scale-110 transition hover:text-amber-500"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/sintakpolsri/"
              target="_blank"
              className="hover:scale-110 transition hover:text-amber-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:scale-110 transition hover:text-amber-500"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
          <div className="text-sm text-gray-300">
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>{" "}
            •{" "}
            <a href="#" className="hover:text-white">
              Refund policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
