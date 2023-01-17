// let dita = 3

// switch(dita) {
//     case 1:
//         console.log("E hene")
//         break;
//     case 2:
//         console.log("E marte")
//         break;
//     default:
//         console.log("Dite tjeter")

// }


// let dita =Number(prompt("Shkruj diten e javes (E hene(1)-E premte(5))")) 

// switch(dita){
//     case 1: 
//         console.log("E hene")
//         break;
//     case 2:
//         console.log("E marte")
//         break;
//     case 3:
//         console.log("E merkure")
//         break;
//     case 4:
//         console.log("E enjte")
//         break;
//     case 5:
//         console.log("e premte")
//         break;
//     default:
//         console.log("Dita e shtune dhe e diele nuk pranohet")
// }



// detyra Switch 
let rezultati;
let number1 = Number(prompt("Shkruaj numrin e pare"))
let number2 = Number(prompt("Shkruaj numrin e dyte"))
let operator = prompt("Shkruaj operatorin (+,-,*,/)")

switch(operator){
    case '+':
        rezultati = number1 + number2
        alert(`${number1} + ${number2} = ${rezultati} `)
        break;
    
    case '-':
        rezultati = number1 - number2
        alert(`${number1} - ${number2} = ${rezultati} `)
        break;
    
    case '*':
        rezultati = number1 * number2
        alert(`${number1} * ${number2} = ${rezultati} `)
        break;
    
    case '/':
    rezultati = number1 / number2
    alert(`${number1} / ${number2} = ${rezultati} `)
    break;
    default:
        console.log("Kalkulatori jone kryen vetem mbledhje, zbritje, shumezim dhe pjesetim")
}




