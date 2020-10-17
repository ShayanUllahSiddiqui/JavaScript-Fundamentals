// JAVASCRIPT BUILT-IN Functions (strings)

var a = 'Nice';
console.log(a.length);
// assuming you have a variable with it's value 'Nice', here's how you'd get it's length

// ********* Basic String Method **********
// .includes(searchString)
// This method returns true when the searchString is included inside the parent string. For example:

var b = 'Hello World';
console.log(b.includes('World')); // it is case sensitive

// ********* toUpperCase() ***********
// This will return a new string that has all of its characters in upper case:
console.log(b.toUpperCase());
// Note that .length should not have () after it because it is a property (a value that has already been computed).
// Whereas .toUpperCase() is a function that requires the () because it's an action that you are performing.

// ********** toLowerCase() **********
var c = 'HELLO WORLD';
console.log(c.toLowerCase());
// This will return a new string that has all of its characters in lower case:

// (((((((( RECAP ))))))))
// You can create strings with " or '.
// .length is a property that gives you the length of a string
// .includes(searchString) returns true or false based on whether the searchString was found or not.
// .toUpperCase() is a function that converts the string to upper case
// .toLowerCase() is a function that converts the string to lower case
// parentheses () on functions are required. .length is a property which is already pre-computed thus 
// why it does not need parentheses
// console.log(...) is used for debugging and is NOT a replacement for return.



// JAVASCRIPT BUILT-IN Functions (Character access)

// You can access a specific character in a string by using the square brackets syntax []. For example:
// var namesArr = ['Bilal', 'Shayan', 'Mehroz']
//                    |         |         |
//                    0         1         2
// indexing always starts from 0 and so on...
// same thing is applied with a word, For example: we have a variable with it's value 'JavaScript', so the 
// indexing of this word are as follows:
// 'JavaScript'
//  ||||||||||
//  0123456789
// same the indexing starts from 0 and so on!
// let's take the above example:

var language = 'JavaScript';
console.log(language[0]);
console.log(language[1]);
console.log(language[2]);
console.log(language[3]);

// ********** Combining it with length **********
// You can also combine the character access with the .length property. So using the same language variable, 
// here's how you get the second to last character from it:
console.log(language[language.length - 2])
// "p" because it's the second to last character from "JavaScript"
 
// (((((((( Recap ))))))))
// Square brackets [index] are used to access a specific index from a string
// The index starts at 0. So the first character is index 0
// You can combine it with the length of a string to get another character in another position



// ******************* Substring *********************
// A substring is a part or a portion of a string. 
//For example, "rain" is a substring of the string "brain" 
//simply because you can get "rain" by taking the last 4 characters.
// When working with strings, you often need to get a few characters of a string rather than all of it. 
// Thus we use the substring method.

// ------------ Substring signature -----------
// A function signature gives you an explanation of the parameters that you need to pass for that method. 
// Let's take a look at the signature of substring:

// Signature
// substring(indexStart, indexEnd);

// This means that when you call substring, you can give it 2 parameters, 
// the first one for the indexStart and the second one for indexEnd.

// indexStart: the position of the first character you'd like to include
// indexEnd: the position of the first character you'd like to ignore
// This means an indexEnd of 5, will only include up to character 4.
// The combination of these 2 will give you a substring.

// Let's take an example with a variable named language with a value JavaScript, 
// and let's get the substring with indexStart of 1 and indexEnd of 4. 
// This will return a string made up of all the characters from positions 1 to 3, 
// because 4 is the first character that is ignored:
// the result will be 'ava'
// Javascript

console.log(language.substring(1, 4));

// OPTIONAL PARAMETERS
console.log(language.substring(4));
// Result will be: Script

// ((((((((((( Recap )))))))))))
// A substring is a part or a portion of a string.
// string.substring(indexStart, indexEnd) is used to return a portion of the string.
// indexStart: the position of the first character you'd like to include.
// indexEnd: the position of the first character you'd like to ignore.
// the indexEnd argument is optional which means you can leave it out.


