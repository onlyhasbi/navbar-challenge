import React from "react";

const Solution = () => {
  return (
    <ul
      name="submenu"
      className="bg-[white] p-1 invisible absolute top-[2rem] group-hover/solution:visible group-hover/solution:transition-all group-hover/solution:ease-out group-hover/solution:duration-300 group-hover/solution:-left-[13.8rem] group-hover/solution:w-screen group-hover/solution:top-[3.95rem] pt-[2rem] pb-[3.5rem] px-[3.5rem] drop-shadow-md"
    >
      <li name="submenu-item" className="grid grid-cols-3 gap-y-10">
        <div className="w-[23rem]">
          <h3 className="text-slate-600 text-lg">Cloud Collaboration</h3>
          <p className="text-slate-400 text-sm">
            Companies are now relying on team collaboration to innovate despite
            any special circumstances
          </p>
        </div>
        <div className="w-[23rem]">
          <h3 className="text-slate-600 text-lg">Disaster Recovery</h3>
          <p className="text-slate-400 text-sm">
            Built on our trusted platforms.
          </p>
        </div>
        <div className="w-[23rem]">
          <h3 className="text-slate-600 text-lg">Cloud Hosting</h3>
          <p className="text-slate-400 text-sm">
            We provide you the overall benefits of quality cloud hosting for
            your site
          </p>
        </div>
        <div className="w-[23rem]">
          <h3 className="text-slate-600 text-lg">Multicloud Implementation</h3>
          <p className="text-slate-400 text-sm">
            Use multiple cloud services to house your business’s functions
          </p>
        </div>
        <div className="w-[23rem]">
          <h3 className="text-slate-600 text-lg">Application Modernization</h3>
          <p className="text-slate-400 text-sm">
            Enables you to modernize your existing apps, build and run them
          </p>
        </div>
      </li>
    </ul>
  );
};

export default Solution;
