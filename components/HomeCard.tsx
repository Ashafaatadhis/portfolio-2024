import React from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const HomeCard: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "hover:opacity-80 transition-opacity overflow-hidden   rounded-2xl bg-[#F3F3FD] dark:bg-[#1E1E2E]   border  dark:border-[#2E2E44]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default HomeCard;