// ********************** Template Strings ***********************
// we previously used (' ' or " "), there is one more thing called (` `) template string,
// but why we used template strings when we have (' ' and " ")
// You already know that you can create strings with double quotes or single quotes, 
// but as you already know, these strings do not support interpolation.
// Template strings, however, support interpolation and other nifty features.
// For example:

var nameA = 'Selena ';
var nameB = 'Gomez';

// first we will try to write these two variables in ( ' ' or " " )
console.log('Female singer name is ' + nameA + nameB);

// Now we will use Template String (` `)
// Interpolation
console.log(`Female singer name is ${nameA}${nameB}`);

// ((((((((((((( Recap )))))))))))))
// A template string is a string created with the backtick character: `
// Template strings can span multiple lines
// Template strings support interpolation with the ${variableName} syntax

// ************ Miscellaneous string methods ************
// commands of Miscellaneous string methods:
// startsWith() and endsWith()
// .startsWith(searchString) will return true when the string starts with the searchString and false otherwise.
// .endsWith(searchString) will return true when the string ends with the searchString and false otherwise.
// here are some example:

const phoneNumber = "+92 123456789";
console.log(phoneNumber.startsWith('+')); // true
console.log(phoneNumber.startsWith('1')); // false
console.log(phoneNumber.endsWith('9')); // true
console.log(phoneNumber.endsWith('7')); // false

// ******* Trim ********
// Imagine you ask your users to write their email, and they end up writing "hi@mail.com ".
// Did you notice that empty space at the end?
// In those cases, you can trim the string which removes extra spaces and newlines.
const text = 'Hello   world';
console.log(text.trim());

// ((((((((((((((( Recap )))))))))))))))
// string.startsWith(substring) returns true when a string starts with the substring.
// string.endsWith(substring) returns true when a string ends with the substring.
// string.trim() removes additional spaces from the beginning and the end of a string.

// ===================================================================================================
// ===================================================================================================
// ===================================================================================================

// +++++++++++++++++++ JavaScript Built-in Function (Numbers) +++++++++++++++++++++

// 1
// 2
// -5
// 3.5
// 2000
// 2019
// -23.51
// All of these are examples of Numbers in JavaScript. It doesn't matter if it's negative or positive, 
// if it has a decimal (values after the .) or not. We call them numbers.

// *********** CONVERTING NUMBER TO STRING ************
// You can convert a number to string by simply calling the .toString() method.
// Let's take an example where we have a variable called answer with a value 42;

const answer = 42;
console.log(answer.toString()); // '42'

// *********** CONVERTING STRING TO NUMBER ************
// In some scenarios, you'd like to convert from a string to a number. For that, 
// you'd have to use the Number.parseInt method. Here's an example, 

console.log(Number.parseInt('12'));

// Note that the Number in Number.parseInt("42") is an Object in JavaScript 
//that contains methods related to numbers, and .parseInt() is one of them. 
// It's a method that you call on Number to convert a string into a number.

// ************** JavaScript (IF / ELSE) condition ***************

// Conditions in JavaScript have the following blueprints:

if (condition){   
    //do something
}                 

// Let's take an example, assuming that we have a variable const grade = 15;

// if (grade >= 10) {  
    //passing          
// }   

// ******** ELSE *********

// You can also add an else block for all other cases:

const grade = 15;
if (grade >= 10){
    //passing
} else {
    //failing
}

// ******************* Returning booleans *******************

// Whenever you're returning a boolean (true or false), 
// it's quite redundant to use if and else. Here's an example:

function isPassing(grade){
    if (grade >= 10){
        return true;
    }else{
        return false;
    }
}

isPassing(12);

// This is redundant because grade >= 10 on its own, 
// returns true or false depending on the grade. Which means you don't need to wrap it with an if/else statement.

// That's why you can simply refactor it like this:

function isPassing(grade){
    return grade >= 10;
}
// without using if/else which will always return a boolean!


// *********** Legal & Illegal Names *************

