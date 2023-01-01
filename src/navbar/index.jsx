import React from "react";
import Product from "./product";
import Solution from "./solution";
import About from "./about";
import Support from "./support";

const Navbar = () => {
  const [isPromoHover, setIsPromoHover] = React.useState(false);

  const enterPromoHandler = () => {
    setIsPromoHover(true);
  };

  const exitPromoHandler = () => {
    setIsPromoHover(false);
  };

  const backgroundStyle = isPromoHover
    ? ""
    : "pointer-events-none hover:transition-all hover:ease-in hover:duration-300 bg-[white]/0 hover:bg-[white]/90";

  const menuStyle = isPromoHover
    ? ""
    : "pointer-events-none hover:transition-all hover:ease-in hover:duration-300 bg-[white]/0 hover:bg-[white]/90 hover:text-slate-400";

  return (
    <>
      <div className="bg-[#4443d1] flex justify-between relative">
        <div className={`${backgroundStyle} w-screen h-screen`}>
          <ul
            name="menu"
            className={`${menuStyle} text-[white] w-full px-14 mx-auto flex gap-x-8 items-center`}
          >
            <li className="text-2x font-bold hover:text-slate-700 cursor-pointer">
              Logo
            </li>

            <li
              className={`group/product cursor-pointer relative py-[19px] pointer-events-auto`}
            >
              <span className="text-base font-semibold hover:text-slate-700">
                Products
              </span>
              <Product />
            </li>

            <li
              className={`group/solution cursor-pointer relative py-[19px] pointer-events-auto`}
            >
              <span className="text-base font-semibold hover:text-slate-700">
                Solutions
              </span>
              <Solution />
            </li>

            <li
              onMouseEnter={enterPromoHandler}
              onMouseOut={exitPromoHandler}
              onClick={() => {
                window.alert("clicked");
              }}
              className="pointer-events-auto cursor-pointer"
            >
              <span className="text-base bg-[#e5493d] hover:bg-[#f26055] pl-5 pr-6 pb-[.45rem] pt-[.25rem] px-6 rounded-full text-[white] font-semibold">
                % Promo
              </span>
            </li>

            <li className="pointer-events-auto group/about ml-auto cursor-pointer relative py-[19px]">
              <span className="text-base font-semibold hover:text-slate-700">
                About Us
              </span>
              <About />
            </li>

            <li className="pointer-events-auto group/support cursor-pointer relative py-[19px]">
              <span className="text-base font-semibold hover:text-slate-700">
                Supports
              </span>
              <Support />
            </li>
          </ul>
        </div>
      </div>
      {}
    </>
  );
};

export default Navbar;
