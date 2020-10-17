// ================== TEST 01 ====================
// String concatenation
// Create the function concatInitials such that it returns the firstName followed by the lastName.

// Things to done:
// 1) returns a string
// // 2) returns a string of both initials

// function name (a,b){
//     return (a + b)
// }

// console.log(name('shayan', 'sidd'));

// =================== TEST 02 ======================

// Define a variable "count" inside the function defineVariable. Increment it and then return its value.

// function defineVariable(a){
//     return a-=4
// }
// console.log(defineVariable(5));


// function years(age){
//     if(age >= 18){

//         console.log(true)
//     }else {
//         console.log(false)
//     }
// }
// console.log(years(69))

// let places = ['Karachi', 'Lahore', 'Islamabad'];

// for (let i = 0; i < places.length; i++) {
//     let a = places[i];
//     console.log('Hello from ' + a);
// };

// for (var i=4; i>5; i++) {
//     console.log(i);
// };

// let fruits = ['apple','aam','kharboza']

// for (let i = 0; i < fruits.length; i++){
    
//     console.log('this is '+ fruits[i])


// };

// let vegetable = ['aalo','piyaaz','baingan']

// for (let u = 0; u < vegetable.length; u++){
//     console.log('this is ' + vegetable[u])
// };





// ============== TEST 03 ================

// write a function to create a new string adding "New!" in front of a given string.
// if the given string begins with "New!" already then return the original string.     

// create a function to check if the sum of the two numbers is 100, if sum is 100 return True   
// else it will return False

// create a function that takes two arguments of numbers, make a new variable in function and 
// add the sum of two arguments in new assigned variable in function.
// then return the variable and convertNumber to String, such that it converts the number it receives
// into a string.

// create a function that take one argument (string), and when returning back the string such that it
// capitalize the fist letter of the given word in argument. Like: if i pass "john" or "joHn", it will
// return like this: "John".

// function yes(m,n){
//     if (m+n==100){
//         console.log(true)
//     }
//     else 
//     {console.log(false)}    
// }
// yes(110,20)

// function name(str) {
//    return str[0].toUpperCase() + str.substring(1).toLowerCase()
// }

// console.log(name('shayan'))

// var score=81

// if(score > 80 ){
//     console.log('grade A')
//     if(score >90 ) {
//         console.log('$100')
//     } else {
//         console.log('$40')
//     }
// } else {
//     console.log('failed')
// };




// var arr = [1, 2, 3, 4]
// function arrayIndex(val) {
//     val[1]= 12
// }
// console.log(arr[2])
// console.log(arrayIndex(arr))
// console.log(arr[1])

// function age(a){
//    return a == 18 ? 'true': 'false'
// }
// console.log(age(15))

// let disk = (a) => a <= 5 ? 'fine' : 'not fine'
// console.log(disk(9))


// let userChecker = (user) => {
//    if (user.email && user.password) {
//       console.log('You are logged in')
//    } else {
//       console.log('You need to log in')
//    }
// }


let json = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(json); // <-- no errors
  alert( user.name ); // no name!

} catch (e) {
  alert( "doesn't execute" );
}