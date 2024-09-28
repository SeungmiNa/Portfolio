import React from "react";

interface injectedProps {}

const InizioBranding: React.FC<injectedProps> = ({}) => {
  return (
    <div className="px-8  text-gray-400">
      <p>
        Supporting products by Designing reusable components for the Design
        Library system.
      </p>

      <div className="badge bg-[#133535] border border-emerald-600 rounded-full text-[#0DB9B9]">
        Naming
      </div>
      <ul className="list-disc">
        <li>Naming</li>
        <li>color</li>
        <li>typography</li>
        <ul className="list-disc">
          components
          <li>grid and layout</li>
          <li>inputbox</li>
          <li>buttons/ toggle/ check</li>
          <li>header</li>
        </ul>
      </ul>
    </div>
  );
};

export default InizioBranding;