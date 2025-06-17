import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { type Card } from "../types/card";

interface PhoneInterfaceProps {
	card: Card;
	onTextChange: (text: string) => void;
}

const PhoneInterface: React.FC<PhoneInterfaceProps> = ({
	card,
	onTextChange,
}) => {
	return (
		<div
			className="relative w-96 h-[500px] rounded-3xl p-2"
			style={{
				backgroundImage: `url(${
					card.background || "/public/assets/pinkphone_bg.PNG"
				})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div
				className="absolute w-60 h-[220px] top-[100px] left-[80px] right-[30px] bottom-[100px] flex items-center justify-center"
				style={{
					background: "transparent",
				}}
			>
				<TextareaAutosize
					value={card.text}
					onChange={(e) => onTextChange(e.target.value)}
					placeholder="輸入您的賀卡文字..."
					className="w-full h-full p-2 text-center resize-none bg-transparent outline-none text-black"
					maxRows={5}
					style={{
						fontSize: "16px",
						lineHeight: "1.5",
					}}
				/>
			</div>
		</div>
	);
};

export default PhoneInterface;
