import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BiAlbum, BiAward, BiPlus } from "react-icons/bi";
import Image from "next/image";

const NavBar = () => {
	const user = {
		name: "Tom Cook",
		email: "tom@example.com",
	};

	const userNavigation = [
		{ name: "Mi Perfil", href: "#" },
		{ name: "Mensajes", href: "#" },
		{ name: "Grupo", href: "#" },
	];

	let classNames = ({ ...classes }) => {
		return classes.filter(Boolean).join(" ");
	};

	return (
		<>
			<Disclosure as="nav" className="bg-yellow-400">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
							<div className="flex justify-between h-16">
								<div className="flex">
									<div className="-ml-2 mr-2 flex items-center md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
											<span className="sr-only">Open main menu</span>
											{open ? (
												<BiAward
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<BiAlbum
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
									<div className="flex-shrink-0 flex items-center">
										<Image
											className="block lg:hidden h-8 w-auto"
											src="/public/images/workflow-mark-indigo-500.svg"
											alt="Workflow"
											width={100}
											height={100}
										/>
										<Image
											className="hidden lg:block h-8 w-auto"
											src="/public/images/workflow-mark-indigo-500.svg"
											alt="Workflow"
											width={100}
											height={100}
										/>
									</div>
								</div>
								<div className="flex flex-row ">
									<div className="flex-shrink-1 mx-3 ">
										<button
											type="button"
											className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
										>
											<BiPlus
												className="-ml-1 mr-2 h-5 w-5"
												aria-hidden="true"
											/>
											<span>Publicar Post</span>
										</button>
										<div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
											{/* Profile dropdown */}
										</div>
									</div>
									<div>
										<label
											htmlFor="location"
											className="block text-sm font-medium text-gray-700"
										></label>
										<select
											id="location"
											name="location"
											className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
											defaultValue="Canada"
										>
											<option>Enlace 1</option>
											<option>Enlace 2</option>
											<option>Enlace 3</option>
										</select>
									</div>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="md:hidden">
							<div className="pt-4 pb-3 border-t border-gray-700">
								<div className="flex items-center px-5 sm:px-6">
									<div className="flex-shrink-0">
										<Image
											className="h-10 w-10 rounded-full"
											src="/public/images/perfil.jpeg"
											alt=""
											width={100}
											height={100}
										/>
									</div>
									<div className="ml-3">
										<div className="text-base font-medium text-white">
											{user.name}
										</div>
										<div className="text-sm font-medium text-gray-400">
											{user.email}
										</div>
									</div>
									<button
										type="button"
										className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
									>
										<span className="sr-only">
											View notifications
										</span>
										<BiAlbum className="h-6 w-6" aria-hidden="true" />
									</button>
								</div>
								<div className="mt-3 px-2 space-y-1 sm:px-3">
									{userNavigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>{" "}
		</>
	);
};

export default NavBar;
