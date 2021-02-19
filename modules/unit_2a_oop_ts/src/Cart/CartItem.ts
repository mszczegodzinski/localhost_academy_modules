import { v4 as uuidv4 } from 'uuid';
import cartHelpers from './cartHelpers';
import { Category } from './cartHelpers';
// Stwórz strukturę danych związaną ze sklepem internetowym
// Obiekt charakteryzujący przedmiot:

interface ICartItem {
	id: string;
	name: string;
	category: Category;
	price: number;
	discount: number;
	quantity: number;
}
class CartItem implements ICartItem {
	// Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
	// Ma umożliwiać:
	// - modyfikować cenę przedmiotu
	// - określać jego rabat procentowy
	// - dodawać produkt do kategorii
	// - zmianę nazwy, ceny lub rabatu
	private readonly _id = uuidv4();
	constructor(
		private _name: string,
		private _category: Category,
		private _price: number,
		private _discount: number,
		private _quantity: number
	) {
		cartHelpers.validateSimpleString(_name);
		cartHelpers.validateSimpleString(_category);
		cartHelpers.validatePrice(_price);
		cartHelpers.validateDiscount(_discount);

		this._name = _name;
		this._category = _category;
		this._price = _price;
		this._discount = _discount;
		this._quantity = _quantity;
	}

	// get name() {
	// 	return this._name;
	// }

	// set name(name: string) {
	// 	cartHelpers.validateSimpleString(name);
	// 	this._name = name;
	// }

	// get price() {
	// 	return this._price;
	// }

	// set price(price: number) {
	// 	cartHelpers.validatePrice(price);
	// 	this._price = price;
	// }

	// get category() {
	// 	return this._category;
	// }

	// set category(category: Category) {
	// 	cartHelpers.validateSimpleString(category);
	// 	this._category = category;
	// }

	// get discount() {
	// 	return this._discount;
	// }
	// // integer 0-99
	// set discount(discount: number) {
	// 	cartHelpers.validateDiscount(discount);
	// 	this._discount = discount;
	// }

	// get quantity() {
	// 	return this._quantity;
	// }

	// set quantity(quantity: number) {
	// 	cartHelpers.validateItemQuantity(quantity);
	// 	this._quantity = quantity;
	// }
}

export default CartItem;

const cartItem1 = new CartItem('product1', 'Category 1', 500, 10, 2);
const cartItem2 = new CartItem('product2', 'Category 2', 750, 5, 1);
