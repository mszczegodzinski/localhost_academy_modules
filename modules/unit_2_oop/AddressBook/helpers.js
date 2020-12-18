const validateName = (name) => {
  if (typeof name !== 'string') {
    throw new Error('Incorrect name. Input data have to be a string');
  }
  if (!name.trim().length) {
    throw new Error('Incorrect name length');
  }
  if (name.includes('>') || name.includes('<') || name.includes('/')) {
    throw new Error('Incorrect sign in the name. >, <, / is not allowed.');
  }
  return name;
};

const validateSurname = (surname) => {
  if (typeof surname !== 'string') {
    throw new Error('Incorrect surname. Input data have to be a string');
  }
  if (!surname.trim().length) {
    throw new Error('Incorrect surname length');
  }
  if (surname.includes('>') || surname.includes('<') || surname.includes('/')) {
    throw new Error('Incorrect sign in the surname. >, <, / is not allowed.');
  }
  return surname;
};

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (typeof email !== 'string') {
    throw new Error('Incorrect email. Input data have to be a string');
  }
  if (!email.match(emailRegex)) {
    throw new Error('Incorrect email. You have to pass a valid email');
  }
  if (email.includes('>') || email.includes('<') || email.includes('/')) {
    throw new Error('Incorrect sign in the email. >, <, / is not allowed.');
  }
  return email;
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
  return array;
};

const helpersFunc = {
  validateName,
  validateSurname,
  validateEmail,
  validateArray,
};

export default helpersFunc;
