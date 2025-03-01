// "use strict"
// Math Object
// console.log(Math);
// console.log(Math.PI);

// Math method-- round, ceil, floor-trunc
// const number=2.89;
// const result = Math.round(number);
// const result = Math.ceil(number);
// const result = Math.floor(number);
// const result = Math.trunc(number);
// console.log(result);

// min & max 
// console.log(Math.min(1,8,5,4));
// console.log(Math.max(1,8,5,4));

// const num = [1,8,5,4];
// const result = Math.min(...num);
// const result = Math.max(...num);
// console.log(result);

// Random
// const random= Math.random();  // 0-1
// console.log(random);
// console.log(random*100);
// const floor= Math.floor(random*100);
// constfloor=Math.floor(Math.random()*100);
// console.log(floor);

// Date Object  1970ms 
// 21,11,2010
// const date = new Date();
// console.log(date);
// console.log(date.getTime());  // 1970 & ms 
// const date = new Date(2010,11,21,18,10,25);
// console.log(date.getTime());
// console.log(new Date(1737758041791));
// const date = new Date("1/24/2025");
// console.log(date);
// const date2= new Date("January 24 2025");
// console.log(date2);

// methods

// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getTime());
// console.log(date.getDay());

// const fullDate = new Date(2010,11,21);
// const year= fullDate.getFullYear();
// const month = fullDate.getMonth();
// const date = fullDate.getDate();
// const result = `${date}/${month}/${year}`;
// console.log(result);
// console.log(fullDate.toDateString());
// console.log(fullDate.toTimeString());

// setInterval & setTimeout     // 1000ms=1s

// setInterval(()=>{
//     console.log("hi");
// },2000);

// let counter=0;
// const interval = setInterval(()=>{
//     console.log("hi");
//     counter++;
//     console.log("log",counter);
// },1000);

//         clearInterval()
// let counter=0;
// const interval = setInterval(()=>{
//     console.log("hi");
//     counter++;
//     console.log("log",counter);
//     if(counter >= 5){
//         console.log("finish");
//         clearInterval(interval);
//     }
// },1000);

// setTimeout(()=>{console.log("Hello")},1000);
// clearTimeout();

// let counter=0;
// const Timeout = setTimeout(()=>{
//     console.log("Hello");
//     counter++;
//     console.log("log",counter);
//     if(counter >= 1){
//         console.log("finish");
//         clearTimeout(Timeout);
//     }
// },1000);

// // challenge: Determine age based on day

// const determineAge=(birthday)=>{
//     const birthDateMs = new Date(birthday).getTime();
//     const now= new Date().getTime();
//     const ageMs= now - birthDateMs;
//     const oneDay= 24 * 60 * 60 * 1000; //H * m * s * ms //one day ms
//     const age= Math.floor(ageMs / oneDay);
//     return age;
// };
// determineAge(" 2010,11,21");
// console.log(determineAge(" 2010,11,21")); //day
// console.log(determineAge(" 2010,11,21") / 365);
// // 
// console.log("hello");
