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

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.match(emailRegex)) {
    throw new Error('Incorrect email. You have to pass a valid email');
  }
  if (email.includes('>') || email.includes('<') || email.includes('/')) {
    throw new Error('Incorrect sign in the email. >, <, / is not allowed.');
  }
};

const validateArray = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Invalid data type. It's not an array.");
  }
  // czy dlugosc wieksza od 0?
  if (!array.length) {
    throw new Error(
      'Invalid list length. List length should be greater than 0'
    );
  }
};

const validateResult = (result) => {
  if (!result.length) {
    throw new Error('No result found. Try again.');
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

const helpersFunc = {
  validateSimpleString,
  validateEmail,
  validateArray,
  validateResult,
  validateSpecificInstance,
  validateSpecificInstanceInArray,
};

export default helpersFunc;
