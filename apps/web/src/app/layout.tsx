import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Bikcraft - Bicicletas Elétricas",
	description:
		"Bicicletas elétricas feitas sob medida para você. Explore o futuro da mobilidade urbana.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>{children}</body>
		</html>
	);
}
