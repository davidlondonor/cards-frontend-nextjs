import { BiMessageAltAdd, BiLike, BiDislike } from "react-icons/bi";

const UserBar = () => {
	return (
		<div className="bg-greenFoFo flex justify-items-center ">
			<BiLike className="text-3xl mx-9 my-1 text-gray-700 hover:text-green-700" />
			<BiDislike className="text-3xl mx-9 my-1 text-gray-700  hover:text-green-700" />
			<BiMessageAltAdd className="text-3xl mx-9 my-1 text-gray-700  hover:text-green-700" />
		</div>
	);
};

export default UserBar;
