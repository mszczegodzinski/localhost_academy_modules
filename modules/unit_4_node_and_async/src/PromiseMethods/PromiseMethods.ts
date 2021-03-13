// Promise.last(arrayOfPromise) - zwraca do then tylko ostatnią promisę, która się wykonała asynchronicznie,
// a jeśli wystąpił błąd w co najmniej jednej promisę, zwraca do catch ten błąd po ukończeniu ostatniej promisy

// Promise.ignoreErrors(arrayOfPromise) - nie ważne co się stanie,
// zwracane są tylko te wyniki promise, które zakończyły się sukcesem, błędy są ignorowane

// skopiuj identyczne działanie tych metod w funkcjach
export const promiseAll = <T>(arrayOfPromise: T[]) => {
	// promises result:
	const result: T[] = [];
	let resolvedPromisesCounter = 0;

	/* To resolve/reject based on arrayOfPromise items */
	return new Promise((resolve, reject) => {
		arrayOfPromise.forEach((promise, index) => {
			// We need to resolve each item in promises so that even if there is non-promise item we can handle it
			Promise.resolve(promise)
				.then((item) => {
					resolvedPromisesCounter += 1;
					result[index] = item; // Store the result in the same order as given

					// check if all promises are fulfilled
					if (resolvedPromisesCounter === arrayOfPromise.length) {
						resolve(result); // All promises resolved so resolve outer promise
					}
				})
				.catch((err) => {
					reject(err); // If there is an error, reject the outer promise immediately
				});
		});
	});
};

export const promiseRace = <T>(arrayOfPromise: T[]) => {
	return new Promise((resolve, reject) => {
		arrayOfPromise.forEach((promise) => {
			Promise.resolve(promise)
				.then((item) => {
					resolve(item);
				})
				.catch((err) => {
					reject(err);
				});
		});
	});
};

export const race = <T>(arrayOfPromise: Promise<T>[]): Promise<T> => {
	const promises = [...arrayOfPromise];
	return new Promise((res, rej) => {
		promises.forEach((p) => p.then(res).catch(rej));
	});
};

export const promiseLast = <T>(arrayOfPromise: T[]) => {
	const result: T[] = [];
	let resolvedPromisesCounter = 0;

	return new Promise((resolve, reject) => {
		arrayOfPromise.forEach((promise, index) => {
			// We need to resolve each item in promises so that even if there is non-promise item we can handle it
			Promise.resolve(promise)
				.then((item) => {
					resolvedPromisesCounter += 1;
					result.push(item);

					console.log('resolved ');
					if (resolvedPromisesCounter === arrayOfPromise.length) {
						resolve(result); // All promises resolved so resolve outer promise
					}
				})
				.catch((err) => {
					reject(err); // If there is an error, reject the outer promise immediately
					console.log('some error ');
				});
		});
	});
};

export const promiseIgnoreErrors = <T>(arrayOfPromise: T[]) => {
	const result: T[] = [];
	let resolvedPromisesCounter = 0;

	return new Promise((resolve, reject) => {
		arrayOfPromise.forEach((promise, index) => {
			Promise.resolve(promise)
				.then((item) => {
					resolvedPromisesCounter += 1;
					result.push(item);

					console.log('resolved ');
					if (resolvedPromisesCounter === arrayOfPromise.length) {
						resolve(result);
					}
				})
				.catch((err) => {
					resolvedPromisesCounter += 1;
				});
		});
	});
};
