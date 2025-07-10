import React from "react";
import classNames from "classnames";

export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const base = "px-4 py-2 rounded-md font-semibold focus:outline-none transition";
  const variants = {
    default: "bg-[#FFD600] text-[#002366] hover:bg-yellow-500",
    ghost: "bg-transparent text-[#002366] hover:bg-gray-100",
  };

  return (
    <button className={classNames(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
