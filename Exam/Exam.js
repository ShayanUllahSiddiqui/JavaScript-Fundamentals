// ^^^^^^^^^^^ ^^^^^^^^^^^ ^^^^^^^ GRAND TEST ^^^^^^^ ^^^^^^^^^^^^^^ ^^^^^^^^^^^^^^^
// =================================================================================

/*

************* Variables *************
Declare two variables: admin and name.
Assign the value "John" to name.
now assign the variable name to admin
Show the value of admin using console.log (must output “John”).

************* IF / ELSE *************
write a function that take two arguments in number, and that function check which number is greater
and print the greater number 

************* TERNARY OPERATORS with ARROW FUNCTION *************
email and password checker function, if a user entered email and password it should print "You are logged in"
, and if a user entered only email not password or only password
not email it will print "enter email and password".

************** FUNCTION WITH LOGIC OPERATORS && Built-In STRING FUNCTIONS **************
create a function that takes two arguments or parameters (name, and email), now by the help logic operators
and built-in string function, write your own logic to validate is the email & name is correct, For example:
1) email should contain (@) sign, if not console.log to enter correct email 
2) name should be greater than 6 characters if not console.log to enter more than 6 characters

************** Objects **************
create an object and assign any 3 keys and values including one function to it, and then console.log() it.

************** Objects with functions *************
now create a function in object to concatenate or add, two string except their first character
, keep in mind the arguments should be string not number, for Example:
function anyName(firstName, lastName)
                     |         |
                    1st       2nd   ------> arguments, it should be string when you pass it

after this de-structure the object and then call the function!

*/


var name = 'john'
var admin = name
console.log(admin)
// -------------------

function arguments(a,b){
    if(a>b){
    console.log(a)
    }else{console.log(b)}
}
arguments(20,30);

//---------------------
var obj= {
    name:'Hamza', 
    class:2, 
    age:18,
    sayHi() {
        console.log('sayHi')
    }

}
obj.sayHi()
///////////'''''''/////////////

let check = (x,y) => x&&y ? 'you are logged in' : 'enter email password'
console.log(check('shayansidd89@gmail.com'));

function emailChecker(x, y) {
    if (x.includes('@') && y.length >= 6) {
        console.log(`${x} and ${y}`)
    } else {
        console.log(`Enter email and password`);
    };
};

emailChecker('test@gmail.com', 'test123')