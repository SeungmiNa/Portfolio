import React from "react";
import BasicButton from "../buttons/BasicButton";

interface injectedProps {
    onClick?: () => void;
}

const Contact: React.FC<injectedProps> = (
  {
    onClick,
  }
) => {
  return (
    <div className="bg-gray-400/25 w-full py-2">
      <div className="px-6 flex justify-between container max-w-lg">
        <div className="text-white">
          Do you want to ?<div>email</div>
        </div>
        <>
          <BasicButton text="Contact" onClick={onClick}/>
        </>
      </div>
    </div>
  );
};

export default Contact;
