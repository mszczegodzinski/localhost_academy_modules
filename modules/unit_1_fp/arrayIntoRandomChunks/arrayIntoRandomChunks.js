const alphabet = 'abcdefghijklmnoprstuwxyz'.split('')

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

function splitNumberInCondition(array, min, max){
    // ta funkcja dzieli na losowe długości wg warunków
    const chunksLengths = [];
    let randomChunkLength
    let sum = 0

    while(sum !== array.length) {
        sum = 0;
        randomChunkLength = Math.floor(Math.random() * (max - min + 1)) + min
        chunksLengths.push(randomChunkLength);
        chunksLengths.forEach(chunk => sum += chunk)
        if(sum > array.length){
            chunksLengths.length -= 3;
        }
    }
    console.log(sum)
    console.log("chunks lenghts: ", chunksLengths)
    return chunksLengths;
}

function printLettersToChunks(array, chunksLengths) {
    let previousIndex = 0;
    let printedArr = [];
    chunksLengths.forEach(chunk => {
        const currentChunk = []
        for(let i = previousIndex; i < chunk + previousIndex; i++){
            currentChunk.push(array[i])
        }
        previousIndex += chunk;
        printedArr.push(currentChunk);
    })
    return printedArr;
}

// function validateOnMinMaxCondition(lengthsArray, min, max){
//     // true / false jeśli ostatni chunk spełnia warunki

    
// }

// function validateOnLengthCondition(lengthsArray, baseArray){
//     // true / false jeśli suma arraya jest taka sama jak długość arraya bazowego
//     let sum = 0
//     lengthsArray.forEach(chunk => sum += chunk)
//     // console.log("sum ", sum)
//     if(sum === baseArray.length){
//         return true;
//     }
//     return false;
// }

// jesli 2 funkcje walidujace nie zwroca true, to 3 ostatnie chunki wrzucamy z powrtorem do splitNumberInCondition jako param value


function aggregateIntoChunks(array){
    const max = 7
    const min = 4
    if(!Array.isArray(array)){
        throw new Error("Incorrect type of data. You can only pass an array")
    }
    if(array.length < min){
        throw new Error(`Incorrect array length. Array should have at least ${min} letters`)
    }
    // validacji na typ array
    // validacji na logike

    const chunksLengths = splitNumberInCondition(array, min, max);
    const resultArr = printLettersToChunks(array, chunksLengths);

    return resultArr;
}

// prawdopodobny wynik funkcji
const chunks = aggregateIntoChunks(alphabet)
console.log(chunks)
//tests:
// const chunks1 = aggregateIntoChunks('1')
// console.log(chunks1)
// const chunks2 = aggregateIntoChunks(['a', 'b', 'c'])
// console.log(chunks2)

// chunks:
// [[a,b,c,d,e,f],[g,h,i,j,k],[l,m,n,o,p,r,s],[t,u,w,x,y,z]]