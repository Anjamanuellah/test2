/*
var arrayOne = [2, 8, 9, 10, 13, 14];
for (let i=0 ; i< arrayOne.length ; i++) {
    arrayOne[i] = arrayOne[i] * 2;
    //console.table(arrayOne[i]*2)
}
console.log(arrayOne)

var arrayTwo = ["a", "b", "8", 9, 10, 7, "B"];
var array3 = []
if (isNaN(arrayTwo[i])) {

}
/*
for (let i=0 ; i< arrayTwo.length ; i++) {

}
*/

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
