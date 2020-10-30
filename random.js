const random = (str) => {
    let argumentsArr = str.split(' ')
    let result = 0
    if (argumentsArr.length <= 1) {
        console.log('Недостаточно аргументов')
        return 'Недостаточно аргументов'
    } else if (argumentsArr.length >= 3) {
        console.log('Слишком много аргументов')
        return 'Слишком много аргументов'
    } else if (argumentsArr[0].length === 0 || argumentsArr[1].length === 0) {
        return 'Введите два аргумента'
    } else {
        if (isNaN(+argumentsArr[0]) || isNaN(+argumentsArr[1])) {
            console.log('Это не число')
            return 'Это не число'
        } else if ((argumentsArr[0] === argumentsArr[1])) {
            console.log(argumentsArr[0])
            return argumentsArr[0]
        } else {
            if (+argumentsArr[0] > +argumentsArr[1]) {
                result = Math.random() * (+argumentsArr[0] - +argumentsArr[1] + 1) + +argumentsArr[1]
                result = Math.floor( result ) 
            } else {
                result = Math.random() * (+argumentsArr[1] - +argumentsArr[0] + 1) + +argumentsArr[0]
                result = Math.floor( result ) 
            }
            result = result.toString()
            console.log(result)
            return result
        }
    }
}