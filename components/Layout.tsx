import { FunctionComponent, ReactNode } from "react";

interface IProps {
	main: ReactNode;
}

const Layout: FunctionComponent<IProps> = ({ main }) => {
	return (
		<>
			<div className="bg-gray-600 max-w-screen mx-auto text-white">
				<nav className="bg-red-300"></nav>
				<div className="px-6 flex items-center justify-between h-16"></div>
				{main}
			</div>
		</>
	);
};

export default Layout;
