import React from "react";

const Support = () => {
  return (
    <ul
      name="submenu"
      className="bg-[white] text-slate-500 p-1 invisible absolute top-[2rem] group-hover/support:visible group-hover/support:transition-all group-hover/support:ease-out group-hover/support:duration-300 group-hover/support:right-0 group-hover/support:top-[3.95rem] group-hover/support:w-[12rem] drop-shadow-md"
    >
      <li className="py-2 px-3 hover:text-slate-800">Terms and Conditions</li>
      <li className="py-2 px-3 hover:text-slate-800">CBNCloud wiki</li>
    </ul>
  );
};

export default Support;
