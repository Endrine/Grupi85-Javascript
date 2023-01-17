// krjimi i funksionit

function hello() {
    // alert("Hello grupi 85")
    console.log("Hello everyone grupi 85")
}


// thirrja e funksionit

hello()
hello()
hello()


// te krijohet nje funksion me emrin shkruaj_emrin. Emri te shkruhet nga perdoruesi. 
// metoden prompt()


// function shkruaj_emrin(){
//     prompt("Shkruaj emrin tend?")
// }

// shkruaj_emrin()


// variablat lokale 
// function mesazh() {
//     let message = "Hello everyone"
//     console.log(message)
// }

// mesazh()

// console.log(message)

// variablat globale    

let user = "Zani"
console.log(user)

function ndryshoVariablen() {
    user = "Dielli"
    let message = "Hello" + user
    console.log(message)
}

ndryshoVariablen()
console.log(user)


// funksionet me parametra 

function shuma(x,y) {
    rezultati = x + y 
    console.log(rezultati)

}
// argumentet 
shuma(2,3)


// return 

function sum(a,b) {
    result = a + b
    return result

}
let mesazhi = sum(3,6)
console.log(mesazhi)


// detyra 1 
function numri_me_ivogel(a,b) {
    return b

}
console.log(numri_me_ivogel(3,2))


// detyra 2 

function fuqia(x,n){
    result = x**n
    return result

}

console.log(fuqia(2,3))

// arrow  function

let zbritja = (a,b) => a-b
console.log(zbritja(3,2))

// function expression
// let sum = function(a,b) {
//     rezultati = a+b
//     return rezultati
// }

// console.log(sum(3,2))


let numberCompare = (a,b) =>{
    if(a==b){
        return "Numrat jane te barabarte"
    } else if (a>b) {
        return "Numri i pare eshte me i madh"
    } else {
        return "Numri i dyte eshte  me i madh"
    }
}

console.log(numberCompare(6,5))