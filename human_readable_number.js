let humanReadableNumber = (number) => {
    let numbersArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand', 'million', 'billion', 'trillion']
    let readableNumberArr = []
    let readableNumber = ''
    let numberString = number.toString().split('').reverse().join('')
    let th = 0

    if (number !== '') {
        if (!(isNaN(+number))) {
            if ((+number <= 999999999999999) && (+number >= -999999999999999)) {
                if (+number !== 0) {
                    if (+number > 0) {
                        f(numberString, th, readableNumberArr, numbersArr)
                    } else {
                        numberString = numberString.slice(0, -1) //Уберем минус, иначе функция будет работать некорректно
                        console.log(numberString)
                        f(numberString, th, readableNumberArr, numbersArr) //Функция, составляющая массив слов, соответствующих числу
                        readableNumberArr.push('minus') // В отрицательном числе добавим минус
                    }
                } else {
                    console.log('zero')
                    return 'zero'
                }
            } else if (+number > 999999999999999) {
                console.log('Слишком большое число')
                return 'Слишком большое число'
            } else if (+number < -999999999999999) {
                console.log('Слишком маленькое число')
                return 'Слишком маленькое число'
            }
        } else {
            console.log('Это не номер')
            return 'Это не номер'
        }
    } else {
        return 'Введите номер'
    }
    readableNumberArr = readableNumberArr.filter(el => (el !== 'Empty')) // Убираем все ненужные элементы массива
    readableNumber = readableNumberArr.reverse().join(' ') 
    console.log(readableNumber)
    return readableNumber
}

//Функция принимает перевернутую строку из цифр, некоторый параметр th, увеличивающийся на 1 каждый раз, когда в выходном массиве появляются элементы типа thousand, million, принимает пустой массив, который потом будет использоваться, в него как раз и запишем масчсив последовательных слов. И в конце принимаем массиф записанных буквами чисел. Самое важное - составить массив readableNumberArr, с которым потом работаем
let f = (numberString, th, readableNumberArr, numbersArr) => {
    for (let i = 0; i < numberString.length; i++) {

        if (i % 3 === 0) { 
            if (+numberString[i] === 0) {
                readableNumberArr.push('Empty')
            } else {
                readableNumberArr.push(numbersArr[+numberString[i]])
            }
        }
    
        if (i % 3 === 1) { 
            if (+numberString[i] === 0) {
                readableNumberArr.push('Empty')
            } else if (+numberString[i] === 1) {
                readableNumberArr[i - 1] = 'Empty'
                readableNumberArr.push(numbersArr[+numberString[i - 1] + 10])
            } else {
                readableNumberArr.push(numbersArr[+numberString[i] + 18])
            }
        }
    
        if (i % 3 === 2) { 
            if (+numberString[i] === 0) {
                readableNumberArr.push('Empty')
            } else {
                readableNumberArr.push(numbersArr[+numberString[i]])
                readableNumberArr[i] += ' hundred'
            }
        }
    }
    
    if ((+numberString[3] > 0) || (+numberString[4] > 0) || (+numberString[5] > 0)) {
        readableNumberArr.splice(3, 0, 'thousand')
        th++
    }
    if ((+numberString[6] > 0) || (+numberString[7] > 0) || (+numberString[8] > 0)) {
        readableNumberArr.splice(6 + th, 0, 'million')
        th++
    }
    if ((+numberString[9] > 0) || (+numberString[10] > 0) || (+numberString[11] > 0)) {
        readableNumberArr.splice(9 + th, 0, 'billion')
        th++
    }
    if ((+numberString[12] > 0) || (+numberString[13] > 0) || (+numberString[14] > 0)) {
        readableNumberArr.splice(12 + th, 0, 'trillion')
        th++
    }
}
