// for(var i=0;i<2;i++){
//     for(var j=0;j<2;j++){
//         console.log(i,j)
//     }
// }
// for(var i=10; i<=30;i+=10){
//     for(var j=10;j<=40;j+=10){
//         console.log(i,j)
//     }
// }

var array = [1, 2, 4, 56, 7, 8, 3, 2, 5, 7];
var target = 12;
function findTargetedValues(array, target) {
  for (var i = 0; i <=array.length - 2; i++) {
    for (var j =i+ 1; j<=array.length; j++) {
      if (array[i] + array[j] == target) {
        console.log(array[i], array[j]);
      }
    }
  }
}
findTargetedValues(array, target);

// let i = 10;
// do{
//     console.log(i);
//     i++; }while(i<=9);

// console.log("value of i is ", i);



// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("after pushing element to array 1");
// console.log("array1", array1);
// console.log("array2", array2);
// let array3 = ["item1", "item2"];
// let array4 = [].concat(array3,["item3", "item4"]);
// console.log(array3)
// console.log(array4)

// const fruits=["apples","mango","grapes","fruits4","fruits5"]
// const fruit2=[];
// for(let fruit of fruits){
//     fruit2.push(fruit.toUpperCase());
// }
// console.log(fruit2);
