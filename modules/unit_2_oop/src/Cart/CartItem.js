import { v4 as uuidv4 } from 'uuid';
import helpersFunc from '../AddressBook/helpers';
import cartHelpers from './cartHelpers';
// Stwórz strukturę danych związaną ze sklepem internetowym

//
// Cart (cartItems) || Shop (categories, products) -> allowed
// CartItem (product + qty)
// Product (name, price, category)

// Obiekt charakteryzujący przedmiot:
class CartItem {
  // Ma miec: Nazwę, Kategorię, Cenę, Rabat % na przedmiot, uuid
  // Ma umożliwiać:
  // - modyfikować cenę przedmiotu
  // - określać jego rabat procentowy
  // - dodawać produkt do kategorii
  // - zmianę nazwy, ceny lub rabatu
  constructor(name, category, price, discount, quantity) {
    cartHelpers.validateSimpleString(name);
    cartHelpers.validateSimpleString(category);
    // cartHelpers.validateCategory(category);
    cartHelpers.validatePrice(price);
    cartHelpers.validateDiscount(discount);

    this.id = uuidv4();
    this.name = name;
    this.category = category;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity;
    // this.allowedCategories = ['health', 'fitness', 'rtv', 'agd'];
  }

  setName(name) {
    cartHelpers.validateSimpleString(name);
    return name;
  }

  setPrice(price) {
    cartHelpers.validatePrice(price);
    return price;
  }

  setCategory(category) {
    helpersFunc.validateSimpleString(category);
  }

  // integer 0-99
  setDiscount(discount) {
    cartHelpers.validateDiscount(discount);
    return discount;
  }

  setQuantity(quantity) {
    cartHelpers.validateItemAmount(quantity);
    return quantity;
  }
}

export default CartItem;

const cartItem1 = new CartItem('product1', 'category1', 500, 10, 2);
const cartItem2 = new CartItem('product2', 'category2', 750, 5, 1);
