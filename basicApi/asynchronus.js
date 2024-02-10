// let a =2;
// let b =2;
// console.log(a+b);

// const c =2;
// const d =2;
// console.log(c+d);
// console.log("text 1");
// console.warn("text 2");
// console.log("text 3");
// // here it print all one by one;
// console.log("text 1");
// setTimeout(function(){
//     console.warn("text 2");
// },2000);
// console.log("text 3");
// here we can see that text 1and text 3 is print first then after 2 second text 2 print
// hence node js is asynchronous
// if we want to resolve it we use promises
console.log("text 1");

let waitingData = new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("text 2")
    },2000);
});
waitingData.then((data)=>{
    console.warn(data);
    console.warn("text 3");
})