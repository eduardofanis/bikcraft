import Image from "next/image";
import Button from "../components/button";

export default function Home() {
	return (
    <main>
      <div className="bg-c12  flex justify-center xl:shadow-[inset_0_-120px_0_0_#fff]">
              <div className=" w-308.75 grid lg:grid-cols-2 px-10">
        <div className="mt-30 p-12 pl-0">
          <h1 aria-label="Bicicletas feitas sob medida" className="font-semibold text-6xl mb-8">Bicicletas feitas sob medida<span className="text-p1">.</span></h1>
          <p className="text-c6 text-2xl mb-6">Bicicletas elétricas de alta precisão e qualidade,  feitas sob medida para o cliente. Explore o mundo na sua velocidade com a Bikcraft.</p>
          <Button variant="primary">Escolha a sua</Button>
        </div>

        <Image width={400} height={800} className="lg:w-xl lg:h-fit w-full h-105 object-cover rounded hidden lg:block" src="/img/fotos/introducao.jpg" alt="" />
        <Image width={400} height={800} className="w-full h-105 object-cover rounded lg:hidden" src="/img/bicicletas/nimbus.jpg" alt="" />
      </div>
      </div>

      <div className="bg-c0  flex justify-center">
        <div className="px-10 mt-30 w-full grid justify-center">
          <div className="w-305.5">
            <h2 aria-label="Escolha a sua" className="font-semibold text-6xl mb-8 text-c12">
            escolha a sua<span className="text-p1">.</span>
            </h2>
          </div>

          <ul className="grid grid-cols-3 gap-8">
            <li>
              <Image width={400} height={800} className="w-full object-cover rounded" src="/img/bicicletas/magic-home.jpg" alt="" />
              <h3 className="font-semibold text-2xl mb-4 text-c12">Magic Might</h3>
              <span className="text-c7 text-lg">R$ 2499</span>
            </li>
            <li>
              <Image width={400} height={800} className="w-full object-cover rounded" src="/img/bicicletas/nimbus-home.jpg" alt="" />
              <h3 className="font-semibold text-2xl mb-4 text-c12">Nimbus Stark</h3>
              <span className="text-c7 text-lg">R$ 2999</span>
            </li>
            <li>
              <Image width={400} height={800} className="w-full object-cover rounded" src="/img/bicicletas/nebula-home.jpg" alt="" />
              <h3 className="font-semibold text-2xl mb-4 text-c12">Nebula Cosmic</h3>
              <span className="text-c7 text-lg">R$ 3999</span>
            </li>
          </ul>
        </div>
      </div>
		</main>
	);
}
