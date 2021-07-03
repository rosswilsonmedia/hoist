//given
console.log(hello);
var hello = 'world';
//expected
//var hello;
//console.log(hello) //logs undefined
//var hello = 'world';

//given
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//expected
//var needle;
//function test(){
    //var needle = 'magnet';
    //console.log(needle);
//}
//test(); //function runs console magnet

//given
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//expected
//var brendan;
//function print(){
    //brendan = 'only okay';
    //console.log(brendan);
//}
//consoles super cool

//given
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//expected
//var food;
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
//var food = 'chicken'
//console chicken
//run eat function //declares var, set to half-chicken, consoles half-chicken, set to gone

//given
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//expected
//var mean;
//mean not defined

//given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//expected
//var genre;
//function rewind() {
//    var genre;
//    genre = "rock";
//    console.log(genre);
//    genre = "r&b";
//    console.log(genre);
//}
//console undefined
//genre = disco;
//run rewind function //var genre, genre=rock, console rock, genre=r&b, console r&b
//console disco

//given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//expected
//dojo;
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = 'san jose'
// console san jose
// run learn // var dojo, dojo = seattle, console seattle, dojo = burbank, console burbank
//console san jose

//given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//expected
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
//console.log(makeDojo("Chicago", 65));
    //dojo
    //dojo.name = Chicago
    //dojo.students = 65
    //dojo.hiring = true
    //return dojo
//console dojo obj

// console.log(makeDojo("Berkeley", 0));
    //dojo
    //dojo.name = Berkeley
    //dojo.students = 0
    //error because no assign to const var