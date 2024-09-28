import React from "react";

interface injectedProps {}

const InizioDesign: React.FC<injectedProps> = ({}) => {
  return (
    <>
        <div className="max-w-5xl mx-atuo bg-white/10 h-96 rounded-lg ring-1 ring-white/30">

        </div>

      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        <div className="col-span-3 w-full bg-white/10 h-96 rounded-lg ring-1 ring-white/30"></div>

        <div className="col-span-2 w-full flex mx-4">
          <div className="w-0.5 rounded-full h-full bg-gradient-to-b from-[#5465FD]/0  via-[#5465FD] to-[#0DB9B9]"></div>

          <div className="ml-6 flex-1">
            <div className="text-xl font-semibold bg-gradient-to-r from-[#5465FD] to-[#0DB9B9] bg-clip-text text-transparent">
              title
            </div>
            <div className="text-gray-400 text-lg">description of title</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InizioDesign;
