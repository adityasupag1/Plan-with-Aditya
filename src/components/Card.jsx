import { useEffect } from "react";
import { useState } from "react";

export default function Card({ object, removeTour }) {
	const { image, price, info, name, id } = object;
	const [readmore, setReadmore] = useState(false);
	const description = readmore
		? info + "..."
		: `${info.substring(0, 200)}....`;

	const readmoreHandler = () => {
		setReadmore(!readmore);
	};
	return (
		<div className="w-[400px]  h-[max-content] m-4 p-4 flex flex-col rounded-lg shadow-md shadow-black/25 ">
			<img
				className="w-full aspect-square object-cover rounded-[5px]  "
				src={image}
				alt=""
			/>
			<div className="my-5 mx-1">
				<div className="font-bold">
					<h4 className="text-[#1faa59] text-[1.3rem]">
						₹{price}
					</h4>
					<h4 className="text-[1.5rem]">
						{name}
					</h4>
				</div>
				<div>
					{description}
					<span
						onClick={readmoreHandler}
						className="cursor-pointer text-[#12b0e8] font-[600]"
					>
						{readmore
							? `Show Less`
							: `Show More`}
					</span>
				</div>
			</div>
			<button
				onClick={() => removeTour(id)}
				className="cursor-pointer border border-[#b4161b] bg-[#b4161b21] rounded-lg mt-5 py-2 px-8 w-4/5 mx-auto font-bold text-lg transition-all duration-200 ease-in-out hover:bg-red-600 hover:text-white"
			>
				Not Interested
			</button>
		</div>
	);
}
