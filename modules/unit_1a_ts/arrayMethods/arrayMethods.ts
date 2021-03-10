// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while

//function mapFn(array, callback){}:

// [0,1,2,3,4].map((el)=>el*2) -> [0,2,4,6,8]
// mapFn([0,1,2,3,4], (el)=>el*2) -> [0,2,4,6,8]

type mapCb<T, U> = (element: T, index: number, array: T[]) => U;

function mapFn<T, U>(array: T[], callback: mapCb<T, U>): U[] {
	const resultArr: U[] = [];
	array.forEach((el, i, array) => {
		resultArr.push(callback(el, i, array));
	});
	return resultArr;
}

const exampleTab = [1, 2, 3, 4];

const multiplyElementsBy2 = (el: number): number => {
	const result = el * 2;
	return result;
};

const result = mapFn(exampleTab, multiplyElementsBy2);

// console.log('test for map function: ');
// const result1 = exampleTab.map((e) => e * 2);
// console.log(result);
// console.log(result1);

//================================================
//function filterFn(array, callback){}
type filterCb<T> = (element: T, index: number, array: T[]) => boolean;

function filterFn<T>(array: T[], callback: filterCb<T>): T[] {
	const resultArr: T[] = [];
	array.forEach((el, i, array) => {
		const res = callback(el, i, array);
		if (res) {
			resultArr.push(el);
		}
	});
	return resultArr;
}

const filterElementsBiggerThan2 = (el: number): boolean => {
	if (el > 2) {
		return true;
	}
	return false;
};

// console.log('test for filter function: ');
const exampleTab1 = [1, 2, 3, 4, 5, 6];
export const resultFilter = filterFn(exampleTab1, filterElementsBiggerThan2);
// const resultFilter1 = exampleTab1.filter((el) => filterElementsBiggerThan2(el));
// console.log('filter: ', resultFilter1);
// console.log('my filter: ', resultFilter);

//================================================
const reduceExample = [0, 1, 2, 3, 4];
//function reduceFn(array, callback, initial){}

//
type reduceCb<T, U> = (
	previousValue: U | U[],
	currentValue: T,
	index: number,
	array: T[]
) => U | U[];

function reduceFn<T, U>(
	array: T[],
	callback: reduceCb<T, U>,
	initial?: U
): U | U[] {
	let previousValue = initial ? initial : array;
	let result = previousValue;

	array.forEach((currentValue, i) => {
		result = callback(result, currentValue, i, array);
	});
	return result;
}

const sumElement = (currentResult: number, currentValue: number): number => {
	const result = currentResult + currentValue;
	return result;
};

// const resultReduce1 = reduceExample.reduce(function (
// 	previousValue,
// 	currentValue
// ) {
// 	return previousValue + currentValue;
// },
// 10);
// console.log('test for reduce function: ');
// console.log(resultReduce1);
const initialReduce = 10;
const resultReduceFn1 = reduceFn(reduceExample, sumElement, 0);
// const resultReduceFn1 = reduceFn(
// 	reduceExample,
// 	(result: number, currentValue: number) => {
// 		return sumElement(result, currentValue);
// 	},
// 	initialReduce
// );
console.log(resultReduceFn1);

//================================================
//function reduceRightFn(array, callback, initial){}

// type reduceRightCb<T> = (previousValue: T, currentValue: T, index: number, array: T[]) => number

function reduceRightFn(array: string[], callback: any, initial: string) {
	let previousValue: string[] = [];
	if (initial && initial.length) {
		previousValue = initial.split('');
		let initialResult = previousValue;

		for (let i = initialResult.length - 1; i >= 0; i--) {
			array.unshift(initialResult[i]);
		}
	}
	let result = '';
	for (let i = array.length - 1; i >= 0; i--) {
		result = callback(result, array[i]);
	}
	return result;
}

function writeElementRTL(currentResult: string, currentValue: string) {
	const result = currentResult + currentValue;
	return result;
}

// console.log('test for reduce right function: ');
const reduceRightTab = ['a', 'b', 'c', 'd', 'e'];
const initial = 'start';
const resultReduceRight1 = reduceRightFn(
	reduceRightTab,
	(result: string, currentValue: string) => {
		return writeElementRTL(result, currentValue);
	},
	initial
);

// console.log(resultReduceRight1);

//================================================
//function everyFn(array, callback){}
type everyCb<T> = (element: T, index: number, array: T[]) => boolean;

function everyFn<T>(array: T[], callback: everyCb<T>): boolean {
	for (let i = 0; i < array.length; i++) {
		const result = callback(array[i], i, array);
		if (!result) {
			return false;
		}
	}
	return true;
}

function isElementSmallerThanSeven(el: number): boolean {
	if (el < 7) {
		return true;
	}
	return false;
}

function isElementSmallerThanZero(el: number): boolean {
	if (el < 0) {
		return true;
	}
	return false;
}

const exampleTab2 = [1, 2, 3, 4, 5, 6];
// console.log("test for every function: ")
const resultEvery = exampleTab2.every((e) => e < 7);
const resultEvery1 = exampleTab2.every((e) => e < 0);
const resultEveryFn1 = everyFn(exampleTab2, isElementSmallerThanSeven);
const resultEveryFn2 = everyFn(exampleTab2, isElementSmallerThanZero);
// console.log(resultEvery);
// console.log(resultEvery1);
// console.log(resultEveryFn1);
// console.log(resultEveryFn2);

//================================================
//function someFn(array, callback){}
type someCb<T> = (element: T, index: number, array: T[]) => boolean;
function someFn<T>(array: T[], callback: someCb<T>) {
	for (let i = 0; i < array.length; i++) {
		const result = callback(array[i], i, array);
		if (result) {
			return true;
		}
	}
	return false;
}

// console.log("test for some function: ")
const exmapleTabSome = [1, 2, 3, 4, 5, 6];
const resultSome = exmapleTabSome.some((e) => e < 7);
const resultSome1 = exmapleTabSome.some((e) => e < 0);
const resultSomeFn = someFn(exmapleTabSome, isElementSmallerThanSeven);
const resultSomeFn1 = someFn(exmapleTabSome, isElementSmallerThanZero);
// console.log(resultSome);
// console.log(resultSome1);
// console.log(resultSomeFn);
// console.log(resultSomeFn1);
