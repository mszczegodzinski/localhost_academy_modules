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

	if (!email.match(emailRegex)) {
		throw new Error('Incorrect email. You have to pass a valid email');
	}
	if (email.includes('>') || email.includes('<') || email.includes('/')) {
		throw new Error('Incorrect sign in the email. >, <, / is not allowed.');
	}
};

const validateEmails = (emails: string[]): void => {
	emails.forEach((email) => {
		validateEmail(email);
	});
};

const emailUtils = {
	validateEmail,
	validateEmails,
	validateSimpleString,
};

export default emailUtils;
