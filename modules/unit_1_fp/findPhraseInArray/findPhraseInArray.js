// "5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy. Jeśli tak ma zwrócić informacje o tym elemencie (pozycja, wartość).
// Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."

const inputData = [
	'stwórz',
	'sobie',
	'tutaj',
	'więcej',
	'wyrazów',
	'wyrazSzosty',
	'wyrazSiodmy',
	'wyrazOsmy',
	'wyrazDziewiaty',
	'wyrazDziesiaty',
	'wyrazJedenasty',
	'wyrazDwunasty',
	'wyrazTrzynasty',
	'wyrazCzternasty',
	'wyrazPietnasty',
];

// MaMa i mama

function findPhraseInArray(array, phrase) {
	// validacje
	const minArrLength = 1;
	const minPhraseLength = 1;
	if (!Array.isArray(array)) {
		throw new Error('Incorrect type of data. You can only pass an array');
	}
	if (array.length < 1) {
		throw new Error(
			`Incorrect array length. Array should have at least ${minArrLength} words`
		);
	}
	if (typeof phrase !== 'string') {
		throw new Error('Incorrect searching phrase. Phrase can be only a string');
	}
	if (phrase.length < 1) {
		throw new Error(
			`Incorrect phrase length. Phrase should have at least ${minPhraseLength} letters`
		);
	}
	const phraseRegex = new RegExp(phrase, 'i');
	const resultArr = array.reduce((result, currentWord, i) => {
		if (phraseRegex.test(currentWord)) {
			if (result !== undefined) {
				return [...result, [i, currentWord]];
			}
			return [i, currentWord];
		}
	}, []);
	return resultArr;
}

// przykładowe działanie:
// const result = findPhraseInArray(inputData,'tut')
const result = findPhraseInArray(inputData, 'wyraz');
console.log(result);
// result === [ [2, 'tutaj'] ]
