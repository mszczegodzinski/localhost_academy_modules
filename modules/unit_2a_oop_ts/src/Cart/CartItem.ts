import { v4 as uuidv4 } from 'uuid';
import cartHelpers from './cartHelpers';
import { ICartItem, Category } from './cartDef';
// Stwórz strukturę danych związaną ze sklepem internetowym
// Obiekt charakteryzujący przedmiot:

class CartItem implements ICartItem {
	// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
	// Ma umożliwiać:
	// - modyfikować cenę przedmiotu
	// - określać jego rabat procentowy
	// - dodawać produkt do kategorii
	// - zmianę nazwy, ceny lub rabatu
	private readonly _id: string;
	name: string;
	category: Category;
	price: number;
	discount: number;
	quantity: number;

	constructor(
		name: string,
		category: Category,
		price: number,
		discount: number,
		quantity: number
	) {
		cartHelpers.validateSimpleString(name);
		cartHelpers.validatePrice(price);
		cartHelpers.validateDiscount(discount);

		this._id = uuidv4();
		this.name = name;
		this.category = category;
		this.price = price;
		this.discount = discount;
		this.quantity = quantity;
	}

	get id() {
		return this._id;
	}

	setName(name: string): void {
		cartHelpers.validateSimpleString(name);
	}

	setPrice(price: number): void {
		cartHelpers.validatePrice(price);
	}

	setQuantity(quanity: number): void {
		cartHelpers.validateItemQuantity(quanity);
	}

	setDiscount(discount: number): void {
		cartHelpers.validateDiscount(discount);
	}

	calculatePrice(): number {
		const result = this.quantity * this.price * (1 - this.discount / 100);
		return result;
	}
}

export default CartItem;

const cartItem1 = new CartItem('product1', 'Category 1', 500, 10, 2);
const cartItem2 = new CartItem('product2', 'Category 2', 750, 5, 1);

const result = cartItem1.calculatePrice();
console.log(result);
