const commonDivisor = (str) => {
    let arr = str.split(' ')
    let x = +arr[0]
    let y = +arr[1]
    if (arr.length <= 1) {
        console.log('Недостаточно аргументов')
        return 'Недостаточно аргументов'
    } else if (arr.length >= 3) {
        console.log('Слишком много аргументов')
        return 'Слишком много аргументов'
    } else if (arr[0].length === 0 || arr[1].length === 0) {
        return 'Введите два аргумента'
    } else {
        while (x && y) {
            x > y ? x %= y : y %= x;
          }
          x += y;
        return x.toString()
    }
}

