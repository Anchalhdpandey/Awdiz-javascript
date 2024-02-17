var array=[1,2,3,4,5,6,7,8,9]
const res=array.push(6)
console.log(res,"res")
console.log(array);
var array1=[1,2,3]
array1.unshift(5)
console.log(array1)
array1.unshift(4)
console.log(array1)
var array2=[1,2,3,5]
const deleted=array2.shift
array2.shift()
console.log(array2)
const array3=['a','b','c','d','e']
const ans=array3.slice(2,4)
console.log(ans);
const ans1=array3.slice(1,5)
console.log(ans1)
const ans3=array3.slice(-3)
console.log(ans3)
const ans4=array3.slice(1,-3)
console.log(ans4)
const array5=['a','b','c','d','e']
array5.splice(1,0,'z')
console.log(array5)
array5.splice(4,1,'x')
console.log(array5)
var todos=['complete assign','eat lunch']
todos.splice(0, 1)
console.log(todos)