// A variable name can't contain any spaces
// A variable name can contain only letters, number, dollar signs, and underscores
// The first character must be a letter, or an underscore ( _ ), or a dollar sign ($)
// Numbers are not allowed as the first character of variable. For example:

// Legal Names 
var hello = 56;
var _xyz = 44;
var $work = 'Office';
var user2 = 56;
var i_info = true;
var my$work = ['one', 'two', 'three'];

// Illegal Names
var 2user = 12; // cant start with number
var my user = 23; // cant contain spaces
var hellp#world = 34;
var my-info = true;
var my?info = ['one', 'two', 'three'];
var my*info = 'office';

// Types of variables
// CaseSensitive
// CamelCase

// ========== CaseSensitive ==========

// variables names are case sensitive, Example:

var rose = 'Red';
var Rose = 'Red';

console.log(rose);
console.log(Rose);
console.log(ROSE); // Error

// so rose and Rose are two different variables


// ========== CamelCase ===========

// if there are more than one word in the variable, then it is recommended to use CamelCase
// A camelCase names begins in lower case. If there more than on word in the name, each subsequent 
// word gets an initial cap, creating a hump. For example:

var firstName
var userResponse
var timeLimit
var newDay

// ************* BODMAS & Operator Precedence *************

// complex arithmetic expressions can pose a problem when there are multiple operators in single expression
// Example:

var a = 5 + 2 * (3 - 2) / 2; // result 06

// 1) 3 - 2 with brackets will be evaluated first, result 01
// 2) 2 * result of (3 - 2) so 2 * 1, result 02
// 3) Result of 2 * (3 - 2) divide by 2 so 2 / 2, result 01
// 4) 5 + result of 2 * (3 - 2) / 2, so 5 + 1, result 06

// B ---------------> Brackets first 
// O ---------------> Orders (i.e Powers and Square Roots, etc)
// DM --------------> Division and Multiplication (left to right)
// AS --------------> Addition and Subtraction (left to right)

// Examples: 

var a = 3 + 5 * 2 // result 13
var b = 8 / 2 - 1 // result 3
var c = 3 % 2 + 4 - 1 // result 4
var d = a + 5 * c - b / (3 + b) // ----- output is 06, so 3 + b(03) = 06
//          --|--        --|--
//            |            |
//            20           6

//     a + 20 - b / 6 -------- b = 3 / 6 = 0.5 
//              --|--
//                |
//               0.5

//     a + 20 - 0.5 = 32.5
//     |
//     |
//     13

// *************** Increment /  Decrement *************

// Increment
var a = 6;
a++
console.log(a); // output 07

// increment wil add one more value in the existing value

// Decrement
a--
console.log(a); // output 05
// decrement wil decrease one value in the existing value

// 01 Example:
var b = ++a;
console.log(b); // output 7

// 02 Example
var a = 6;
var b = a++;
console.log(a); // output 7
console.log(b); // output 6

// WHY?
var a = 6;    // -----   ------> 07 ------------> 02 step
var b = a++; // 6 ___|
//              |
//           01 step

// ************** String Concatenation **************

// The + operator can also be used for concatenation strings, Example:

var firstName = 'Java';
var lastName = 'Script';

console.log(firstName + " " + lastName);
//            OR

// make one more variable
var fullName = firstName + " " + lastName
console.log(fullName);

// similar adding two number will return the sum, but adding a number and a string will return a string
// Example:

var a = "6" + 2       // "62"
var b = 3 + "6"       // "36"
var c = "Hello " + 2   // "Hello 2"
var d = "Hello " + 2 + 3 // "Hello 23"
var e = "Hello " + (3 + 4) // "Hello 7"

// ************** FUNCTIONS ****************

// A JavaScript Function is executed when something invokes it (calls it).
// it save your repetitive code and makes code easier to understand.
// you can reuse code: Define the code once, and use it many times.

