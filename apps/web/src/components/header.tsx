import Link from "next/link";
import { Bikcraft, IconesCart, IconesUser } from "./svg";

const navLinks = [
	{ href: "/bikes", label: "Bicicletas" },
	{ href: "/insurance", label: "Seguros" },
	{ href: "/contact", label: "Contato" },
];

export default function Header() {
	return (
		<header className="bg-c12">
			<div className="mx-auto flex items-center justify-between px-6 py-8 max-w-300">
				<Link href="/">
          <Bikcraft className="h-8 w-auto  transition-colors fill-c0 hover:fill-c4" />
				</Link>

				<div className="flex gap-12 items-center">
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

					<div className="flex gap-6">
						<Link href="/cart">
							<IconesCart className="h-5 w-auto fill-c0 hover:fill-c4 transition-colors" />
						</Link>
						<Link href="/account">
							<IconesUser className="h-5 w-auto fill-c0 hover:fill-c4 transition-colors" />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
