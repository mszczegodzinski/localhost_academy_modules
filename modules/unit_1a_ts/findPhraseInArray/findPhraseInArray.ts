// "5) Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy. Jeśli tak ma zwrócić informacje o tym elemencie (pozycja, wartość).
// Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."

const inputData: string[] = [
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

function findPhraseInArray(
	array: string[],
	phrase: string
): string[] | undefined {
	const minArrLength = 1;
	const minPhraseLength = 1;

	if (array.length < 1) {
		throw new Error(
			`Incorrect array length. Array should have at least ${minArrLength} words`
		);
	}
	if (phrase.length < 1) {
		throw new Error(
			`Incorrect phrase length. Phrase should have at least ${minPhraseLength} letters`
		);
	}
	const phraseRegex = new RegExp(phrase, 'i');
	const resultArr = array.reduce(
		// jakas unia w result?
		(result: any, currentWord: string, index: number) => {
			if (phraseRegex.test(currentWord)) {
				if (result !== undefined) {
					return [...result, [index, currentWord]];
				}
				return [[index, currentWord]];
			}
		},
		[]
	);
	return resultArr;
}

export default findPhraseInArray;
