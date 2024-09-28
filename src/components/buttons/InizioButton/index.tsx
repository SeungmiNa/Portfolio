import React from "react";

interface injectedProps {
   icon?: any;
   text?: string;
   defaultClass?: string;
   onClcik?: () => void;
}

const InizioButton: React.FC<injectedProps> = (
  {
      icon,
      text,
      defaultClass,
      onClcik,
  }
) => {
  return(
      <div className={` ${defaultClass}`} onClick={onClcik}>{icon}{text}</div>
  )
};

export default InizioButton;
