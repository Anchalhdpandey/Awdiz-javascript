// var myName="absaafsba"
// function isStringPalindrome(string){
//     for(var i=0;i<= Math.floor(string.length/2);i++){
//         console.log(string[i], string[string.length-i-1])
//         if(string[i]!==string[string.length-i-1]){
//             return "Not palindrome"
//         }
//     }
//     return "its palindrome"
// }
// console.log(isStringPalindrome(myName))
// var a = "aba";
// b = a.split('').reverse().join('');
// if (a==b){
//     console.log("Palindrome");
// }else{
//     console.log("Not Palindrome")
// }

let x = 121;
function isPalindrome(number) {
  for (var i = 0; i <= Math.floor(number.length / 2); i++) {
    if (number[i] !== number[number.length - 1 - i]) {
      return "Not a palindrome";
    }
  }
  return "palindrome";
}
console.log(isPalindrome(x));

function calculateSum(numm){
let sum=0;
for(let i=0;i<numm.length;i++){
    sum+=numm[i]
}return sum
}
let numm=[1,2,3,4,5,6]
console.log(calculateSum(numm))

function isPal(){
let string="abcba"
b=string.split('').reverse().join('');
if(b==string){
    return "palindrome"
}else{
    return "not palindrome"
}
}
console.log(isPal());


function reverseArray(ray){
return [].concat(ray).reverse()
}
let q=[1,23,4,5,67,8]
let p=reverseArray(q)
console.log(p)