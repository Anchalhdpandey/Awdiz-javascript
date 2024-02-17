var name="awdiz";
var age=10;
console.log("welcome", name)
console.log(`welcome ${name} and your age ${age}`)
var array1=[1,2,3]
var array2=[4,5,6]
const newArray=array1.concat(array2);
console.log(newArray)
var array3=[1,2,4]
const isExist=array3.includes(2);
console.log(isExist);
var days=["mon", "tb","tz", "wed", "sat"];
console.log(days.sort())
var numbers=[1,5,200,3,2,4]
console.log(numbers.sort((a,b)=>a-b))
console.log(numbers.sort((a,b)=>b-a))
var data=["abc","xyz","lmn"]
console.log(data.join("-"))
console.log(data.join(" "))
console.log(data.join(""))
console.log(data.join())
var nums=[1,2,3,4,5,6]
console.log(nums.at(0))
console.log(nums.at(3))
console.log(nums.at(4))