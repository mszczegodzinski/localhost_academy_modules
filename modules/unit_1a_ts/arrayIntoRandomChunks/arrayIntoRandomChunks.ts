const alphabet = 'abcdefghijklmnoprstuwxyz'.split('');

// stwórz funkcję agregującą array aggregateIntoChunks w losowej długości chunki
// każdy chunk powienien mieć od 4 do 7 elementów
// ostatni chunk też powinien być długości od 4 do 7

// mam array z Len = X
// potrzebuje podzielić na chunki od 4, 7
// wygenerować długości od 4, 7
// jeśli suma długości chunków === X.len && ostatni chunk jest od 4, 7
// jeśli nie to wygeneruj ponownie ostatnie Y długości chunków
// podzielić array na chunki

// [..., [...4], [...4], [...3]]

// 4,7 => 11 + ostatnia długość chunka => 15 a 18 ->

function splitNumberInCondition<T>(
	array: T[],
	min: number,
	max: number
): number[] {
	const chunksLengths = [];
	let randomChunkLength: number;
	let sum = 0;

	while (sum !== array.length) {
		sum = 0;
		randomChunkLength = Math.floor(Math.random() * (max - min + 1)) + min;
		chunksLengths.push(randomChunkLength);
		chunksLengths.forEach((chunk) => (sum += chunk));
		if (sum > array.length) {
			chunksLengths.length -= 3;
		}
	}
	console.log(sum);
	console.log('chunks lenghts: ', chunksLengths);
	return chunksLengths;
}

function printLettersToChunks<T>(array: T[], chunksLengths: number[]): T[][] {
	let previousIndex: number = 0;
	// .reduce
	let printedArr: T[][] = [];
	chunksLengths.forEach((chunk) => {
		const currentChunk: T[] = [];
		// .slice
		for (let i = previousIndex; i < chunk + previousIndex; i++) {
			currentChunk.push(array[i]);
		}
		previousIndex += chunk;
		printedArr.push(currentChunk);
	});
	return printedArr;
}

function aggregateIntoChunks<T>(array: T[]): T[][] {
	const max = 7;
	const min = 4;
	if (array.length < min) {
		throw new Error(
			`Incorrect array length. Array should have at least ${min} letters`
		);
	}

	const chunksLengths = splitNumberInCondition(array, min, max);
	const resultArr = printLettersToChunks(array, chunksLengths);

	return resultArr;
}

// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]

export default aggregateIntoChunks;
