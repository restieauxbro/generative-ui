import React from "react";

const DesktopMockup = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-16 bg-red-300 h-lvh grid place-items-center overflow-hidden relative">
      <img
        src="/ventura-light-bg.jpeg"
        alt=""
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="bg-gray-50 relative rounded-2xl h-[calc(100lvh-8rem)] max-w-screen-2xl w-full grid place-items-center overflow-y-scroll shadow-lg shadow-gray-800/20 border-2 border-gray-300">
        {children}
      </div>
    </div>
  );
};

export default DesktopMockup;
