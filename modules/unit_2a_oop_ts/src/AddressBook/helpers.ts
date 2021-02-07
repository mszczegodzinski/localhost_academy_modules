import Contact from "./Contact";

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
  
const validateEmail = (email: string): void => {
	const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (!emailRegex.test(email)) {
		throw new Error('Incorrect email. You have to pass a valid email');
	}
	if (email.includes('>') || email.includes('<') || email.includes('/')) {
		throw new Error('Incorrect sign in the email. >, <, / is not allowed.');
	}
};

const validateResult = <T>(result: T[]): void=> {
  if (!result.length) {
    throw new Error('No result found. Try again.');
  }
};

const helpersFunc = {
	validateSimpleString,
	validateEmail,
	validateResult
};
  
  export default helpersFunc;
  