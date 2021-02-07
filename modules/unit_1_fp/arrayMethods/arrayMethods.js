// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while

//function mapFn(array, callback){}:

// [0,1,2,3,4].map((el)=>el*2) -> [0,2,4,6,8]
// mapFn([0,1,2,3,4], (el)=>el*2) -> [0,2,4,6,8]

const multiplyElementsBy2 = (el) => el * 2;

function mapFn(array, callback) {
	const resultArr = [];
	array.forEach((el) => {
		resultArr.push(callback(el));
	});
	return resultArr;
}

const exampleTab = [1, 2, 3, 4];

const result = mapFn(exampleTab, (el) => {
	return multiplyElementsBy2(el);
});

// console.log('test for map function: ');
// const result1 = exampleTab.map((e) => e * 2);
// console.log(result);
// console.log(result1);

//================================================
//function filterFn(array, callback){}
const filterElementsBiggerThan2 = (el) => {
	if (el > 2) {
		return el;
	}
};

function filterFn(array, callback) {
	const resultArr = [];
	array.forEach((el) => {
		if (callback(el)) {
			resultArr.push(callback(el));
		}
	});
	return resultArr;
}

// console.log('test for filter function: ');
const exampleTab1 = [1, 2, 3, 4, 5, 6];
const resultFilter = filterFn(exampleTab1, (el) => {
	return filterElementsBiggerThan2(el);
});
// const resultFilter1 = exampleTab1.filter((el) => filterElementsBiggerThan2(el));
// console.log('filter: ', resultFilter1);
// console.log('my filter: ', resultFilter);

//================================================
const reduceExample = [0, 1, 2, 3, 4];
//function reduceFn(array, callback, initial){}

const sumElement = (currentResult, currentValue) => {
	const result = currentResult + currentValue;
	return result;
};

function reduceFn(array, callback, initial = 0) {
	let previousValue = initial;
	let result = previousValue;
	array.forEach((currentValue) => {
		result = callback(result, currentValue);
	});
	return result;
}

const resultReduce1 = reduceExample.reduce(function (
	previousValue,
	currentValue
) {
	return previousValue + currentValue;
},
10);
// console.log('test for reduce function: ');
// console.log(resultReduce1);

const resultReduceFn1 = reduceFn(
	reduceExample,
	(result, currentValue) => {
		return sumElement(result, currentValue);
	},
	(initial = 10)
);
// console.log(resultReduceFn1);

//================================================
//function reduceRightFn(array, callback, initial){}
function writeElementRTL(currentResult, currentValue) {
	const result = currentResult + currentValue;
	return result;
}

function reduceRightFn(array, callback, initial) {
	let previousValue = '';
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

// console.log('test for reduce right function: ');
const reduceRightTab = ['a', 'b', 'c', 'd', 'e'];
const resultReduceRight1 = reduceRightFn(
	reduceRightTab,
	(result, currentValue) => {
		console.log(result);
		return writeElementRTL(result, currentValue);
	},
	(initial = 'start ')
);

// console.log(resultReduceRight1);

//================================================
//function everyFn(array, callback){}

function isElementSmallerThanSeven(el) {
	if (el < 7) {
		return true;
	}
	return false;
}

function isElementSmallerThanZero(el) {
	if (el < 0) {
		return true;
	}
	return false;
}

function everyFn(array, callback) {
	for (let i = 0; i < array.length; i++) {
		const result = callback(array[i]);
		if (!result) {
			return false;
		}
	}
	return true;
}

const exampleTab2 = [1, 2, 3, 4, 5, 6];
// console.log("test for every function: ")
const resultEvery = exampleTab2.every((e) => e < 7);
const resultEvery1 = exampleTab2.every((e) => e < 0);
const resultEveryFn1 = everyFn(exampleTab2, (el) => {
	return isElementSmallerThanSeven(el);
});
const resultEveryFn2 = everyFn(exampleTab2, (el) => {
	return isElementSmallerThanZero(el);
});
// console.log(resultEvery);
// console.log(resultEvery1);
// console.log(resultEveryFn1);
// console.log(resultEveryFn2);

//================================================
//function someFn(array, callback){}

function someFn(array, callback) {
	for (let i = 0; i < array.length; i++) {
		const result = callback(array[i]);
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
const resultSomeFn = someFn(exmapleTabSome, (el) => {
	return isElementSmallerThanSeven(el);
});
const resultSomeFn1 = someFn(exmapleTabSome, (el) => {
	return isElementSmallerThanZero(el);
});
// console.log(resultSome);
// console.log(resultSome1);
// console.log(resultSomeFn);
// console.log(resultSomeFn1);
