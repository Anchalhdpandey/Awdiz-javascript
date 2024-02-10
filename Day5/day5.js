function login(){
    console.log("hi from function")
}
login();

function addition(value1, value2){
    var count=0;
    for(var i=value1;i<=value2;i++){
        if(i%2==1){
            count=+i;
        }
    }
    return count;
}

const variable=addition(35, 89)
console.log(variable)

let num1 = 7;
let num2 = "7";

console.log(num1<num2);

// == vs === 
console.log(num1 === num2);

// != vs !==

console.log(num1 !== num2);

let day = 9;

