// Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia. Funkcja powinna zwrócić Twój aktualny wiek niezależnie od typu inputa, który weźmie
// '1999q'
// getAgeFromDate
// new Date('a')
function getMyAgeDate(input, currentDate) {
    if(input instanceof Date){
        if(isNaN(input.getFullYear())){
            throw new Error("Incorrect input type")
        }
        return input.getFullYear();
    }
}

function getMyAgeString(input, currentDate) {
    if (typeof input === 'string') {
        const currentValue = parseInt(input)
        if(isNaN(currentValue)){
            throw new Error("Incorrect input type")
        }
        // if(currentDate - input < 0){
        //     throw new Error("You can't give a date from the future")
        // }
        return currentValue;
    }
}

function getMyAgeNumber(input, currentDate) {
    if (typeof input === 'number'){
       
     return input;
    }
}

function getMyAge(input){
    // brak walidacji na poprawne typy
    // new Date(2050,15,46)
    const currentDate = Date.now();
    const dateInput = getMyAgeDate(input, currentDate);
    const stringInput = getMyAgeString(input, currentDate);
    const numberInput = getMyAgeNumber(input, currentDate);
    
    let date = null

    switch(true){
        case typeof dateInput === 'number':
            // input jest date
            date = dateInput
            break;

        case typeof stringInput === 'number':
            // input jest string
            date = stringInput

            break;

        case typeof numberInput === 'number':
            // input jest number
            date = numberInput

            break;

        default:
            throw new Error('')
    }


    // date < 0 == 0 

    if(input > currentDate){
        throw new Error("You can't give a date from the future")
    }
    // 120 < xxx
    // if(input < currentDate){
    //     throw new Error("You can't give a date from the future")
    // }

    return currentDate - input

    // na czy ktoś jest z przyszłośc
    // na czy ktoś jest zza dalekiej prześzłości
}

const result1 = getMyAge(new Date(1990, 1, 1))
// const result1 = getMyAge(new Date(2021, 1, 1))
// const result1 = getMyAge(new Date('cokolwiek'))
const result2 = getMyAge('1990')
const result3 = getMyAge(1990)

// wyniki result1, result2 i result3 mają być identyczne
console.log(result1);
console.log(result2);
console.log(result3);