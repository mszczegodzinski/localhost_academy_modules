import { v4 as uuidv4 } from 'uuid';
import cartHelpers from './cartHelpers';
import CartItem from './CartItem';
// Stwórz strukturę danych związaną ze sklepem internetowym

// Obiekt charakteryzujący koszyk:
class Cart {
	// Ma mieć: uuid, listę wybranych przedmiotów, rabat % na koszyk, kod rabatowy
	// Ma umożliwiać:
	// - dodawanie/usuwanie przedmiotów do/z koszyka
	// - zmianę ilości produktu w koszyku
	// - podliczać wartość koszyka uwzględniajac rabaty
	// walidacja do poprawy
	private readonly _id = uuidv4();
	private _total = 0;
	
	constructor(private _items: CartItem[], private _discount: number, private _discountCode: string) {
		cartHelpers.validateDiscount(_discount);
		cartHelpers.validateSimpleString(_discountCode);

		this._items = _items;
		this._discount = _discount;
		this._discountCode = _discountCode;	
		this._total = this.calculateTotalPrice();	
	}

	addItem(item: CartItem) {
		// brak logiki mergowania takich samyhc produktów
		this._items.push(item);
	}

	// id?
	removeItem(item: CartItem) {
		const result = this._items.filter((cartItem) => cartItem.name !== item.name);
		this._items = result;
	}

	setItemQuantity(item: CartItem, quantity: number) {
		cartHelpers.validateItemQuantity(quantity);

		const searchedItem = this._items.filter(currentItem => currentItem.name === item.name)[0];
		if (!quantity) {
			this.removeItem(searchedItem);
		}
		if(!searchedItem) {
			throw new Error('No item found');
		}
		// tutaj wygodniej bedzie uzyc find i szukanie zmienic na po ID
		this._items.forEach(currentItem => {
			if(currentItem.name === item.name){
				currentItem.quantity = quantity;
			}
		})
	}

	setDiscount(cartDiscount: number): void {
		cartHelpers.validateDiscount(cartDiscount);
		this._discount = cartDiscount;
	}

	setDiscountCode(discountCode: string): void {
		cartHelpers.validateSimpleString(discountCode);
		this._discountCode = discountCode;
		// setDiscount do skasowania i na podstawie discount code powinien zmieniac sie discount
	}

	// try change using reduce method:
	calculateTotalPrice(): number {
		// total price all product with their specific discount:
		const partResult = this._items.reduce((total, item) => {
			return total + item.price * item.quantity * (1 - item.discount / 100);
		}, 0);
		// total price with cart discount:
		const result = partResult * (1 - this._discount / 100);
		return result;
	}
}

export default Cart;

const cartItem1 = new CartItem('product1', 'Category 1', 500, 10, 2);
const cartItem2 = new CartItem('product2', 'Category 2', 750, 5, 1);
const items = [cartItem1, cartItem2];

const cart = new Cart(items, 10, '10percent');
console.log('cart ', cart);
