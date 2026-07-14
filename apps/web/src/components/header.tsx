"use client";

import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "../hooks/use-media-query";
import { Bikcraft } from "./svg";

const navLinks = [
	{ href: "/bikes", label: "Bicicletas" },
	{ href: "/insurance", label: "Seguros" },
	{ href: "/contact", label: "Contato" },
	{ href: "/cart", label: "Carrinho" },
	{ href: "/account", label: "Conta" },
];

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 1024px)");

	return (
		<header className="bg-c12">
			<div className="mx-auto flex items-center justify-between px-6 py-8 max-w-300">
				<Link href="/">
					<Bikcraft className="h-8 w-auto transition-colors fill-c0 hover:fill-c4" />
				</Link>

				{isDesktop ? (
					<nav>
						<ul className="flex gap-10">
							{navLinks.map(({ href, label }) => (
								<li key={href}>
									<Link
										href={href}
										className="font-poppins text-lg text-c0 relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				) : (
					<>
						<button
							type="button"
							className="flex flex-col gap-1.5 p-2"
							onClick={() => setMenuOpen(!menuOpen)}
							aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
						>
							<span
								className={`block h-0.5 w-6 bg-c0 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
							/>
							<span
								className={`block h-0.5 w-6 bg-c0 transition-all ${menuOpen ? "opacity-0" : ""}`}
							/>
							<span
								className={`block h-0.5 w-6 bg-c0 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
							/>
						</button>

						{menuOpen && (
							<div className="fixed inset-0 top-0 z-50 flex flex-col bg-c12 p-6">
								<div className="flex justify-end">
									<button
										type="button"
										className="flex flex-col gap-1.5 p-2"
										onClick={() => setMenuOpen(false)}
										aria-label="Fechar menu"
									>
										<span className="block h-0.5 w-6 bg-c0 rotate-45 translate-y-2" />
										<span className="block h-0.5 w-6 bg-c0 opacity-0" />
										<span className="block h-0.5 w-6 bg-c0 -rotate-45 -translate-y-2" />
									</button>
								</div>
								<nav className="flex-1 flex items-center justify-center">
									<ul className="flex flex-col items-center gap-10">
										{navLinks.map(({ href, label }) => (
											<li key={href}>
												<Link
													href={href}
													className="font-poppins text-3xl text-c0"
													onClick={() => setMenuOpen(false)}
												>
													{label}
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
						)}
					</>
				)}
			</div>
		</header>
	);
}
