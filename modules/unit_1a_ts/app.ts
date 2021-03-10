import task from './task1';
import getMyAge from './getMyAge/getMyAge';
import arrayIntoRandomChunks from './arrayIntoRandomChunks/arrayIntoRandomChunks';
import findPhraseInArray from './findPhraseInArray/findPhraseInArray';
import generateHuman from './generateHuman/generateHuman';
import {
	generateArrayWithRandomNumbers,
	generateArrayOfArrays,
} from './generateArrayWithRandomNumbers/generateArrayWithRandomNumbers';
import { resultFilter } from './arrayMethods/arrayMethods';

// task()

// ====================================================

// const result1 = getMyAge(new Date(1990, 1, 1));
// const result1 = getMyAge(new Date(2021, 11, 5));
// const result1 = getMyAge(new Date('cokolwiek'));
// const result2 = getMyAge('1990');
// const result3 = getMyAge(1990);

// console.log(result1);
// console.log(result2);
// console.log(result3);

// =====================================================

// const alphabet = 'abcdefghijklmnoprstuwxyz'.split('');
// const resultChunks = arrayIntoRandomChunks(alphabet);
// console.log(resultChunks);

// ======================================================

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
// const findPhraseResult = findPhraseInArray(inputData, 'wyraz');
// console.log(findPhraseResult);

// const human = generateHuman();
// console.log(human);
// ======================================================

// const resultGenerateArrayWithRandomNumbers = generateArrayWithRandomNumbers();
// console.log(resultGenerateArrayWithRandomNumbers);

// const resultArrayofArrays = generateArrayOfArrays();
// console.log(resultArrayofArrays);

// ======================================================

console.log(resultFilter);
