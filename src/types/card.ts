export interface Card {
	text: string;
	background?: string; // 用於儲存背景圖 URL
	stickers?: { id: string; x: number; y: number }[]; // 用於儲存貼紙位置
}
