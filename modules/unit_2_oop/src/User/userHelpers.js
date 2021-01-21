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
  if (!array.length) {
    throw new Error(
      'Invalid list length. List length should be greater than 0'
    );
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

const validatePassword = (password) => {
  // at least 1 upper case, 1 lower case, 1 special sign, min 8 signs length
  // {1,3}
  const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)/; // sprawdzic z nawiasami kwadratowymi lub bez.
  validateSimpleString(password);
  if (password.trim().length < 8) {
    throw new Error(
      'Incorrect data length. Password must have at least 8 signs'
    );
  }
  if (!passwordRegex.test(password)) {
    throw new Error(
      'Invalid password pattern. Password must have at least 1 upper case, 1 lower case and 1 special sign'
    );
  }
};

const validateDate = (inputDate) => {
  if (!(inputDate instanceof Date)) {
    throw new Error('Not a date');
  }
  if (isNaN(inputDate.getFullYear())) {
    throw new Error('Invalid date');
  }
};

const validateGender = (inputDate) => {
  const genderPattern = /^male$|^female$/i;
  if (!genderPattern.test(inputDate)) {
    throw new Error('Incorrect gender. Only male or female is allowed.');
  }
};

const validateUserType = (inputDate) => {
  const genderPattern = /^admin$|^regular$/i;
  if (!genderPattern.test(inputDate)) {
    throw new Error('Incorrect user type. Only admin or regular is allowed.');
  }
};

const validateUserAccess = (userToModify, modifierUser) => {
  validateUserType(userToModify.type);
  validateUserType(modifierUser.type);
  if (userToModify.id !== modifierUser.id && modifierUser.type !== 'admin') {
    throw new Error('Only admin can modify user data');
  }
};

const libraryHelpers = {
  validateArray,
  validateDate,
  validateEmail,
  validateGender,
  validatePassword,
  validateSimpleString,
  validateSpecificInstance,
  validateSpecificInstanceInArray,
  validateUserAccess,
  validateUserType,
};

export default libraryHelpers;
