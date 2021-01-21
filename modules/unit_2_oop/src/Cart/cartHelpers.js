const validateSimpleString = (simpleString) => {
  const simpleStringRegex = /[a-z0-9]{1,}/i;

  if (!simpleStringRegex.test(simpleString)) {
    throw new Error('Incorrect input data.');
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

const validatePrice = (price) => {
  if (typeof price !== 'number') {
    throw new Error('Incorrect price. Input data have to be a number');
  }
  if (Number.isNaN(price)) {
    throw new Error('Incorrect price. Price cannot be Not a Number type.');
  }
  if (price <= 0) {
    throw new Error(`Price have to be greater than 0`);
  }
};

const validateCategory = (category, allowedCategories) => {
  const newCategory = category.toLowerCase();
  if (typeof category !== 'string') {
    throw new Error('Incorrect name. Input data have to be a string');
  }
  if (!category.trim().length) {
    throw new Error('Incorrect category length');
  }
  const isValidCategory = allowedCategories.some(
    (allowCategory) => allowCategory === newCategory
  );
  if (!isValidCategory) {
    const message = `Invalid category. You can choose one of them: ${allowedCategories}`;
    throw new Error(message);
  }
};

const validateArray = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Invalid data type. It's not an array.");
  }
  if (!array.length) {
    throw new Error(
      'Invalid list length. List length should be greater than 0'
    );
  }
};

const validateDiscount = (discount) => {
  const newDiscount = parseInt(discount, 10);
  if (typeof newDiscount !== 'number') {
    throw new Error('Invalid discount. Discount have to be an integer type.');
  }
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

const validateItemAmount = (itemAmount) => {
  const newItemAmount = parseInt(itemAmount, 10);
  if (typeof newItemAmount !== 'number') {
    throw new Error('Invalid item amount. Amount have to be an integer type.');
  }
  if (Number.isNaN(newItemAmount)) {
    throw new Error(
      'Invalid item amount. Amount cannot be a Not a Number type.'
    );
  }
  if (newItemAmount < 0) {
    throw new Error('Incorrect item amount. Amount cannot be less than 0.');
  }
};

const validateSpecificInstanceInArray = (array, instanceType) => {
  array.forEach((element) => {
    if (!(element instanceof instanceType)) {
      const message = `All positions in contact list have to be ${instanceType} instance.`;
      throw new Error(message);
    }
  });
};

const validateSpecificInstance = (element, instanceType) => {
  if (!(element instanceof instanceType)) {
    const message = `Element have to be ${instanceType} instance.`;
    throw new Error(message);
  }
};

const cartHelpers = {
  validateSimpleString,
  validatePrice,
  validateCategory,
  validateArray,
  validateDiscount,
  validateItemAmount,
  validateSpecificInstanceInArray,
  validateSpecificInstance,
};

export default cartHelpers;
