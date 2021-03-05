const validateSimpleString = (simpleString: string): void => {
	if (!simpleString.trim().length) {
		throw new Error('Incorrect data length. Length cannot be 0');
	}
	if (
		simpleString.includes('>') ||
		simpleString.includes('<') ||
		simpleString.includes('/')
	) {
		throw new Error(
			'Incorrect sign in the input string. >, <, / is not allowed.'
		);
	}
};

const validatePrice = (price: number): void => {
	if (Number.isNaN(price)) {
		throw new Error('Incorrect price. Price cannot be Not a Number type.');
	}
	if (price <= 0) {
		throw new Error(`Price have to be greater than 0`);
	}
};

const validateDiscount = (discount: number) => {
	const newDiscount = parseInt(discount.toString(), 10);
	if (Number.isNaN(newDiscount)) {
		throw new Error(
			'Invalid discount type. Discount cannot be a Not a Number type.'
		);
	}
	if (newDiscount < 0 || newDiscount > 99) {
		throw new Error(
			'Incorrect discount value. Discount can be only a number in the range 0 to 99.'
		);
	}
};

const validateItemQuantity = (itemAmount: number) => {
	const newItemAmount = parseInt(itemAmount.toString(), 10);
	if (Number.isNaN(newItemAmount)) {
		throw new Error(
			'Invalid item amount. Amount cannot be a Not a Number type.'
		);
	}
	if (newItemAmount < 0) {
		throw new Error('Incorrect item amount. Amount cannot be less than 0.');
	}
};

const cartHelpers = {
	validateSimpleString,
	validatePrice,
	validateDiscount,
	validateItemQuantity,
};

export default cartHelpers;
