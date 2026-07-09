import Button from "../components/button";

export default function Home() {
	return (
		<main>
			<h1>Bikcraft</h1>
			<p>Bicicletas elétricas feitas sob medida.</p>
			<Button variant="primary">Comprar</Button>
			<Button variant="secondary">Comprar</Button>
			<p className="p-8 mt-8">Texto</p>
		</main>
	);
}
