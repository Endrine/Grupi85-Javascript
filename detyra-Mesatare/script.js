// let biologji =1
// let art = 1
// let programim = 1
// let matematike = 1

// mesatarja = (biologji + art + programim + matematike) / 4


// console.log("Mesatarja e notave eshte:", mesatarja)

let mesatarja =prompt("Shkruani mesataren tuaj: ")
let piket =prompt ("Shkruani piket tuaja: ")

if(mesatarja > 4.5) {
    console.log("Keni sukses te shkelqyeshem")
} else if (mesatarja >3.5 && mesatarja<4.5){
    console.log("Keni sukses shume te mire")
} else if(mesatarja >2.5 && mesatarja <3.5){
    console.log("Keni sukses te mire")
} else if (mesatarja >2 && mesatarja<2.5) {
    console.log("Suksesi juaj eshte i mjaftueshem")
} else if (mesatarja == 1){
    console.log("Suksesi juaj eshte i pamjaftueshem")
} else {
    console.log("Mesatarja ka vlere te gabuar")
}

