// Stwórz funkcje, które będą działać identycznie co metody wbudowane
// ale będą działać przy pomocy pętli for lub while

//function mapFn(array, callback){}:


// [0,1,2,3,4].map((el)=>el*2) -> [0,2,4,6,8]
// mapFn([0,1,2,3,4], (el)=>el*2) -> [0,2,4,6,8]

const multiplyElementsBy2 = el => el * 2;

  function mapFn(array, callback) {
    // czy array to array
    // czy callback to function
    return callback(array) 
  }
  
  console.log("test for map function: ")
  const exampleTab = [1, 2, 3];
  const result = mapFn(exampleTab, () => { 
    const resultArr = [];
    for(let i = 0; i < exampleTab.length; i++){
      resultArr.push(multiplyElementsBy2(exampleTab[i]));
    }
    return resultArr;
  })
  const result1 = exampleTab.map(e => e * 2);
  console.log(result)
  console.log(result1)


//================================================
//function filterFn(array, callback){}
const filterElementsBiggerThan2 = el => {
    if (el > 2) {
      return el;
    }
  }
  
  function filterFn(array, callback) {
    return callback(array);
  }
  
  console.log("test for filter function: ")
  const exampleTab1 = [1, 2, 3, 4, 5, 6]
  const resultFilter = filterFn(exampleTab1, () => {
    const result = []
    for(let i = 0; i < exampleTab.length; i++){
      filterElementsBiggerThan2(exampleTab[i]) ? result.push(exampleTab[i]) : null;
    }
    return result;
  });
  const resultFilter1 = exampleTab.filter(el => filterElementsBiggerThan2(el))
  console.log("filter: ", resultFilter1);
  console.log("my filter: ", resultFilter)

//================================================
//function reduceFn(array, callback, initial){}
function sumAllElements(array, initial = 0) {
    let result = initial;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result
  }
  
  function reduceFn(array, callback, initial) {
    return callback(array, initial)
  }
  
  console.log("test for reduce function: ")
  const reduceExample = [0, 1, 2, 3, 4];
  const resultReduce = reduceExample.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });
  console.log(resultReduce);
  const resultReduce1 = reduceExample.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 10);
  console.log(resultReduce1);
  
  const resultReduceFn1 = reduceFn(reduceExample, sumAllElements)
  const resultReduceFn2 = reduceFn(reduceExample, sumAllElements, 10)
  console.log(resultReduceFn1);
  console.log(resultReduceFn2);

//================================================
//function reduceRightFn(array, callback, initial){}
function writeAllElementsRTL(array, initial = "") {
    let result = initial;
    for (let i = array.length - 1; i > 0; i--) {
      result += array[i] + " ";
    }
    return result
  }
  
  function reduceRightFn(array, callback, initial) {
    return callback(array, initial)
  }
  
  console.log("test for reduce right function: ")
  const reduceRightTab = ["a", "b", "c", "d", "e"];
  const resultReduceRight1 = reduceRightFn(reduceRightTab, writeAllElementsRTL)
  const resultReduceRight2 = reduceRightFn(reduceRightTab, writeAllElementsRTL, "start ")
  console.log(resultReduceRight1)
  console.log(resultReduceRight2)


//================================================
//function everyFn(array, callback){}
function isEveryElementSmallerThanSeven(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 7) {
        return true;
      }
    }
    return false;
  }
  
  function isEveryElementSmallerThanZero(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        return true;
      }
    }
    return false;
  }
  
  function everyFn(array, callback) {
    return callback(array);
  }
  
  const exampleTab2 = [1, 2, 3, 4, 5, 6];
  console.log("test for every function: ")
  const resultEvery = exampleTab2.every(e => e < 7);
  const resultEvery1 = exampleTab2.every(e => e < 0);
  const resultEveryFn1 = everyFn(exampleTab2, isEveryElementSmallerThanSeven);
  const resultEveryFn2 = everyFn(exampleTab2, isEveryElementSmallerThanZero);
  console.log(resultEvery);
  console.log(resultEvery1);
  console.log(resultEveryFn1);
  console.log(resultEveryFn2);


//================================================
//function someFn(array, callback){}
function isSomeElementSmallerThanSeven(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 7) {
        return true;
      }
    }
    return false;
  }
  
  function isSomeElementSmallerThanZero(array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0) {
        return true;
      }
    }
    return false;
  }
  
  function someFn(array, callback) {
    return callback(array);
  }
  
  console.log("test for some function: ")
  const exmapleTabSome = [1, 2, 3, 4, 5, 6]
  const resultSome = exmapleTabSome.some(e => e < 7);
  const resultSome1 = exmapleTabSome.some(e => e < 0);
  const resultSomeFn = someFn(exmapleTabSome, isSomeElementSmallerThanSeven);
  const resultSomeFn1 = someFn(exmapleTabSome, isSomeElementSmallerThanZero);
  console.log(resultSome);
  console.log(resultSome1);
  console.log(resultSomeFn);
  console.log(resultSomeFn1);