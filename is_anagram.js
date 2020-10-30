const isAnagram = (str) => {
  
    let arr = str.split(' ')
    if (arr.length <= 1) {
        console.log('Недостаточно аргументов')
        return 'Недостаточно аргументов'
    } else if (arr.length >= 3) {
        console.log('Слишком много аргументов')
        return 'Слишком много аргументов'
    } else if (arr[0].length === 0 || arr[1].length === 0) {
        return 'Введите два аргумента'
    } else {
        let strOne = arr[0]
        let strTwo = arr[1] 
    
        let strO = strOne.toLowerCase()
        let strT = strTwo.toLowerCase()
        let oSumm = 0
        let tSumm = 0
        
        for (let i = 0; i < strO.length; i++) {
            oSumm = oSumm + strO.charCodeAt(i)
        }
            for (let i = 0; i < strT.length; i++) {
            tSumm = tSumm + strT.charCodeAt(i)
        }
        
        if (tSumm === oSumm) {
            return `${strOne} является анаграммой ${strTwo}`
        } else {
            return `${strOne} не является анаграммой ${strTwo}`
        }
    }
}