let number1 = Math.floor(Math.random() * 100)

function even_or_odd(number1) {
    return number1 % 2 === 0 ? console.log(`[${number1}] :Это четное число`) : console.log(`[${number1}] :Это нечетное число`)
}

even_or_odd(number1)