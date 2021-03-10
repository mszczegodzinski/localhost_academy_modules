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

	constructor(name: string, category: Category, price: number) {
		cartHelpers.validateSimpleString(name);
		cartHelpers.validatePrice(price);

		this._id = uuidv4();
		this.name = name;
		this.category = category;
		this.price = price;
		this.discount = 0;
		this.quantity = 0;
	}

	get id() {
		return this._id;
	}

	setName(name: string): void {
		cartHelpers.validateSimpleString(name);
		this.name = name;
	}

	setPrice(price: number): void {
		cartHelpers.validatePrice(price);
		this.price = price;
	}

	setQuantity(quanity: number): void {
		cartHelpers.validateItemQuantity(quanity);
		this.quantity = quanity;
	}

	setDiscount(discount: number): void {
		cartHelpers.validateDiscount(discount);
		this.discount = discount;
	}

	calculatePrice(): number {
		// (100 - this.discount / 100) - factor expresses the amount of the discount. Discount range <0,99>
		const result = this.quantity * this.price * (100 - this.discount / 100);
		return result;
	}
}

export default CartItem;

const cartItem1 = new CartItem('product1', 'Category 1', 500);
const cartItem2 = new CartItem('product2', 'Category 2', 750);

const result = cartItem1.calculatePrice();
console.log(result);
