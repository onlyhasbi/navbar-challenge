import React from "react";

const About = () => {
  return (
    <ul
      name="submenu"
      className="bg-[white] text-slate-500 p-1 invisible absolute top-[2rem] group-hover/about:visible group-hover/about:transition-all group-hover/about:ease-out group-hover/about:duration-300 group-hover/about:-right-[2rem] group-hover/about:top-[3.95rem] group-hover/about:w-[8rem] drop-shadow-md"
    >
      <li className="py-2 px-3 hover:text-slate-800">Company</li>
      <li className="py-2 px-3 hover:text-slate-800">Publications</li>
      <li className="py-2 px-3 hover:text-slate-800">Contact</li>
    </ul>
  );
};

export default About;