// Just like we made a program of Pass and Fail checker with if else statement,
// if we want to use this code again so we have to write this if else statement again...
// because code always run line by line, and once a line executed it will not be executed again..
// so we have to write the code again... and it consumes our lot of time..
// so Function came out, what it do is function can save your logic inside block of code...
// and when you want to use this code again you don't have to write the logic again you will just write a 
// function name and it will execute you login inside a function.
// write once and use anywhere with only function name.

// *************** Functions Declarations *************

// 1) A function is defined with the function keyword, followed by a name and followed by parentheses()
// 2) Function name can contain letters, digits, underscore, and dollar signs(same rule as variable)
// 3) the parentheses may include parameters names separated by commas: (parameter01, parameter02)
// The code to be executed, by the function is placed inside curly brackets: { }

function name(parameter01, parameter02) {
    // code to be executed
};

// Example
function sum(a, b) {
    return a + b
};
// remember the function is only declared, and when you want to use it just write the function
// name with brackets ( ) and pass the parameters and the code will execute.

// ===== Examples =====

function showMessage() {        
    console.log('Hello World')  // -------> function declared
};

// calling function
showMessage();      // output: Hello World

// ************ Passing Data to Function ************

// in order for a function to become a programmable robot rather than a one-job, you have to set it up to 
// receive the data you are passing
// You can pass any type of data to function depending on requirement

function multiply(num1, num2) {
    var num3 = num1 * num2;
    console.log("The output is: ", num3);
};

multiply(3, 3);

function showMessage(name) {
    console.log('Hello', name);
};

showMessage('Mike');

// ***************** Function Return ******************
// Function can return data back to caller.
// After execution login in function if you want to return result to the caller of 
//function then use Return keyword.
// When function reaches return statement, the function stop execution and return value 
// is 'returned' back to caller.
// and if you don't give return statement in the function, it will show undefined.

function test() {

};
var a = test();    // return undefined
console.log(a);    // undefined

function test() {
    return 45
};
var a = test();
console.log(a);

function multiply(num1, num2) {
    return num2;            // function execution ends here
    return num1 * num2
};

var a = multiply(3, 6);    // returns 6
console.log(a);            // 6

// ****************** PARAMETER RULES *******************
// function don't specify data types for parameters.
// function don't perform type checking on the passed arguments.
// function don't check the number of arguments received.
// if a function is called with missing arguments, the missing value are set to: undefined

function showMessage(name) {
    console.log("Hello " + name);
};
showMessage("World")        // Hello World
showMessage(45)             // Hello 45
showMessage(true)           // Hello true
showMessage()               // Hello undefined
showMessage("Mike", 12)     // Hello Mike

// ****************** FUNCTION IN EXPRESSION *****************
// function can be used in expressions
// just like we use variables in calculation we can use function and output function will be included
// in calculation


function multiply(num1, num2) {
    return num1 * num2
};

var a = multiply(3, 6) + 5
console.log(a);             // 23

// Example 02

function multiply(num1, num2) {
    return num1 * num2
};

function sum(a , b) {
    // Result of multiply sum with value of b
    return multiply(a, b) + b         // 16
};
 
var total = sum(3, 4) + 6            
console.log(total)                    // 22

// Example 03

function multiply(num1, num2) {
    return num1 * num2
};

function sum(a, b) {
    return a + b
};

// Call multiply first and result passed to sum
var total = sum(multiply(3, 4), 2) + 6

// ************** Function Hoisting ***************

// Hoisting is JavaScript's default behaviour of moving declarations to the top of the current scope
// Because of this, JavaScript function can be called before they are declared
// But variable don't move declaration to the top of the current scope
// like if you define a variable: Example

var a = 2;

// and now if you want to access it on the top of the scope, it will return undefined: Example

// var a;       ------------->  only variable name go to the top of the scope... that's why is will through 
//                              undefined

console.log(a);
var a = 2;  

// Example 01

var total = sum(5, 6);         // Calling before declaration
console.log('Sum = ', total);

var sum = (a, b) => a + b

function sum(a, b) {
    return a + b
};

// Example 02

var sum;
var mul = multiply(3, 2);
console.log("Mul = ", mul);   // 6
var add = sum(1, 2);
console.log("Add = ", add);   // sum is not a function

