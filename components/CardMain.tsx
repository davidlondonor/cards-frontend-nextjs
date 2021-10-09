import { BiAlbum } from "react-icons/bi";
import Image from "next/image";
import UserBar from "./common/UserBar";

const Card = () => {
	const text = ["Tema 1", "Tema 2", "Tema 3"];
	const imagen = "public/images/imagen-principal.jpg";

	return (
		<div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10 w-96">
			<picture className="w-full">
				<source
					srcSet={`${imagen} 416w`}
					media="(max-width:416px)"
					sizes="(max-width:416px) 100vw, 416px"
					type="image/webp"
				/>
				<source
					srcSet={`${imagen} 576w`}
					media="(max-width:576px)"
					sizes="(max-width:576px) 100vw, 576px"
					type="image/webp"
				/>
				<source
					srcSet={`${imagen} 700w`}
					media="(max-width:700px)"
					sizes="(max-width:700px) 100vw, 700px"
					type="image/webp"
				/>
				<Image
					className="w-full rounded-t-3xl h-heighImgFeed object-cover"
					sizes="(max-width: 360px) 100vw, (max-width: 420px) 100vw, (max-width: 500px) 100vw"
					src="/images/imagen-principal.jpg"
					alt="montanas verdes y altas"
					decoding="async"
					loading="lazy"
					width={25}
					height={25}
				/>
			</picture>
			<UserBar></UserBar>
			<ul role="list" className="space-y-4">
				{text.map((feature) => (
					<li key={feature} className="flex items-start">
						<div className="flex-shrink-0">
							<BiAlbum
								className="flex-shrink-0 h-6 w-6 text-green-500"
								aria-hidden="true"
							/>
						</div>
						<p className="ml-3 text-base font-medium text-gray-500">
							{feature}
						</p>
					</li>
				))}
			</ul>
			<div className="mt-8">
				<div className="rounded-lg shadow-md">
					<a
						href="#"
						className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-yellow-600 hover:bg-gray-50"
						aria-describedby="tier-hobby"
					>
						Quieres comentar
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
