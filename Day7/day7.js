var myName="absaafsba"
function isStringPalindrome(string){
    for(var i=0; Math.floor(string.length/2);i++){
        console.log(string[i], string[string.length-i-1])
        if(string[i]!==string[string.length-i-1]){
            return "Not palindrome"
        }
    }
    return "its palindrome"
}
console.log(isStringPalindrome(myName))

var a = "aba";
b = a.split('').reverse().join('');
if (a==b){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome")
}