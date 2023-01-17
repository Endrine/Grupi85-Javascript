// liste e zbrazet 
let lista = []
console.log(lista)

// liste me numra 

let numbers = [12, 34, 67, 89, 25.5]
console.log(numbers)

// liste me numra dhe stringje 

// liste me stringje 

// pozita e elementeve, qasja e elementeve
let fruits = ["apple", "orange", "kiwi", "peach"]
// console.log(fruits)
// console.log(fruits[1])
console.log(fruits[5])


// zevendesimi i vleres ekzistuese
fruits[3] = "lemon"
console.log(fruits)
console.log(fruits.length)
console.log("Lista jone permban", fruits.length, "elemente")


// Detyra Age calculation
const years = [1990, 1967, 2000]

function calcAge(birthYear){
    return 2022 - birthYear;
} 

// console.log(calcAge(years))

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[2])

console.log(age1, age2, age3)

// queue  - push, shift

const animals = ["Cat", "Dog", "Parrot", "Elephant"]
// animals.push("lion")
// console.log("Lista pas perdorimit te push(): ", animals)

// animals.shift()
// console.log("Lista pas perdorimit te shift(): ", animals)

animals.pop()
console.log("Lista pas perdorimit te pop(): ", animals)

animals.unshift("Snake")
console.log("Lista pas perdorimit te unshift()", animals)

