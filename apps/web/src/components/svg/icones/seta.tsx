import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function IconesSeta({ className, ...props }: Props) {
	return (
		<svg
			className={className}
			{...props}
			width="18"
			height="10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>seta</title>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L14.586 6H1a1 1 0 0 1 0-2h13.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
				fill="currentColor"
			/>
		</svg>
	);
}
