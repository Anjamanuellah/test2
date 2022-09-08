/*
var arrayOne = [2, 8, 9, 10, 13, 14];
for (let i=0 ; i< arrayOne.length ; i++) {
    arrayOne[i] = arrayOne[i] * 2;
    //console.table(arrayOne[i]*2)
}
console.log(arrayOne)
*/
var arrayTwo = ["a", "b", "8", 9, 10, 7, "B"];
var array3 = []
for (let array of arrayTwo) {
    if (isNaN(array)) {
        delete arrayTwo.tab;
    }
    else array = array3.push(array);
}
console.log(array3)
/*
var array3 = []
for (let i = 0; i<arrayTwo.length; i++) {
        if (i = isNaN) {
    }
    }
console.log(arrayTwo)
//console.log(array3.push(arrayTwo))
*/
/*
var array3 = arrayTwo.filter(function(e) {
    return e !== "String"
})

console.log(array3)
*/
/*
var persons = [ {
        nom : "rakoto",
        prenom : "rasoa",
        } ,
        {
        nom : "rabe",
        prenom : "loha",
        },
        {
        nom : "bema",
        prenom : "kely",
        }
]
for (let i =0; i<persons.length ; i++) {
    persons[i].name = persons[i].nom + persons[i].prenom;
}
console.log(persons);
*/