import React from "react";

interface injectedProps {
  label?: string;
  defaultClass?: string;
}

const BasicInputBox: React.FC<injectedProps> = ({
  label,
  defaultClass,
}) => {
  return (
    <>
    <div className="text-white ">{label}</div>
    <div className='border-b border-white placeholder:뭐하지 '>ㅇㅇㅇㅇㅇ</div>
    </>
  );
};

export default BasicInputBox;
