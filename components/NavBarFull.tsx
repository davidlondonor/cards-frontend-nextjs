import Link from "next/link";
import { BiMessageAltAdd } from "react-icons/bi";

const NavBarFull = () => {
	const authenticated = false;
	const logout = () => null;
	return (
		<>
			<div className="bg-yellow-700 max-w-screen-2xl mx-auto text-white">
				<nav className="bg-gray-600 ">
					<div className="px-6 flex items-center justify-between h-16">
						<Link href="/">
							<a>Logo</a>
						</Link>
						{authenticated ? (
							<>
								<Link href="/post">
									<a>
										<button>
											<BiMessageAltAdd className="text-4xl" />
										</button>
									</a>
								</Link>
								<button onClick={logout}>Salir</button>
							</>
						) : (
							<Link href="/auth">
								<a>Ingreso</a>
							</Link>
						)}
					</div>
				</nav>
			</div>
		</>
	);
};

export default NavBarFull;
