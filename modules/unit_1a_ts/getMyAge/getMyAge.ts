// Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia. Funkcja powinna zwrócić Twój aktualny wiek niezależnie od typu inputa, który weźmie
// '1999q'
// getAgeFromDate
// new Date('a')
function getMyAgeFromDate(input: Date): number {
	if (isNaN(input.getFullYear())) {
		throw new Error('Incorrect input type');
	}
	return input.getFullYear();
}

function getMyAgeFromString(input: string): number {
	const currentValue = parseInt(input);
	if (isNaN(currentValue)) {
		throw new Error('Incorrect input type');
	}
	return currentValue;
}

function getMyAgeFromNumber(input: number): number {
	return input;
}

function getMyAge(input: Date | string | number): number | void {
	const currentDate: number = Date.now();
	let inputValue;
	if (typeof input === 'string') {
		inputValue = getMyAgeFromString(input);
	}
	if (typeof input === 'number') {
		inputValue = getMyAgeFromNumber(input);
	}
	if (input instanceof Date) {
		inputValue = getMyAgeFromDate(input);
	}
	if (input.valueOf() > currentDate) {
		throw new Error("You can't give a date from the future");
	}
	// how to remove below if?
	if (inputValue) {
		return new Date().getFullYear() - inputValue;
	}
}

export default getMyAge;
