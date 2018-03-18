//Setting and swapping
var myNumber = 42;
var myName = "Dennis";
var temp = myNumber;
var myNumber = myName;
var myName = temp;

//Print and Count
var total = 0;
for (var i = 512; i <= 4096; i += 5) {
    console.log(i);
    total++;
}
console.log("total of " + total + " numbers!");

//Print -52 to 1066
for (var i = -52; i <= 1066; i++) {
    console.log(i);
}

//Multiples of Six
for (var i = 6; i <= 60000; i += 6) {
    console.log(i);
}

//Don't Worry, Be Happy
function beCheerful() {
    console.log("good morning!");
}
for (var i = 0; i <=98; i++) {
    beCheerful();
}

//Counting, the Dojo Way
for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0 && i % 10 == 0) {
        console.log("Coding Dojo");
    } else if (i % 5 == 0) {
        console.log("Coding");
    } else{
        console.log(i);
    }
}

//Multiples of Three - but Not All
for (var i = -300; i <= 0; i += 3) {
    if (i == -3 || i == -6) {
        continue;
    }
    console.log(i);
}

//What Do You Know?
function inputParameter(incoming) {
    console.log(incoming);
}

//Printing Integers with While
var i = 2000;
while (i <= 5280) {
    console.log(i);
    i++;
}

//Whoa, That Sucker's Huge...
//Should be 0 as its all numbers between a negative and positive of the same value
var sum = 0;
for (var i = -299999; i <= 300000; i += 2) {
    sum += i;
}
console.log(sum);

//You Say It's Your Birthday
var month = 7;
var day = 17;
function birthday(a, b) {
    if (a == month || a == day) {
        if (b == month || b == day) {
            console.log("How did you know?");
        }
    } else {
        console.log("Just another day....");
    }
}
birthday(7,17);
birthday(3,17);

//Countdown by Fours
for (var i = 2016; i > 0; i -= 4) {
    console.log(i);
}

//Leap year
function leapYear(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            console.log("This is a leap year");
        } else {
            console.log("This is not a leap year");
        }
    } else if (year % 4 == 0) {
        console.log("This is a leap year");
    } else {
        console.log("This is not a leap year");
    }
}
leapYear(2016);
leapYear(2018);
leapYear(2000);

//Flexible Countdown
function multipleOfFours(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i -= mult) {
        console.log(i);
    }
}
multipleOfFours(2,9,3);

//The Final Countdown
function finalCountdown(param1, param2, param3, param4) {
    var i = param2;
    while (i <= param3) {
        if (i % param1 == 0 && i != param4) {
            console.log(i);
            i++;
            continue;
        }
        i++;
    }
}
finalCountdown(3,5,17,9);

//Countdown
function countdown(start) {
    var countdown = [];
    for (var i = start; i >= 0; i--) {
        countdown.push(i);
    }
    console.log(countdown.length + " numbers in array.");
    return countdown;
}
console.log(countdown(6));

//print and Return
var arr1 = [2,6];
function printReturn(arr) {
    console.log(arr[0]);
    return arr[1];
}
console.log(printReturn(arr1));

//First Plus Length
var arr1 = [2,6,89,4,32,7,4];
var arr2 = ["what?",23,62,234,74,2,6];
var arr3 = [false,234,5,21,8,4,0];
function firstLength(arr) {
    return arr[0] + arr.length;
}
console.log(firstLength(arr1));
console.log(firstLength(arr2));
console.log(firstLength(arr3));

//Values Greater than Second
var arr1 = [1,3,5,7,9,13];
function valuesGreaterThanSecond(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            total += 1;
            console.log(arr[i]);
        }
    }
    return total;
}
console.log(valuesGreaterThanSecond(arr1));

//values Greater than Second, Generalized
var arr1 = [1,3,5,7,9,13];
function valuesGreaterThanSecond2(arr) {
    var arr2 = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            arr2.push(arr[i]);
        }
    }
    return arr2;
} 
var arr2 = valuesGreaterThanSecond2(arr1);
console.log(arr2 + " that has " + arr2.length + " values.");

