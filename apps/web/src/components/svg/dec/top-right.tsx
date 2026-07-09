import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

export function DecTopRight({ className, ...props }: Props) {
	return (
		<svg
			className={className}
			{...props}
			width="52"
			height="52"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>top-right</title>
			<path
				d="M48 38a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM36 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM24 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM12 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM0 2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
				fill="rgba(127,127,127,.3)"
			/>
		</svg>
	);
}
