const leftBtn = document.querySelector('[data-left]')
const rightBtn = document.querySelector('[data-right]')
const numberDescription = document.querySelector('[data-number]')
const textDescription = document.querySelector('[data-text]')
const output = document.querySelector('[data-output]')
const input = document.querySelector('[data-input]')
const goBtn = document.querySelector('[data-go]')

let numberOfTask = 1 //Показывает, какой алгоритм сейчас включен
let inputText = '' //Сюда запишем введенные пользователем данные

let textDescriptionArr = [
    '0)',
    'Human readable numbers.\nВ данном алгоритме число преобразуется в понятный для человека текст. Например "1812" преобразуется в "one thousand eight hundred twelve" \n Введите данные или нажмите на этот текст и нажмите "GO"', 
    'Brackets.\nПроверяет, верно ли закрыты скобки. Введите скобки, и через пробел конфигурацию: т.е. какие скобки должны быть учитаны. \n Например: 1(({[()]}))({[]})2 ( ) [ ] { } 1 2 - верно ("1" и "2" - тоже могут выступать в роли скобок). \n ({)} ( ) { } - неверно',
    'Random \n Находит случайное значение между двумя числами. Введите два числа через пробел.\nНапример: 20 0',
    'Is anagram? \n Проверяет, является ли первое слово анаграммой второго. Введите два слова через пробел. \n Например: foefet toffee - анаграммы.',
    'Greatest common divisor \n Находит наибольший общий делитель двух чисел. Введите два числа через пробел. Например 30 18 - 6',
    'Is palindrome? \nПроверяет, является ли слово или фраза палиндромом. Введите фразу или последовательность букв, цифр.\n Например: Лёша на полке клопа нашёл',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
    'Алгоритм в разработке',
]
let examplesArr = [
    '0',
    '1812',
    '1(({[()]}))({[]})2 ( ) [ ] { } 1 2',
    '20 0',
    'foefet toffee',
    '30 18',
    'Лёша на полке клопа нашёл',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
    'Нет примера',
]


//Функция задает и меняет текст описания задания и номер
let textDescriptiptionChanger = () => {
    textDescription.innerText = textDescriptionArr[numberOfTask]
    numberDescription.innerText = numberOfTask
}
textDescriptiptionChanger()

//При нажатии на дескрипшн в поле вводится пример
let exampleClick = () => {
    textDescription.addEventListener('click', () => {
        input.value = examplesArr[numberOfTask]
    })
}
exampleClick()

//Функция переключает номер алгоритма и описание, при нажатии на стрелки
let numberOfTaskChanger = () => { 
    leftBtn.addEventListener('click', () => {
        numberOfTask === 1? numberOfTask = 20 : numberOfTask = (numberOfTask + 19) % 20
        textDescriptiptionChanger() //Вызывает смену описания
        input.value = '' //Сбрасываем данные, которые вводит пользователь
        output.textContent = 'Здесь будет результат' // Сбрасываем результат функции предыдущего алгоритма
    })
    rightBtn.addEventListener('click', () => {
        numberOfTask = numberOfTask % 20 + 1
        textDescriptiptionChanger() //Вызывает смену описания
        input.value = ''
        output.textContent = 'Здесь будет результат'
    })
}
numberOfTaskChanger()


//Функция отправки данных, вызова нужного алгоритма и выдача результата
let goBtnPush = () => {
    goBtn.addEventListener('click', () => {
        inputText = input.value //Записывает данные пользователя в переменную
        switch  (numberOfTask) { 
            case 1: 
                output.textContent = humanReadableNumber(inputText) //Вызывает функцию, которая записана в соответствующем файле. Функция должна вернуть нам значение, которое мы выведем с помощью input.value
                break; 
            case 2: 
                output.textContent = brackets(inputText)
                break; 
            case 3: 
                output.textContent = random(inputText)
                break; 
            case 4: 
                output.textContent = isAnagram(inputText)
                break; 
            case 5: 
                output.textContent = commonDivisor(inputText)
                break; 
            case 6: 
                output.textContent = isPalindrome(inputText)
                break; 
            case 7: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 8: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 9: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 10: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 11: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 12: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 13: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 14: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 15: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 16: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 17: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 18: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 19: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            case 20: 
                output.textContent = 'Ну я же сказал, алгоритм в разработке'
                break; 
            default: 
                output.textContent = 'Oups'
                break; 
        } 
    })
}
goBtnPush()


