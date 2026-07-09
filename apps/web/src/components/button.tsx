import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../lib/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
}

const variantStyles = {
	primary: "bg-gradient-to-b from-p1 to-p1 hover:to-p6 text-p5 active:bg-p3",
	secondary: "bg-c10 text-c0 hover:bg-c9 active:bg-c8 text-c4",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant = "primary", className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(
					"inline-block cursor-pointer rounded px-7 py-3.5 font-poppins text-xl uppercase font-semibold transition-colors",
					variantStyles[variant],
				)}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";

export default Button;