var sum = function (a, b) {
    return a + b
};

function multiply(num1, num2) {
    return num1 * num2
};

// ****************** ARGUMENTS PASSED BY VALUE *******************

// Example 01

var num = 5;

function changeValue(a) {
    return a                // change will not affect num
};

changeValue(num);          // 5
console.log(num);          // 5, num will not be updated

// Example 02

var arr = [1, 2, 3, 4];

function arrayIndex(val) {      // array received in val
    val[1] = 57                 // updating val will also update arr
};

console.log(arr[1]);            // 12 before calling function
arrayIndex(arr);                
console.log(arr[1])             // 57 after calling function

// Example 03

var obj = { name: 'John', age: 23 };

function updateObject(val) {        // object received in val  
    val.age = 30                    // updating val will also update obj
};

console.log(obj.age);               // 23
updateObject(obj);
console.log(obj.age);               // 30

// ************** Nested IF **************

var score = 80;

if (score > 80) {
    console.log('Grade A');
    if (score > 90) {
        console.log('Reward 100$');
    } else {
        console.log('Reward 20$')
    };
} else {
    console.log('failed');
};

// ************* Ternary Operator *************

// 1) ( ? )
// 2) ( : )

if (x) {
    return true
} else {
    return false
};

// Ternary Operator is the simplest method of doing If else statement, Example: 
x ? true : false

// these statement are build to use in WebApp development framework like: React, Angular, Vue etc!

// Example: 01

function ageVerification(x) {
    if (x >= 18) {
        console.log('Eligible')
    } else {
        console.log('Not Eligible')
    };
};
console.log(ageVerification(18));     // Eligible
// this method is old, and was used in Vanilla Javascript

// Now we are using Ternary Operator in this function

function ageVerification(x) {
    x >= 18 ? 'Eligible' : 'Not Eligible'
}; 
//   |        |            |
//  if      return       else

console.log(ageVerification(15));     // Not Eligible 

// same function with new syntax

// now we will write this entire function in one line with javascript updated version
// ECMAScript (ES6)

let ageVerification = (x) => x >= 18 ? 'Eligible' : 'Not Eligible';
//                          ----|----   ---|---      ------|------
//                          condition      |     if condition was false
//                                if condition is true

// Example: 02

function adminControl(user) {
    if (user) {
        if (user.admin) {
            console.log('showing admin panel')
        } else {
            console.log('you need to be an admin')
        }
    } else {
        console.log('You need to logged in')
    }
}

let mainUser = {
    name: 'Harry',
    admin: true      // 'showing admin panel'
};

let userOne = {
    name: 'Harry',
    admin: false     // 'you need to be an admin'
};

let userTwo = null    // 'You need to logged in' 

adminControl(mainUser);

// Now we are using Ternary Operator in this function

function adminControl(user) {
   return user ? user.admin ? 'showing admin panel' : 'you need to be an admin' : 'You need to logged in'
};

// now we will write this entire function in one line with javascript updated version
// ECMAScript (ES6)

let adminControl = (user) => user ? user.admin ? 'showing admin panel' : 'you need to be an admin' : 'You need to logged in';

// *************** Objects in JavaScript ***************

// Objects in JavaScript is similar to Array/
// Array contains only values for Example:
const arr = [4, 'Mike', true];
//          --------|--------
//                values

// but in Objects it contains keys and values also, so whats, the syntax:

// -----------> 1) object contain a variable just like array and a pair of curly brackets,
const obj = {  };

// -----------> 2) now first we will write a key name and then pass a value in key,
const obj = {
    name: 'John',
    age: 23,
    isAdult: true
};
// the name, age and isAdult is the key name, and "John", 23, true is their values,
// so if we want to access a specific key, so we will just call variable name and key name,

console.log(obj.name);     // John

// and if you want to access a whole object so just write only variable name
console.log(obj);

// *************** Nested Objects in JavaScript ***************

const obj = {
    name: 'John',
    age: 23,
    isAdult: true,
    nested2: {
        name: 'Mike',
        age: 16,
        isAdult: false
    }
};

