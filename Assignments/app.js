// create a function to check two numbers and return true if one of the number is 100 or if the sum of
// the two numbers is 100

// vanilla Javascript version
function checkNum(a, b) {
    if (a === 100) {
        return true
    } else if (b === 100) {
        return true
    } else if (a + b === 100){
        return true
    } else {
        return false
    }
};

console.log(checkNum(90, 10));

// ES6 version
let checkNum2 = (a, b) => a === 100 || b === 100 || a + b === 100;


console.log(checkNum2(0, 100));
console.log(checkNum2(10, 90));

// Write a function that checks the file extension name and return only the extension name.

// vanilla Javascript version
function checkExt(str) {
    return str.slice(str.lastIndexOf('.'));
};

console.log(checkExt('index.html'));

// ES6 version
let checkExt2 = (str) => {
    return str.slice(str.lastIndexOf('.'));
};
console.log(checkExt2('app.py'));

// wite a function to get current date, month and year.

// Vanilla Javascript version
function getDate1(date = new Date()) {
    var dates = date.getDate();
    var months = date.getMonth();
    var years = date.getFullYear();
    return `${dates}/${months}/${years}`;
};

console.log(getDate1());

// ES6 version
const getDate = (date = new Date()) => {
    let dates = date.getDate();
    let months = date.getMonth();
    let years = date.getFullYear();
    return `${dates}/${months}/${years}`
};

console.log(getDate());

// write a function to create a new string adding "New!" in front of a given string.
// if the given string begins with "New!" already then return the original string.

function addStr(str) {
    let incStr = 'New!'
    if (str.includes('New!')) {
        return str
    } else {
        return `${incStr} ${str}`
    }
}

console.log(addStr('office'));
console.log(addStr('New! office!!!'));

// write a function to create a new string from a given string taking the first 3 characters
// and the last 3 characters of a string and adding them together. The string length must be 3 or more,
// if not return the original string.

// Vanilla Javascript version
function newStr(str) {
    if (str.length > 3) {
        return (
            str.substring(0, 3) + str.substring(str.length - 3) 
        )
    } else if (str.length <= 3) {
        return str
    }
}

console.log(newStr('Amsterdam'));

// ES6 version
const newStr1 = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
console.log(newStr1('Pakistan'))

// write a function to extract the first half of a string of even length.

// Vanilla Javascript version
function firstHalf(str) {
    return str.slice(0, str.length / 2);
};

console.log(firstHalf('rain'))

// ES6 version
const firstHalf2 = (str) => str.slice(0, str.length / 2);

console.log(firstHalf2('temp'));

// write a function to concatenate two string except their first character

// Vanilla Javascript version
function rmvCh(strA, strB) {
    return strA.substring(1) + strB.substring(1);
};

console.log(rmvCh('Hello', 'World'));

// ES6 version
const rmvCh2 = (str1, str2) => str1.slice(1) + str2.slice(1);
console.log(rmvCh2('World', 'Hello'))

// Write an expression that invokes the function referenced by the bell object's ring property:

const bell = {
    color: 'gold',
    ring: function () {
      console.log('Ring ring ring!');
    }
}

bell.ring();

//Write an expression using Object.keys() to extract the keys (i.e., property names) from the triangle object
// and values also

const triangle = {
    type: 'polygon',
    sides: 3,
    sumOfAngles: 180,
    equilateral: true,
    equiangular: true
};
Object.keys(triangle);
Object.values(triangle);

/* Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function(data) {
    return (`${data.name} by ${data.artist} sold ${data.sales} copies`)
})

console.log(albumSalesStrings);

/* Using filter()
 *
 * Using the musicData array and filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 */

const musicData2 = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = musicData2.filter( function collect(album) {
    return album.name.length > 9 && album.name.length < 26;
} );


console.log(results);

