import React from "react";

const Product = () => {
  return (
    <ul
      name="submenu"
      className="bg-[white] p-1 invisible absolute top-[2rem] group-hover/product:visible group-hover/product:transition-all group-hover/product:ease-out group-hover/product:duration-300 group-hover/product:-left-[7.8rem] group-hover/product:w-screen group-hover/product:top-[3.95rem] pt-[2rem] pb-[3.5rem] px-[3.5rem] drop-shadow-md"
    >
      <li name="submenu-item" className="grid grid-cols-3 gap-y-10">
        <div className="w-[23rem]">
          <h3 className="text-slate-600 text-lg">Compute</h3>
          <ul className="marker:text-neutral-200 text-slate-400 text-sm flex list-disc gap-x-5">
            <li className="first-of-type:list-none hover:text-slate-800 hover:underline">
              Public Cloud
            </li>
            <li className="hover:text-slate-800 hover:underline">
              Private Cloud
            </li>
            <li className="hover:text-slate-800 hover:underline">
              Hybrid Cloud
            </li>
          </ul>
        </div>
        <div className="w-[23rem]">
          <h3 className="text-slate-600 text-lg">Backup</h3>
          <p className="text-slate-400 text-sm hover:text-slate-800 hover:underline">
            Cyber Backup & Cyber Backup
          </p>
        </div>
        <div className="w-[24rem]">
          <h3 className="text-slate-600 text-lg">Applications</h3>
          <ul className="marker:text-neutral-200 text-slate-400 text-sm flex flex-wrap list-disc gap-x-5">
            <li className="first-of-type:list-none hover:text-slate-800 hover:underline">
              Office365
            </li>
            <li className="hover:text-slate-800 hover:underline">GSuite</li>
            <li className="hover:text-slate-800 hover:underline">SpamExpert</li>
            <li className="hover:text-slate-800 hover:underline">
              Email Marketing & API
            </li>
            <li className="list-none only:bg-red-600 hover:text-slate-800 hover:underline">
              Enterprise Email Security
            </li>
          </ul>
        </div>
        <div className="w-[23rem]">
          <h3 className="text-slate-600 text-lg">Value Added Services</h3>
          <ul className="marker:text-neutral-200 text-slate-400 text-sm flex list-disc gap-x-5">
            <li className="first-of-type:list-none hover:text-slate-800 hover:underline">
              Domain
            </li>
            <li className="hover:text-slate-800 hover:underline">SSL</li>
            <li className="hover:text-slate-800 hover:underline">
              Web Vulnerability Scanner
            </li>
          </ul>
        </div>
        <div className="w-[23rem]">
          <h3 className="text-slate-600 text-lg">Managed Services</h3>
        </div>
      </li>
    </ul>
  );
};

export default Product;
