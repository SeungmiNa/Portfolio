import React from "react";

interface injectedProps {
  icon?: any;
  text?: string;
  defaultClass?: string;
  onClick?: () => void;
}

const BasicButton: React.FC<injectedProps> = (
  {
    icon,
    text,
    defaultClass,
    onClick,
  }
) => {
  return (
    <div className={`inline-flex rounded-full bg-white items-center px-3 py-1 hover:bg-slate-100 active:bg-slate-400 ${defaultClass}`} onClick={onClick}>
      {icon}
      {text}
    </div>
  );
};

export default BasicButton;
