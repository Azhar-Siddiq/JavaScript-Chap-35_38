// ----------------------------------------------Chap (35-38)----------------------------------------------

// Q:1
// Ans:1
// function currentTime(){
//     var today = new Date();
//     document.write(today)
// }
// currentTime();

// Q:2
// Ans:2
// function foo(firtName,lastName){
//     var fullName = firtName + " " + lastName;
//     document.write("Hello " + fullName + "! Welcome on our page")
// }
// foo(prompt("Enter first name"), prompt("Enter last name"));

// Q:3
// Ans:3
// function sum(num1,num2){
//     var add = num1 + num2;
//     document.write("Your sum is " + add);
// }
// sum(+prompt("Enter firts number"),+prompt("Enter second number"));

// Q:4
// Ans:4
// function calculator(num1, operator, num2){
//     if(operator === "+"){
//         var add = num1 + num2
//         console.log(add);
//     }else if(operator === "-"){
//         var sub = num1 - num2
//         console.log(sub);
//     }else if(operator === "*"){
//         var mul = num1 * num2
//         console.log(mul);
//     }else if(operator === "/"){
//         var div = num1 / num2
//         console.log(div);
//     }
// }
// calculator(+prompt("Enter num 1"),prompt("Enter operator"),+prompt("Enter num 2"));

// Q:5
// Ans:5
// function square(num){
//     var double = num * num;
//     document.write(double);
// }
// square(+prompt("Enter a number for its square"));

// Q:6
// Ans:6
// function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
// console.log(factorial(+prompt('Enter number')));
// console.log(factorial(+prompt('Enter number')));

// Q:7
// Ans:7
// function countNumbers(start, end) {
//     if (start <= end) {
//       for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//       }
//     } else {
//       for (var i = start; i >= end; i--) {
//         document.write(i + "<br>");
//       }
//     }
//   }
// countNumbers(+prompt('Enter initial number for forward count'), +prompt('Enter last number for forward count'));
// countNumbers(+prompt('Enter last number for backward count'), +prompt('Enter initial number for backward count'));

// Q:8
// Ans:8
// function calculateHypotenuse(base, perpendicular) {
//     function calculateSquare(num) {
//       return num * num;
//     }
//     var baseSquared = calculateSquare(base);
//     var perpendicularSquared = calculateSquare(perpendicular);
//     var hypotenuseSquared = baseSquared + perpendicularSquared;
//     var hypotenuse = Math.sqrt(hypotenuseSquared);
//     return hypotenuse;
//   }
// console.log(calculateHypotenuse(3, 4));
// console.log(calculateHypotenuse(5, 12));

// Q:9
// Ans:9
// function calculateRectangleArea(width, height) {
//   var area = width * height;
//   return area;
// }
// var rectangleWidth = 5;
// var rectangleHeight = 7;
// var area2 = calculateRectangleArea(rectangleWidth, rectangleHeight);
// console.log("Area 2:", area2);

// Q:10
// Ans:10
// function isPalindrome(str) {
//   var cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   var reverseStr = cleanStr.split('').reverse().join('');
//   return cleanStr === reverseStr;
// }
// var word1 = "madam";
// console.log(word1 + " is a palindrome:", isPalindrome(word1));
// var word2 = "hello";
// console.log(word2 + " is a palindrome:", isPalindrome(word2));

// Q:11
// Ans:11
// function capitalizeFirstLetters(str) {
//   var words = str.split(' ');
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//     words[i] = capitalizedWord;
//   }
//   var capitalizedStr = words.join(' ');
//   return capitalizedStr;
// }
// var inputString = 'the quick brown fox';
// var outputString = capitalizeFirstLetters(inputString);
// console.log("Input: " + inputString);
// console.log("Output: " + outputString);

// Q:12
// Ans:12
// function findLongestWord(str) {
//   var words = str.split(' ');
//   var longestWord = '';
//   var longestWordLength = 0;
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
//     if (word.length > longestWordLength) {
//       longestWord = word;
//       longestWordLength = word.length;
//     }
//   }

//   return longestWord;
// }
// var inputString = 'Web Development Tutorial';
// var longestWord = findLongestWord(inputString);
// console.log("Input: " + inputString);
// console.log("Longest Word: " + longestWord);

// Q:13
// Ans:13
// function countOccurrences(str, letter) {
//   var lowercaseLetter = letter.toLowerCase();
//   var lowercaseStr = str.toLowerCase();
//   var count = 0;
//   for (var i = 0; i < lowercaseStr.length; i++) {
//     var currentChar = lowercaseStr[i];
//     if (currentChar === lowercaseLetter) {
//       count++;
//     }
//   }

//   return count;
// }
// var inputString = 'JSResourceS.com';
// var letterToCount = 'o';
// var occurrences = countOccurrences(inputString, letterToCount);
// console.log("Input String: " + inputString);
// console.log("Letter to Count: " + letterToCount);
// console.log("Occurrences: " + occurrences);

// Q:14
// Ans:14
// function calcCircumference(radius) {
//   var circumference = 2 * Math.PI * radius;
//   console.log("The circumference is " + circumference.toFixed(2));
// }
// function calcArea(radius) {
//   var area = Math.PI * radius * radius;
//   console.log("The area is " + area.toFixed(2));
// }
// var radius = 5;
// calcCircumference(radius);
// calcArea(radius);