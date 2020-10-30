const brackets = (str) => {

    let bracketsConfig = [[], [], [], [], [], []]
    let variables = str.split(' ')
    str = variables[0]

    for (let i = 1; i < variables.length; i++) {
        bracketsConfig[Math.ceil(i / 2) - 1].push(variables[i])
    }
    console.log(bracketsConfig)

    //bracketsConfig
    let arr = str.split('')
    let arrDelete = []
    let t = false
  
    for (let i = 0; i < bracketsConfig.length; i++) {
      if (bracketsConfig[i][1] === bracketsConfig[i][0]) {
        for (let y = 0; y < 1; y) {
          if (arr.indexOf(bracketsConfig[i][1]) >= 0) {
            arr.splice(arr.indexOf(bracketsConfig[i][1]), 1)
          } else { 
            y++
          }
        }
      }
    }
    console.log(arr)
  
    for (let i = 0; i < arr.length; i++) {
      t = false
      for (let y = 0; y < bracketsConfig.length; y) {
        if (bracketsConfig[y].indexOf(arr[i]) === -1 ) {
          y++
        } else if (bracketsConfig[y].indexOf(arr[i]) === 0 ) {
          arrDelete.push([y, 0])
          y++
          t = true
        } else if (bracketsConfig[y].indexOf(arr[i]) === 1 ) {
          arrDelete.push([y, 1])
          y++
          t = true
        }
      }
      if (t === false) {
        console.log('Скобок нет в конфигурации')
        return 'Скобок нет в конфигурации'
      }
    }
  
    for (let i = 0; i < arrDelete.length; i) {
      if (arrDelete[i][1] === 0) {
        i++
      } else if (arrDelete[i][1] === 1 && i > 0) {
        if (arrDelete[i][0] === arrDelete[i - 1][0] && arrDelete[i][1] !== arrDelete[i - 1][1]) {
          arrDelete.splice(i - 1, 2)
          i = i - 1
        } else {
          console.log('Закрыты неверно')
          return 'Закрыты неверно'
        }
      } else {
        console.log('Закрыты неверно')
        return 'Закрыты неверно'
      }
    }
    console.log(arrDelete)
    if (arrDelete.length !== 0) {
      console.log('Закрыты неверно')
      return 'Закрыты неверно'
    }
    console.log(arrDelete)
    console.log('Все верно')
    return 'Все верно'
  }