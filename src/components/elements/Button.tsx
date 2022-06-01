import React, { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  className = "",
  type,
  disabled,
  onClick,
  children,
}) => {
  if (disabled)
    return (
      <div className="py-2 px-4 rounded-xl text-md font-bold">{children}</div>
    );

  return (
    <button
      className="py-2 px-4 rounded-xl text-md font-bold bg-sky-800 text-white"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
