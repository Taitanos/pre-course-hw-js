let number1 = Math.floor(Math.random() * 100)

function even_or_odd(number) {
    return number % 2 === 0 ? console.log(`[${number}] :Это четное число`) : console.log(`[${number}] :Это нечетное число`)
}

even_or_odd(number1)