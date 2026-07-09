import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function IconesLista({ className, ...props }: Props) {
	return (
		<svg
			className={className}
			{...props}
			width="13"
			height="9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>lista</title>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M12.707.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L5 6.586 11.293.293a1 1 0 0 1 1.414 0Z"
				fill="currentColor"
			/>
		</svg>
	);
}
