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
  constructor(items, discount, discountCode) {
    cartHelpers.validateSpecificInstanceInArray(items, CartItem);
    cartHelpers.validateDiscount(discount);
    cartHelpers.validateSimpleString(discountCode);
    // cartHelpers.validateDiscountCode(discountCode);

    this.id = uuidv4();
    this.items = items;
    this.discount = discount;
    this.discountCode = discountCode;
    this.total = this.calculateTotalPrice();
  }

  addItem(item) {
    cartHelpers.validateSpecificInstance(item, CartItem);
    this.items.push(item);
  }

  // id?
  removeItem(item) {
    cartHelpers.validateSpecificInstance(item, CartItem);
    cartHelpers.validateSimpleString(item.name);
    const result = this.items.filter((cartItem) => cartItem.name !== item.name);
    this.items = result;
  }

  setItemQuantity(item, quantity) {
    cartHelpers.validateSpecificInstance(item, CartItem);
    cartHelpers.validateItemQuantity(quantity);

    if (!quantity) {
      return this.removeItem(searchedItem);
    }
    searchedItem.setQuantity(quantity);
    return null;
  }

  setDiscount(cartDiscount) {
    cartHelpers.validateDiscount(cartDiscount);
    this.discount = cartDiscount;
  }

  setDiscountCode(discountCode) {
    cartHelpers.validateSimpleString(discountCode);
    this.discountCode = discountCode;
  }

  // try change using reduce method:
  calculateTotalPrice() {
    // total price all product with their specific discount:
    const partResult = this.items.reduce((total, item) => {
      return total + item.price * item.quantity * (1 - item.discount / 100);
    }, 0);
    // total price with cart discount:
    const result = partResult * (1 - this.discount / 100);
    return result;
  }
}

export default Cart;

const cartItem1 = new CartItem('product1', 'category1', 500, 10, 2);
const cartItem2 = new CartItem('product2', 'category2', 750, 5, 1);
const items = [cartItem1, cartItem2];

const cart = new Cart(items, 10, '10percent');
console.log('cart ', cart);
