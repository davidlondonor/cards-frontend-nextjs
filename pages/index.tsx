import type { NextPage } from "next";
import { BiAlbum } from "react-icons/bi";
import CardMain from "../components/CardMain";
import NavBar from "../components/NavBar";
import NavBarFull from "../components/NavBarFull";

const Home: NextPage = () => {
	return (
		<div>
			<NavBar />
			<h1 className="text-6xl text-yellow-500">Hola</h1>
			<BiAlbum className="text-9xl" />
			<NavBarFull></NavBarFull>
			<CardMain></CardMain>
		</div>
	);
};

export default Home;