console.log(obj.nested2.name);

// nested object is same thing, it just only contain object in object.
// now if i want to change the value of name, we will write variable name pass the key name: Example,
obj.name = 'peter'    
console.log(obj.name)       // peter

// ************** Functions in Objects ***************
// in objects we will write anonymous function, Example:

var obj = {
    name: 'John',
    age: 23,
    isAdult: true,
    nested2: {
        name: 'Mike',
        age: 16,
        isAdult: false
    },
    sayHi: function() {
        console.log('Hello')
    }
};

// sayHi is the key of the function and it also act like its name, and the value of the sayHi is 
// an anonymous function which prints 'Hello',

obj.sayHi();

obj = {
    sayHi: function() {
      console.log("Hello");
    }
};

// method shorthand looks better, right?
obj = {
  sayHi() { // same as "sayHi: function()"
    console.log("Hello");
  }
};


// ================== Module one completed! ================



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% ADVANCE JAVASCRIPT %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// ************* "THIS" in methods *************
// It’s common that an object method needs to access the information stored in the object to do its job.
// For instance, the code inside user.sayHi() may need the name of the user.
// To access the object, a method can use the this keyword.
// The value of this is the object “before dot”, the one used to call the method.

let user = {
    name: 'John',
    age: 12,
    sayHi() {
        // "this" is the "current object"
        console.log(this.name)
    }
};

user.sayHi();    // John

// *********** ( THIS ) is not Bound **********
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  console.log(this.name);
};

// Calling without an object: this == undefined
function sayHi() {
    console.log(this);
}

sayHi(); // undefined

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

// ************** Comparison by reference *************

let a = {};
let b = a;             // copy the reference
console.log(a == b);      // true, both variables reference the same object
console.log(a === b);     // true

// And here two independent objects are not equal, even though both are empty:
let a = {};
let b = {}; // two independent objects

alert( a == b ); // false

// ************ Cloning and merging, Object.assign ************
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

// If the copied property name already exists, it gets overwritten:
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

console.log(user.name); // now user = { name: "Pete" }

// *************** The "new Function" syntax ***************

// There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.
// The syntax for creating a function:

let fun = new Function('a', 'b', 'return a + b')
console.log(fun(1,2));

// and heres the function without arguments
let sayHi = new Function('console.log("Hello")');
sayHi();

// **************** Time Interval in JS ******************

// DELAY
// The delay before run, in milliseconds (1000 ms = 1 second), by default 0.

// arg1, arg2…
// Arguments for the function (not supported)

// For instance, this code calls sayHi() after 03 second:
function set() {
    console.log('Hi')
}

setTimeout(set, 3000)

// with Arguments it should look like this
function add(a, b) {
    console.log(a + b)
};

setTimeout(add, 2000, 2, 3)

// Example 01
let timer = setTimeout(() => {
    console.log('Hello')
}, 2000)

timer();

// Example 02
let func = (renderData) => {
    setTimeout(() => {
       renderData('Hello')
    }, 2000)
};

function renderData(x) {
   console.log(x)
};

func(renderData);

// ************ Decorators and forwarding, call/apply ***********

// ------------- CALL -------------

// we will create an object, and inside that object we will create a function that refers to that object.
let obj1 = {
    name: 'Mike',
    age: 25,
    borrow() {
        console.log(this.name + " " + this.age)
    }
};

// similar to that we will also create one more object without function, but we want to make a function
// that also refers to the second object, so here a CALL method comes in, we wil borrow a function from 
// first object and use it on second object.

var obj2 = {
    name: 'Mike',
    age: 25
};

// function borrowing
obj1.bio.call(obj2);  // Mike 25

// this is the first method of borrowing a function from other object, now we will see another method of doing it

// we create a function not in any object, we created this function to act globally

// and heres our obj
var obj1 = {
    name: 'John',
    age: 23,
};

// now we will use this function in object with call method
bio.call(obj1);    // John 23

