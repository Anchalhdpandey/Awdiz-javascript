var object={name:"anchal", age:22, number:+91}
console.log(object.name, object.age, object.number)
object["hobbies"]="drawing"
console.log(object)
var array=[1,2,1,3,4,5,2,3,5];
var myAnswer={}
for(var i=0;i<array.length;i++){
    if(myAnswer[array[i]]==undefined){
        myAnswer[array[i]]=1
        console.log(array[i])
    }
}
console.log(array[i])
console.log(myAnswer)

var array = [1, 2, 1, 3, 4, 5, 2, 3, 5, 1];
var myAnswer = {}

for (var i = 0; i < array.length; i++) {
    // console.log(myAnswer[array[i]])
    if (myAnswer[array[i]] === undefined) {
        myAnswer[array[i]] = 1
    } else {
        myAnswer[array[i]]++
    }

}

console.log(myAnswer)