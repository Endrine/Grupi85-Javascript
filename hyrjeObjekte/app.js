// krijimi i nje objekti te zbrazet 
// metoda e pare
let user = {}
console.log(user)

//metoda e dyte
let person = new Object()
console.log(person)

let Dog= {
    name: "Rex",
    race: "Huskie",
    age: 3,
    color: "white"
}

console.log(Dog)
console.log(Dog.name)
console.log(Dog.age)
console.log(Dog.surname)


// shtimi i nje karakteristike 
Dog.favoriteFood = "french fries"
console.log(Dog)

// ekzistimi i nje keys ne objekt
console.log("color" in Dog)
console.log("mbiemri" in Dog)




let person1= {
    name:  "Robert",
    surname: "Lewandoski",
    age: 34,
    profession: "Footballer",
    friends: ["David", "Kimchie", "Sam"],
    jerseyNumber: 9,



    getsummary: function(){
        console.log(this.name, this.surname, "is", this.age, "old. He is a", this.profession, ". His jersey number is", this.jerseyNumber, "His bestfriends are:", this.friends)
    }

}
 console.log(person1.getsummary())






