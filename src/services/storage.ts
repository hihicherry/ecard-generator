import localforage from "localforage";
import { type Card } from "../types/card";

export const saveCard = async (card: Card): Promise<void> => {
	try {
		await localforage.setItem("card", card);
	} catch (err) {
		console.error("儲存資料失敗:", err);
	}
};

export const loadCard = async (): Promise<Card | null> => {
	try {
		const card = await localforage.getItem<Card>("card");
		return card;
	} catch (err) {
		console.error("載入資料失敗:", err);
		return null;
	}
};
