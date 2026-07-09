import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import Header from "../components/header";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto",
});

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
		<html lang="pt-BR" className={`${poppins.variable} ${roboto.variable}`}>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
