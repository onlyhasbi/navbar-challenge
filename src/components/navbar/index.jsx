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

  const menuBackground =
    "pointer-events-none bg-[white]/0 hover:text-slate-400 hover:transition-all hover:ease-in-out hover:duration-300 hover:bg-[white]/90 hover:text-slate-400 relative z-10";
  const baseBackground =
    'before:content-[""] before:top-0 before:left-0 before:w-screen before:h-screen before:bg-[white]/0 before:hover:bg-[white]/90 before:hover:transition-all before:hover:ease-in-out before:hover:duration-300 before:absolute before:z-0';

  const menuStyle = isPromoHover ? "" : `${baseBackground} ${menuBackground}`;

  return (
    <>
      <ul
        name="menu"
        className={`${menuStyle} text-[white] w-full px-14 mx-auto flex gap-x-8 items-center`}
      >
        <li className="text-2x font-bold hover:text-slate-700 cursor-pointer relative z-100">
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
          className="pointer-events-auto cursor-pointer relative z-100"
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
    </>
  );
};

export default Navbar;
