import { validate } from 'uuid';

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

const generateRandomImagePath = () => {
  const paths = [
    './images/book1.png',
    './images/book2.png',
    './images/book3.png',
    './images/book4.png',
    './images/book5.png',
  ];

  const pathIndex = Math.floor(Math.random() * 5);
  return paths[pathIndex];
};

const validateSpecificInstanceInArray = (array, instanceType) => {
  validateArray(array);
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

const validateUuid = (id) => {
  if (!validate(id)) {
    throw new Error('Invalid uuid');
  }
};

const addDays = (date, days) => {
  validateSpecificInstance(date, Date);
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result.toLocaleDateString();
};

const libraryHelpers = {
  validateSimpleString,
  validateArray,
  validateSpecificInstanceInArray,
  validateSpecificInstance,
  generateRandomImagePath,
  validateUuid,
  addDays,
};

export default libraryHelpers;