/*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/
function expandArray() {
    let myArray = [1, 1, 1]
    return function () {
        myArray.push(1)
        return myArray
    }
}

console.log(expandArray());

// Write an expression using bind() that allows us to "borrow" the displayName() method from driver for the car object to use. 
// Note: The expression itself is sufficient (no need to save it to a variable).

const driver = {
    name: 'Danica',
    displayName: function () {
      console.log(`Name: ${this.name}`);
    }
};
  
  const car = {
    name: 'Fusion'
};

driver.displayName.bind(car);

// write a function that find the number of even digits in an array of integers

const findEven = (arr) =>
    arr.filter(num => num % 2 === 0).length;

console.log(findEven([1, 2, 4, 5, 8]));

// Given a year, report if it is a leap year

const leapYear = (year) => year % 4 === 0;

console.log(leapYear(2014));
console.log(leapYear(2016));
console.log('+++++++++++++')

// write a function that check same Object keys in 2 Objects, 

let objectA = {
    a: 1,
    b: 2,
    c: 3
};

let objectB = {
    a: 1,
    b: 4,
    c: 3
};

let objectC = {
    a: 1,
    b: 1,
    c: 1
}

const checkObject = (a, b) => 
    Object.keys(a).every(key => b[key]);

console.log(checkObject(objectA, objectB)); 

// Calculator with Objects and THIS method

let calculator = {
    sum(a, b) {
        return a + b
    },
    mul(a, b) {
        if (a == null || b == null ) {
            return this.result()
        } else {
            return a * b
        }
    },
    result() {
        console.log('Enter a value')
    }
}

console.log(calculator.mul(2, 4));

// create a stepper object with function that allows to go up and go down
const ladder = {
    step: 0,
    stepUp() {
        this.step++
    },
    stepDown() {
        this.step--
    },
    showStep() {
        console.log(this.step);
    }
}

ladder.stepUp();
ladder.stepUp();
ladder.stepDown();
ladder.showStep();

/* create an Object which has the given keys: 
1) day: "Monday", meeting: 0, meetDone: 0!
2) Your Task: create a function inside object that add +1 meeting, the current state of the meeting is
   0, so we want to add a one meeting when the function is called!
3) create another function that print (console.log()) after the new meeting is added.
For Example:
    current state of meeting is 0,
    function is called and one meeting is added is the state, so the new state of meeting is now 01
    now print the new state of meeting after the function is called!
*/

// let obj1 = {
//     day: 'Monday',
//     meeting: 0,
//     meetDone: 0,
//     addMeeting(a) {
//        this.meeting = this.meeting + a
//     },
//     summary() {
//        console.log(`You have ${this.meeting} meeting left`);
//     }
// };

// obj1.addMeeting(2);
// obj1.summary();




// let obj1 = {
//    day: 'Monday',
//    meeting: 0,
//    meetDone: 0,
   
//    addMeeting(a) {
//       this.meeting = this.meeting + a
//    },
   
//    summary() {
//       console.log(`You have ${this.meeting} meeting left`);
//    },
   
//    decrementMeet() {
//       this.meeting = this.meeting - 1
//    },
   
//    decrementSummary() {
//       console.log(`You have ${this.meeting} meeting left`);
//    },
   
//    resetMeeting() {
//       this.meeting = this.meeting * 0
//    },
   
//    meetLeft() {
//       console.log(`You have ${this.meeting} meeting left`);
//    },
   
//    addMeetDone() {
//       this.meetDone++
//    },
   
//    summaryMeetDone() {
//       console.log(`You have done ${this.meetDone} meeting`);
//    }
// };

// obj1.addMeeting(1)
// obj1.addMeeting(1)
// obj1.summary()
// obj1.addMeetDone()
// obj1.summaryMeetDone()
// obj1.decrementMeet()
// obj1.decrementSummary()
// obj1.resetMeeting()
// obj1.meetLeft()

// email and password checker function, if a user entered email and password it should print "You are logged in"
// or else it will return "enter email and password", and if a user entered only email not password or only password
// not email it will again print "enter email and password".

// let userChecker = (user) => {
//    if (user.email && user.password) {
//       console.log('You are logged in')
//    } else {
//       console.log('You need to log in')
//    }
// }

// let userChecker = (user) => user.email && user.password ? 'You are logged in' : 'enter email and password'

// var obj = {
//    name: 'Bilal',
//    email: 'test123@gmail.com',
//    password: 'abc123'
// }

// console.log(userChecker(obj))


// classes in ES6

class User {
   constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
   };
   getFullName() {
      console.log(`${this.firstName} ${this.lastName} is my full name`);
   };
};

const John = new User('Syed', 'Bilal', 18);
John.getFullName()
class Info {
    constructor(fName, email) {
       this.fName = fName;
       this.email = email;
    };
    checkUser() {
       if(this.email.length > 6 && this.email.includes('@') && this.fName.length >= 6) {
          console.log(`${this.fName} and ${this.email}`)
       } else {
          console.log('provide correct email and first name should be 6 characters long')
       }
    }
 }
let user = new Info('Johnny', 'test123@gmail.com');
user.checkUser()


// write a javascript function to compare two objects to determine if the first Object contains the same 
// properties as the second one (which may also have additional)
