import {
	promiseAll,
	promiseRace,
	promiseLast,
	race,
	promiseIgnoreErrors,
} from './src/PromiseMethods/PromiseMethods';

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
	try {
		setTimeout(resolve, 2200, 'success promise 3');
	} catch (err) {
		reject(new Error(err));
	}
});
const promise4 = new Promise((resolve, reject) => {
	setTimeout(reject, 2500, 'error promise 4');
});

const promise5 = new Promise((resolve, reject) => {
	try {
		setTimeout(resolve, 3550, 'success promise 5');
	} catch (error) {
		reject(new Error(error));
	}
});
const promise6 = new Promise((resolve, reject) => {
	try {
		setTimeout(resolve, 550, 'success promise 6');
	} catch (error) {
		reject(new Error(error));
	}
});

// const promises = [promise1, promise2, promise3];
const promises = [promise3, promise3, promise5, promise4];
// const promises = [promise3, promise3, promise5, promise6];

// const result = promiseAll(promises);
// result
// 	.then((res) => console.log(' res ', res))
// 	.catch((err) => console.log('err ', err));

// const resultPromiseRace = promiseRace(promises);
// resultPromiseRace
// 	.then((res) => console.log(' rest ', res))
// 	.catch((err) => console.log('err ', err));

// race(promises)
// 	.then((res) => console.log(' rest ', res))
// 	.catch((err) => console.log('err ', err));

// const resultPromiseLast = promiseLast(promises);

// resultPromiseLast
// 	.then((res) => console.log('res ', res))
// 	.catch((err) => console.log('err ', err));

const resultPromiseIgnoreErrors = promiseIgnoreErrors(promises);

resultPromiseIgnoreErrors
	.then((res) => console.log('res ', res))
	.catch((err) => console.log('err ', err));
