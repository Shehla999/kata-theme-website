import React from "react";
import { CiSearch, CiShop } from "react-icons/ci";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { HiBars3, HiOutlineShoppingBag } from "react-icons/hi2";

const Header = () => {
  return (
    <div>
      <header class="bg-white ">
        <div class="container mx-auto px-4 py-4 flex  justify-between items-center">
          {/*Left side -LOGO */}
          <div class="flex  items-center pl-0 space-x-4">
            <button class=" text-gray-800 hidden sm:block">
              <HiBars3 class="text-2xl" />
            </button>
            <a href="/" class="text-xl font-bold ">
              CLOTHING
            </a>

            <div class="hidden md:flex space-x-4 text-[12px] font-semibold items-center pl-8 ">
              <a
                href="#"
                class="bg-black text-white uppercase   px-1 py-0.5 rounded-sm  "
              >
                Woman
              </a>
              <a href="#" class="text-black hover:cursor-pointer  ">
                MAN
              </a>
            </div>
          </div>
          {/* Center- search Bar */}
          <div class="hidden sm:flex flex-grow justify-center items-center text-black space-x-4">
            <div class="relative ">
              <input
                type="text"
                placeholder="SEARCH"
                class="bg-white py-2 px-60 pl-1 focus:outline-none placeholder:text-black"
              />

              <CiSearch class="absolute right-3 top-3 " />
              <div class="h-[1px] w-full bg-gray-600 mx-auto "></div>
            </div>
          </div>

          {/* Right side */}
          <div class="flex items-center  space-x-6 ">
            <a href="/account" class="text-xl hidden md:block">
              <FaRegUser />
            </a>

            <a href="/wishlist" class="text-xl  hidden md:block">
              <FaRegHeart />
            </a>

            <a href="/cart " class="text-xl">
              <HiOutlineShoppingBag />
            </a>

            <button class=" text-gray-800 sm:hidden ">
              <HiBars3 class="text-2xl" />
            </button>
          </div>
        </div>

        {/* Menu Bar icons */}
        <div class="bg-white  hidden md:block ">
          <div class="container mx-auto px-4 py-2 flex justify-between">
            <div class="flex space-x-6 uppercase text-[12px] font-semibold ">
              <a
                href="/shop"
                class="relative  hover:text-black no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                New Arrivals
              </a>

              <a
                href="/shop"
                class="relative hover:text-black no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                Dresses
              </a>

              <a
                href="/shop"
                class="relative hover:text-black no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                Tops
              </a>

              <a
                href="/shop"
                class="relative hover:text-black no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                Pants
              </a>

              <a
                href="/shop"
                class="relative hover:text-black no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                Jeans
              </a>

              <a
                href="/shop"
                class="relative hover:text-black no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                Shoes
              </a>

              <a
                href="/shop"
                class="relative hover:text-black no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                Sale
              </a>

              <a
                href="/shop"
                class="relative hover:text-black no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                Styling
              </a>

              <a
                href="/shop"
                class="relative hover:text-black no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-black after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-right hover:after:origin-bottom-left after:transition-transform after:duration-300"
              >
                Shop
              </a>
            </div>
          </div>
        </div>

        {/* Footer icons */}
        <div class="sm:hidden fixed bottom-0 w-full bg-white shadow-lg">
          <div class="w-full min-h-[1px] bg-gray-200"></div>
          <div class="flex justify-between items-center px-10 py-2">
            <a href="/shop" class="text-[10px]">
              <CiShop class="text-2xl text-black " />
              Shop
            </a>

            <a href="/wishlist" class="text-[10px]">
              <FaRegHeart class="text-2xl" />
              Wishlist
            </a>

            <a href="/cart" class="text-[10px]">
              <FiShoppingCart class="text-2xl" />
              Cart
            </a>

            <a href="/account" class="text-[10px]">
              <FaRegUser class="text-2xl" />
              Account
            </a>
          </div>
        </div>

        <div class="w-full min-h-[1px] bg-gray-200"></div>
      </header>
    </div>
  );
};

export default Header;
