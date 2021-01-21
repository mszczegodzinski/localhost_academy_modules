const validateSimpleString = (simpleString) => {
  const simpleStringRegex = /[a-z0-9]{1,}/i;

  if (!simpleStringRegex.test(simpleString)) {
    throw new Error('Incorrect input data.');
  }
};

const validateRequiredEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
    throw new Error('Incorrect email. You have to pass a valid email');
  }
};

const validateOptionalEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (email === undefined) {
    return email;
  }

  if (!emailRegex.test(email)) {
    throw new Error('Incorrect email. You have to pass a valid email');
  }
};

const emailUtils = {
  validateRequiredEmail,
  validateOptionalEmail,
  validateSimpleString,
};

export default emailUtils;
