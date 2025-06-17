import React, { useState, useEffect } from "react";
import PhoneInterface from "../components/PhoneInterface";
import CardPreview from "../components/CardPreview";
import { type Card } from "../types/card";
import { saveCard, loadCard } from "../services/storage";

const Home: React.FC = () => {
	const [card, setCard] = useState<Card>({ text: "" });

	useEffect(() => {
		loadCard().then((loadedCard) => {
			if (loadedCard) {
				setCard(loadedCard);
			}
		});
	}, []);

	const handleTextChange = (text: string) => {
		const newCard = { ...card, text };
		setCard(newCard);
		saveCard(newCard);
	};

	return (
		<div className="font-pixel min-h-screen bg-gray-100 flex flex-col items-center p-4">
			<h1 className="text-3xl font-bold text-indigo-600 mb-3">
				製作屬於你的小卡
			</h1>
			<PhoneInterface card={card} onTextChange={handleTextChange} />
			<CardPreview card={card} />
		</div>
	);
};

export default Home;
