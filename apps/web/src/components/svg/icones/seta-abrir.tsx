import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function IconesSetaAbrir({ className, ...props }: Props) {
	return (
		<svg
			className={className}
			{...props}
			width="14"
			height="6"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>seta-abrir</title>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M6.445.168a1 1 0 0 1 1.11 0l6 4a1 1 0 0 1-1.11 1.664L7 2.202l-5.445 3.63a1 1 0 0 1-1.11-1.664l6-4Z"
				fill="currentColor"
			/>
		</svg>
	);
}
