"use client";

import Image from "next/image";
import Button from "../components/button";
import { useMediaQuery } from "../hooks/use-media-query";

const bikeList = [
	{
		id: 1,
		name: "Magic Might",
		price: 2499,
		image: "/img/bicicletas/magic-home.jpg",
	},
	{
		id: 2,
		name: "Nimbus Stark",
		price: 2999,
		image: "/img/bicicletas/nimbus-home.jpg",
	},
	{
		id: 3,
		name: "Nebula Cosmic",
		price: 3999,
		image: "/img/bicicletas/nebula-home.jpg",
	},
];

export default function Home() {
	const isLargeScreen = useMediaQuery("(min-width: 1024px)");

	return (
		<main className="bg-c12 flex flex-col justify-center">
			<div className="flex justify-center xl:shadow-[inset_0_-120px_0_0_#fff] shadow-[inset_0_-60px_0_0_#fff]">
				<div className="max-w-308.75 w-full grid lg:grid-cols-2 px-10">
					<div className="mt-30 p-12 pl-0">
						<h1
							aria-label="Bicicletas feitas sob medida"
							className="font-semibold text-6xl mb-8"
						>
							Bicicletas feitas sob medida<span className="text-p1">.</span>
						</h1>
						<p className="text-c6 text-2xl mb-6">
							Bicicletas elétricas de alta precisão e qualidade, feitas sob
							medida para o cliente. Explore o mundo na sua velocidade com a
							Bikcraft.
						</p>
						<Button variant="primary">Escolha a sua</Button>
					</div>

					{isLargeScreen ? (
						<Image
							width={400}
							height={800}
							className="lg:w-xl lg:h-fit w-full h-105 object-cover rounded"
							src="/img/fotos/introducao.jpg"
							alt=""
						/>
					) : (
						<Image
							width={400}
							height={800}
							className="w-full h-105 object-cover rounded"
							src="/img/bicicletas/nimbus.jpg"
							alt=""
						/>
					)}
				</div>
			</div>

			<div className="bg-c0 w-full pt-30 flex flex-col items-center gap-10">
				<div className="w-full max-w-308.75 px-10">
					<h2
						aria-label="Escolha a sua"
						className="font-semibold text-6xl text-c12"
					>
						escolha a sua<span className="text-p1">.</span>
					</h2>
				</div>

				<ul className="w-full max-w-375 px-10 grid md:grid-cols-3 gap-8">
					{bikeList.map((bike) => (
						<li key={bike.id} className="group cursor-pointer">
							<Image
								width={400}
								height={800}
								className="w-full object-cover rounded mb-4"
								src={bike.image}
								alt=""
							/>
							<h3 className="font-semibold text-3xl text-c12 flex items-center mb-1">
								<span className="bg-p1 inline-block w-3 group-hover:w-6 h-2 mr-2 transition-all"></span>
								{bike.name}
							</h3>
							<span className="text-c7 font-medium text-lg ml-5">
								R$ {bike.price}
							</span>
						</li>
					))}
				</ul>
			</div>

			<div className="flex justify-center xl:shadow-[inset_0_-120px_0_0_#fff] shadow-[inset_0_-60px_0_0_#fff]">
				<div className="max-w-308.75 w-full grid lg:grid-cols-2 px-10">
					<div className="mt-30 p-12 pl-0">
						<h1
							aria-label="Bicicletas feitas sob medida"
							className="font-semibold text-6xl mb-8"
						>
							Bicicletas feitas sob medida<span className="text-p1">.</span>
						</h1>
						<p className="text-c6 text-2xl mb-6">
							Bicicletas elétricas de alta precisão e qualidade, feitas sob
							medida para o cliente. Explore o mundo na sua velocidade com a
							Bikcraft.
						</p>
						<Button variant="primary">Escolha a sua</Button>
					</div>

					{isLargeScreen ? (
						<Image
							width={400}
							height={800}
							className="lg:w-xl lg:h-fit w-full h-105 object-cover rounded"
							src="/img/fotos/introducao.jpg"
							alt=""
						/>
					) : (
						<Image
							width={400}
							height={800}
							className="w-full h-105 object-cover rounded"
							src="/img/bicicletas/nimbus.jpg"
							alt=""
						/>
					)}
				</div>
			</div>
		</main>
	);
}
