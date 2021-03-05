export type Category = 'Category 1' | 'Category 2' | 'Category 3';

export interface ICartItem {
	id: string;
	name: string;
	category: Category;
	price: number;
	discount: number;
	quantity: number;
	setName(name: string): void;
	setPrice(price: number): void;
	setQuantity(quanity: number): void;
	setDiscount(discount: number): void;
	calculatePrice(): number;
}

export interface ICart {
	readonly id: string;
	items: ICartItem[];
	discount: number;
	discountCode: string;
	total: number;
	addItem(item: ICartItem): void;
	calculateTotalPrice(): number;
}
