// import { twMerge } from "tailwind-merge";
// import { clsx } from "clsx";
import cn from "../../utils/cn";

// `bg-purple-500 px-3 py-2 rounded-md ${className} ${
//     variant == "outline" ? "border border-purple-400 bg-opacity-10" : ""
//   }`

const Button = ({ className, outline }) => {
  return (
    <button
      className={cn(
        "bg-purple-500 px-3 py-2 rounded-md",
        {
          "border border-purple-400 bg-opacity-10": outline,
        },
        className
      )}
    >
      Click
    </button>
  );
};

export default Button;
