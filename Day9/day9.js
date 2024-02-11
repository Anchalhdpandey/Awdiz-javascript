setTimeout(()=>{
    console.log("Executed after 2000 msec.")
    console.log("Executed after 2000 msec.")
    console.log("Executed after 2000 msec.")
},5000);
setInterval(()=>{
    console.log("Executed after 2000 msec.")
    console.log("Executed after 2000 msec.")
    consolee.log("Executed after 2000 msec.")
},1000);

const myInterval=setInterval(()=>{console.log("Executing after 2 sec...")},2000)
function StopInterval(){
    clearInterval(myInterval)
}
setTimeout(StopInterval,5000)

console.log("1")
setTimeout(()=>{console.log("2")},2000)
console.log("3")
setTimeout(()=>{console.log("4"),3000})
console.log("7")


var array=[1,2,3,4,5,6,7,8,9]
const variable=array.findIndex((anchal)=>anchal==7)
console.log(variable)
var array=[1,2,3,4,5,6,7,8,9]
const variable2 =array.find((anchal)=>anchal>7)
console.log(variable2)
array.forEach((number)=>{
    if(number>5){
        console.log(number)
    }
})
const result = array.map((num) => num > 5)
console.log(result)