// same thing we are doing in this example, but now we are taking arguments in function,

let bio = function(grade) {
    console.log(this.name + " " + this.age + " class " + grade)
}

var obj2 = {
    name: 'Mike',
    age: 25
};

bio.call(obj2, 08)
//              |
//    arguments passed here

// --------------- APPLY -----------------
// apply is also the same thing as call method, the only change is we will pass arguments in array shape,

let bio = function(grade, home) {
    console.log(this.name + " " + this.age + " class " + grade + " " + home)
}

var obj2 = {
    name: 'Mike',
    age: 25
};

bio.apply(obj2, [08, "malir"])
//              ------|-------
//                array form

// -------------- BIND --------------

// bind method creates a copy of a function and store it on variable and we can just call the variable name
// and our function will invoke

let myName = bio.bind(obj2, 08, 'malir');
myName();

// *************** Rest parameters and spread syntax **************
// The rest of the parameters can be included in the function definition by using 
// three dots ... followed by the name of the array that will contain them. The dots literally 
// mean “gather the remaining parameters into an array”.

// For instance, to gather all arguments into array args:

function sum(a, b, ...args) {
    return a + b;
    console.log(...args)        // 3, 4, 5
};
console.log(sum(1, 2, 3, 4, 5));
// only 1 and 2 parameters will add up in function, and the reset of other will go in array.

// We can choose to get the first parameters as variables, and gather only the rest.
// Here the first two arguments go into variables and the rest go into titles array:
function addUp(fName, lName, ...title) {
    console.log(`${fName} ${lName}`);
    console.log(title[0]);               // Mehroz
    console.log(title[1]);               // Shayan
    console.log(title);                  // Mehroz and Shayan
};

addUp('Zulkaif', 'Bilal', 'Mehroz', 'Shayan');

// ----------------- The rest parameters must be at the end ----------------
// The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
    // error
}
// The ...rest must always be last.

// ------------------- The “Arguments” variable ------------------
// There is also a special array-like object named arguments that contains all arguments by their index.
// For instance:

function showName() {
    console.log(arguments.length);       // 2
    console.log(arguments[0]);           // John
    console.log(arguments[1]);           // Mike
};

// shows: 2, John, Mike
showName("John", "Mike");                

// shows: 1, David, undefined (no second argument)
showName("David");                      // 1, David, undefined

// In old times, rest parameters did not exist in the language, and using arguments was the 
// only way to get all arguments of the function. 
// And it still works, we can find it in the old code.

// ----------- Arrow functions do not have "arguments" -----------
// If we access the arguments object from an arrow function, it takes them from the outer “normal” function.

// ******************* Spread Syntax ********************
// We’ve just seen how to get an array from the list of parameters.
// But sometimes we need to do exactly the reverse.
// For instance, there’s a built-in function Math.max that returns the greatest number from a list:

console.log( Math.max(3, 5, 1) ); // 5
// Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?
// Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:
let arr = [3, 5, 1];

console.log( Math.max(arr) ); // NaN

// And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be 
// unsure how many there are. As our script executes, there could be a lot, or there could be none. 
// And that would get ugly.
// Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.
// When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
// For Math.max:

let arr = [3, 5, 1];

console.log( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

// We also can pass multiple iterables this way:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) ); // 8

// We can even combine the spread syntax with normal values:
// Also, the spread syntax can be used to merge arrays:
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

// ******************** Get a new copy of an array/object ********************
let arr = [1, 2, 3];
let arrCopy = [...arr]; // spread the array into a list of parameters
                        // then put the result into a new array

// do the arrays have the same contents?
console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
console.log(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
console.log(arr); // 1, 2, 3, 4
console.log(arrCopy); // 1, 2, 3

// Example 02
let obj = { a: 1, b: 2, c: 3 };
let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object

// do the objects have the same contents?
console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
console.log(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

// -------------------- SUMMARY ------------------------
// When we see "..." in the code, it is either rest parameters or the spread syntax.

// There’s an easy way to distinguish between them:

// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the 
// list of arguments into an array.
// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.