//This Length, That Value
function thisLengthThatValue(a, b) {
    var arr1 = [];
    if (a == b) {
        console.log("Jinx!");
    }
    for(var i = 0; i < a; i++) {
        arr1.push(b);
    }
    return arr1;
}
console.log(thisLengthThatValue(2,4));
console.log(thisLengthThatValue(3,3));

//Fit the First Value
function fitFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log("Too Big!");
    } else if (arr[0] < arr.length) {
        console.log("Too Small!");
    } else {
        console.log("Just Right!");
    }
}
fitFirstValue([1,3,6,8]);
fitFirstValue([9,3,6,8]);
fitFirstValue([4,3,6,8]);

//Fahrenheit to Celsius
function fahrenheitToCelsius(fDegrees) {
    return ((fDegrees - 32) * (5/9));
}
console.log(fahrenheitToCelsius(75));

//Celsius to Fahrenheit
function celsiusToFahrenheit(cDegrees) {
    return (((9/5) * cDegrees) + 32);
}
console.log(celsiusToFahrenheit(28));

//Optional
for (var i = 200; i > -200; i--) {
    if (i == (((9/5) * i) + 32)) {
        console.log(i + " degrees is the same in C and F");
    }
}

//Biggie Size
function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(makeItBig([-1,3,5,-5]));

//Previous Lengths
function previousLength(arr) {
    for (var i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}
console.log(previousLength(["Coding", "Dojo", "Coding Dojo", "Hello"]));

//Print Low, Return High
function printLowReturnHigh(arr) {
    var low = arr[0];
    var high = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        } 
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
console.log(printLowReturnHigh([1,57,34,8,-7,2345]));

//Add Seven to Most
var arr1 = [1,56,34,8,45,7,9];
function addSevenToMost(arr) {
    var arrnew = [];
    for (var i = 1; i < arr.length; i++) {
        arrnew.push(arr[i] + 7);
    }
    return arrnew;
}
var arr2 = addSevenToMost(arr1);
console.log(arr2);


//Print One, Return Another
function printOneReturnAnother(arr) {
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return arr[i];
        }
    }
}
console.log(printOneReturnAnother([2,6,3,47,23,8,62]));

//Reverse Array
function reverseArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
var revArr = reverseArray([1,3,4,6,9,6]);
console.log(revArr);

//Double Vision
function double(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        newarr.push(arr[i] * arr[i]);
    }
    return newarr;
}
console.log(double([1,2,3]));

//Outlook: Negative
function outlookNegative(arr) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr1[i] = arr[i];
        } else {
            arr1[i] = -arr[i];
        }
    }
    return arr1;
}
console.log(outlookNegative([1,3,-5,7]));

//Count Positives
function countPositives(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total++;
        }
    }
    arr[arr.length - 1] = total;
    return arr;
}
console.log(countPositives([-1,1,1,1]));

//Always Hungry
function alwaysHungry(arr) {
    var printed = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            printed = true;
        }
    }
    if (printed) {
        console.log("I'm hungry");
    }
}
alwaysHungry(["food", "test", "food", "coding", "dojo"]);
alwaysHungry(["coding", "dojo"]);

//Evens and Odds
function evensOdds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
            console.log("Even more so!");
        } else if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
            console.log("That's odd!");
        }
    }
}
evensOdds([22,4,8,3,87,5,2,1,3,2,1,2]);
evensOdds([2,5,9,37,2,8,48]);

//Swap Toward the Center
function swapTowardTheCenter(arr) {
    var temp = '';
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    temp = arr[2];
    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = temp;
    return arr;
}
console.log(swapTowardTheCenter([true, 42, "Ada", 2, "pizza"]));
console.log(swapTowardTheCenter([1,2,3,4,5,6]));

//Increment the Seconds
function incrementTheSeconds(arr) {
    for (var i = 1; i < arr.length; i += 2) {
        arr[i] += 1;
    }
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return arr;
}
var arr1 = incrementTheSeconds([1,6,4,9,345,2,3,23,71,4]);

//Scale the Array
function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num;
    }
    return arr;
}
console.log(scaleTheArray([3,7,83,3,1,8],2));