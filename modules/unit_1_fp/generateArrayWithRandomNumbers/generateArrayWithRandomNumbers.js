// Wygeneruj tablicę zawierającą X całkowitych liczb losowych z zakresu min i max

function generateArrayWithRandomNumbers(howManyNumbers=10, min=1, max=10){
    // brak walidacji na typy + 
    // brak walidacji na wartości +
    // brak walidacji na logikę + 
    if (typeof howManyNumbers !== 'number' || typeof min !== 'number' || typeof max !== 'number' || isNaN(howManyNumbers) || isNaN(min) || isNaN(max)){
        throw new Error("incorrect input types. You can only give numbers")
    } else if (howManyNumbers <= 0) {
        throw new Error("Amount of drawn numbers should be greater than 0")
    } else if (min > max) {
        throw new Error("Min value have to be less than or equal to max value");
    }
    
    const resultArr = [];
    for(let i = 0; i < howManyNumbers; i++){
        resultArr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    // [... new Array(howManyNumbers)].map(...)
    return resultArr;       

}

function generateArrayOfArrays(howManyArrays=10, howManyNumbers=10, min=1, max=10){
    if(typeof howManyArrays !== 'number' || isNaN(howManyArrays)){
        throw new Error("How many arrays parameter have to be a number")
    } else if (howManyArrays <= 0){
        throw new Error("How many arrays parameter have to be greater than 0")
    }
    const arrayOfArrays = [];
    for(let i = 0; i < howManyArrays; i++){
        const simpleArr = generateArrayWithRandomNumbers(howManyNumbers, min, max);
        arrayOfArrays.push(simpleArr);
    }
    return arrayOfArrays;
}

const generateArrayWithRandomNumbersResult = generateArrayWithRandomNumbers();
console.log(generateArrayWithRandomNumbersResult)
// const generateArrayOfArraysResult = generateArrayOfArrays(NaN,1,1,1);
// console.log(generateArrayOfArraysResult)
const generateArrayOfArraysResult1 = generateArrayOfArrays(3,5,1,1);
console.log(generateArrayOfArraysResult1)