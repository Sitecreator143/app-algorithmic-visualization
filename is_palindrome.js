function isPalindrome(line) {
    let lineLow = line.toLowerCase().replace(/ /g, '')
    let result = ''
    const x = line.toLowerCase().split('').reverse().join('').replace(/ /g, '')
    x === lineLow ? result = `${line} является палиндромом` : result = `${line} не является палиндромом`
    return result
}