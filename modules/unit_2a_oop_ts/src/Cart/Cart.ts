import { v4 as uuidv4 } from 'uuid';
import cartHelpers from './cartHelpers';
import CartItem from './CartItem';
import { ICart, ICartItem } from './cartDef';
// Obiekt charakteryzujący koszyk:
class Cart implements ICart {
	// Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
	// Ma umożliwiać:
	// - dodawanie/usuwanie przedmiotów do/z koszyka
	// - zmianę ilości produktu w koszyku
	// - podliczać wartość koszyka uwzględniajac rabaty
	// walidacja do poprawy

	private readonly _id: string;
	items: ICartItem[];
	discount: number;
	discountCode: string;
	total: number;

	constructor(items: CartItem[], discountCode: string) {
		cartHelpers.validateSimpleString(discountCode);

		this._id = uuidv4();
		this.items = items;
		this.discount = 1;
		this.discountCode = discountCode;
		this.total = this.calculateTotalPrice();
	}

	get id() {
		return this._id;
	}

	addItem(item: ICartItem): void {
		const resultElement = items.find(({ id }) => id === item.id);
		if (resultElement) {
			resultElement.quantity += item.quantity;
		} else {
			this.items.push(item);
		}
	}

	removeItem(item: ICartItem) {
		const index = items.findIndex(({ id }) => id === item.id);
		if (index === -1) {
			throw new Error('No item to remove found');
		}
		this.items.splice(index, 1);
	}

	setItemQuantity(item: ICartItem, quantity: number) {
		cartHelpers.validateItemQuantity(quantity);
		const searchedItem = this.items.find(({ id }) => id === item.id);

		if (!searchedItem) {
			throw new Error('No item found');
		}
		if (!quantity) {
			this.removeItem(searchedItem);
		}

		searchedItem.setQuantity(quantity);
	}

	setDiscountCode(discountCode: string): void {
		cartHelpers.validateSimpleString(discountCode);
		this.discountCode = discountCode;

		if (discountCode === '10percent') {
			this.discount = 0.1;
			return;
		}
		if (discountCode === '15percent') {
			this.discount = 0.15;
			return;
		}
		console.log('Invalid discount code');
	}

	// try change using reduce method:
	calculateTotalPrice(): number {
		// total price all product with their specific discount:
		const partResult = this.items.reduce((total, item) => {
			return total + item.calculatePrice();
		}, 0);
		// total price with cart discount:
		const result = partResult * (1 - this.discount / 100);
		return result;
	}
}

export default Cart;

const cartItem1 = new CartItem('product1', 'Category 1', 500, 10, 2);
const cartItem2 = new CartItem('product2', 'Category 2', 750, 5, 1);
const items = [cartItem1, cartItem2];

const cart = new Cart(items, '10percent');
console.log('cart ', cart);
