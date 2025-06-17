import React from "react";
import { type Card } from "../types/card";

interface CardPreviewProps {
	card: Card;
}

const CardPreview: React.FC<CardPreviewProps> = ({ card }) => {
	return (
		<div className="mt-8 w-80 h-48 bg-pink-50 rounded-lg shadow-md flex items-center justify-center p-4">
			<p className="text-md text-center text-gray-600">
				{card.text || "您的賀卡內容將顯示在這裡"}
			</p>
		</div>
	);
};

export default CardPreview;
