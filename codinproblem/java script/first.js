// console.log("welcome Neeraj in java script");
// console.log("i love you neeraj in java script");
// console.log("i love you universe to help me every where thanku so much ");
// name="neeraj";
// age=21;
// console.log(name);
// console.log(age);
// console.log(`My name is ${name} and i am ${age} years old`);
// a=null;
// b=undefined;
// console.log(a);
//  console.log(b);
//  isfollow=false;
//  console.log(isfollow);
//  isfollow=true;
//  console.log(isfollow);



 //varivable name how to declare


//  let name ="neeraj";
//  const age=21;   //this is the age fix not change on code
//  console.log(name);
//  console.log(age);
//  let b;
//  console.log(b);
//  //make a class 
//  const student ={
//     name:"neeraj",
//     age:21,
//     address:"delhi",
//     cgpa:8.7,
//     ispass:true,
//     };
 



//product information about
   //  const product={
   //    title: "ball pen",
   //    price:10,
   //    rating:4,
   //    offer:5
   //  };
   //  console.log(product);

   //  //access the product information
   //  console.log(product.title);
   //  console.log(product.price);
   //  console.log(product.rating);
   //  console.log(product.offer);
   //  //update the product information
   //  product.price=15;
   //  console.log(product.price);
   //  //delete the product information
   //  delete product.rating;
   //  console.log(product);




   //profile
   // const profile={
   //    username:"neeraj saini ",
   //    isFollow: true,
   //    followers:1000,
   //    following:500,
   //    posts:[{title:"first post",likes:100,comments:50},
   //          {title:"second post",likes:200,comments:100},
   //          {title:"third post",likes:300,comments:150}],
   // }
   // console.log(profile);



   //operators
   //  let a=10;
   //  let b=20;
   //  console.log("a:",a,"b:",b);
   //  console.log("a+b=",a+b);
   //  console.log( a-b);
   //  console.log(a*b);
   //  console.log(a/b);
   //  console.log(a%b);
   //  //exponentiation use to calculate powers 
   //  console.log(a**b);
   //  a++;
   //  console.log(a);
   //  a--;
   //  console.log(a);
   //  a+=10;
   //  console.log(a);
   //  a-=10;
   //  console.log(a);
   //  a*=10;
   //  console.log(a);
   //  a/=10;
   //  console.log(a);
   //  a%=10;
   //  console.log(a);

   //  //logical operators
   //  let x=10;
   //  let y=20;
   //  console.log("x:",x,"y:",y);
   //  console.log("x>y:",x>y);
   //  console.log("x<y:",x<y);
   //  console.log("x>=y:",x>=y);
   //  console.log("x<=y:",x<=y);
   //  console.log("x==y:",x==y);
   //  console.log("x!=y:",x!=y);
   //  console.log("x&&y:",x&&y);
   //  console.log("x||y:",x||y);
   //  console.log("!(x&&y):",!(x&&y));

   //  //ternary operator
   //  let result=x>y?x:y;
   //  console.log("result:",result);
   //  result=x<y?x:y;
   //  console.log("result:",result);


   //chek even and odd numbers using conditional statements
   //  let num=10;
   //  if(num%2===0){
   //    //   console.log(`${num} is even`);
   //    console.log(num);
   //  }else{
   //      console.log(`${num} is odd`);
   //  }


//else if 

    //  let num=15;
    //  if(num%2===0){
    //      console.log(`${num} is even`);
    //  }else if(num%3===0){
    //      console.log(`${num} is divisible by 3`);
    //  } else if(num%5===0){
    //      console.log(`${num} is divisible by 5`);
    //  } else{
    //      console.log(`${num} is odd`);
    //  }


   //  let made="dark";
   //  let color;
   //  if(made==="light"){
   //    color="white";
   //  }else if(made==="dark"){
   //    color="black";
   //  }else if(made==="metal"){
   //    color="grey";
   //  }else if(made==="plastic"){
   //    color="transparent";
   //  }else{
   //    color="unknown";
   //  }
   //  console.log("color:",color);


   //pratice quesstions
   //question 1. get user to inputs a number using prompt("enter number:"). check if the number is a multiple of 5 or not.
   // let number=prompt("enter number:");
   // if(number%5===0){
   //     console.log(number,"  is multiple of 5");
   // }else{
   //     console.log(`${number} is not multiple of 5`);
   // }


   //question 2. school grade number using if and else if statement
   // let grade=prompt("enter your grade:");
   // if(grade>=90){
   //     console.log("A+");
   // } else if(grade>=80){
   //     console.log("A");
   // } else if(grade>=70){
   //     console.log("B");
   // } else if(grade>=60){
   //     console.log("C");
   // } else if(grade>=50){
   //     console.log("D");
   // } else{
   //     console.log("F");
   // }

   //for loop 5 itrations 
   // for(let i=0;i<5;i++){
   //     console.log(i);
   // }

   //calculate the number of 5 iterations
   // let sum=0;
   // for(let i=0;i<5;i++){
   //     sum+=i;
   // }
   // console.log("sum:",sum);
   // console.log("loop is finished");




   //while loop
   // let i=0;
   // while(i<5){
   //     console.log(i);
   //     i++;
   // }
   
   //for-of-loop
//    let str="prachisainiiloveyou";
//   let size =0;  // this use to find the size of string 
//    for(let val of str){
//        console.log("val=",val);
//        size++;
//    }
//    console.log("size:",size);

//for in loop
      // let student={name:"neeraj",
      //    age:21,
      //    address:"delhi"};
      // for(let key in student){
      //     console.log("key:",key,"value:",stu[key]);
      // }

      //print even  number using loops
      // let i=0;
      // while(i<=10){
      //    if(i%2==0   ){
      //     console.log(i);
      // }
      //     i++;
      // }

     // pratic qestion2 make a game guessing the  number of a user
//  let gamenum=25;
//  let usernum=prompt("guess the number of players:");

// while(usernum!=gamenum){//game 
   
//  usernum=  prompt(" you entered wrong number.guess again:");

// }

// console.log("Congratulations, you guessed the  right number!");


//strings
// let str="neerajsaini";
// let str1=" i love you ";
// let str2='prachisaini';
// console.log(str[3]);

//length of string
//template string 
// let specialtype =`hello neeraj saini`;

// console.log(specialtype);

//template leterals

// let name="neeraj";
// let age=21;
// let address="delhi";

// let message=`my name is ${name}, i am ${age} years old and i live in ${address}`;

// console.log(message);
//

//string methodsin js 
// let  str="neeraj";
// let newstr=str.toUpperCase();
// console.log(str);   //ya per direct hm uppercase use nhai kar skthe ple newstr bna kar store kar na hoga 
// console.log(newstr);

// let str="neerajloves";
// let str2="prachi";
// let str3="  i love you universe";
// console.log(str.slice(1,3)); //retunr part of string
// let res=str.concat(str2); // let res=str + str2;
// let res=str + str2+str3; 
// console.log(res);

//string question 
// let username =prompt("Please");
// let message = `@${username}${username.length}`;
// console.log(message);

//method2;
// let finalname = "@"+ username + username.length;
// console.log(finalname);

//array
// let mark=[88,94,99, 92];
// console.log(mark);
// console.log(mark.length);

// let heroes= ["neeraj","saini","prachi","saini","i love you "];

// console.log(heroes);
// //using loop accessing
// //for loop
// for(let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }
// // //using for of loop accessing

// for(let hero of heroes){
//     console.log(hero);
//     console.log(hero.toUpperCase());

// }

//array  question
// let mark=[88,94,99, 92];
// let sum=0;

// // for(let i=0; i<mark.length; i++)
// for(let val of mark) {
//     sum+=val;
// }
// let avg=sum/mark.length;
// console.log(`avg marks of the class=${avg}`);

//qestionn 2 
// let val=[88,94,99, 92];

// for(let i=0; i<val.length; i++){
//    let offer=val[i]/10;
//    val[i]=val[i]-offer;
// }
// console.log(val);

//array method  push
// let fooditems =['apple','orange','potato'];
// fooditems.pop();
// fooditems.push('banana','buger');
// console.log(fooditems);
// array concat   

// let fooditems1 =['apple','orange','potato'];
// let fooditems2 =['icecream','banana','potato'];

// let allfooditems=fooditems1.concat(fooditems2);
  
// console.log(allfooditems);

//array method  unshift  and shift same as to puch pop 

//slice and splice

// let fooditems =['apple','orange','potato','banana'];
// let newitems=fooditems.slice(1,3);
// console.log(newitems);

// let newfooditems=fooditems.splice(1,2,'mango','grapes');

// console.log(fooditems);

//lets practice questions about
//question crete an array to store compnies ->"bloomberg","microsoft","uber","google","ibm","netflix";

// 1.remove the first company from the array 2.remove uber &addolain its place 3.add amazon at the end
// let company=["bloomberg","microsoft","uber","google","ibm","netflix"];

// //remove first company

// company.shift();

// //remove uber & addolain its place

// company.splice(1,1,"ola");

// //add amazon at the end

// company.push("amazon");

// console.log(company);

//funtions start 
// function company(){
//    console.log("company name neeraj ke parachu");
// }
// company();
// function myFuntions(msg) {//parameter ->input
//    console.log(msg);
// }

// myFuntions("Hello World");//argument ->input

//make a function add atwo numbers
// function sum(x,y) {
//    console.log(x+y);
 
// }

// sum(2,5);
//metode 2
// function sum(x,y) {
//    s=x+y; 
// return s;
 
// }
// let val=sum(3,4);
// console.log(val);


//arrow function 
// let sum= (x,y) =>{
//    console.log(x+y);
// }
// sum(3,5 );
// const arrowmul= (x,y) =>{
//    return x*y;
// };
// // let ans=arrowmul(3,5 );

// // console.log(ans);

// const printhello =() =>{
//    console.log("hello");
// };

//question practice


// function countvowels(str){
//    let count=0;
//    for(const char in str){
//       if(str[char] == 'a' || str[char] == 'e' || str[char] == 'i' || str[char] == 'o' || str[char] == 'u'){
         
//          count++;
//       }

//    }
//   return count;
// }
// const countvow=(str)=>{

//  let count=0;
//    for(const char in str){
//       if(str[char] == 'a' || str[char] == 'e' || str[char] == 'i' || str[char] == 'o' || str[char] == 'u'){
         
//          count++;
//       }

//    } 
//   return count;
// };

// let arr=[1,2,3,4,5,6,7,8,9,10];
//  let arr=["neeraj","saini","prachisaini","i love you"];
// // arr.forEach((val)=> {
//    arr.forEach((val, idx,  arr)=> {
// // console.log(val);
// console.log(val.toUpperCase());
// });

//question 2 for a given array of numbers ,print the square of each value suing the foreach loop.

//  let nums=[1,2,3,4,5,6,7,8,9,10];

// nums.forEach((val , idx)=> {
//    console.log(val*val);
// });

//another metode using call back function
// let nums=[1,2,3,4,5,6,7,8,9,10];
// let calsquare=((val , idx)=> {
//    console.log(val*val);
// });
// nums.forEach(calsquare);

//array methodes map
//  let nums=[1,2,3,4,5,6,7,8,9,10];
// let square=nums.map((val)=> {
//    return val*val;
// });
// console.log(square);
//filter
// let nums=[1,2,3,4,5,6,7,8,9,10];
// let even=nums.filter((val)=> { 
//    return val%2==0;
// });
// console.log(even);

//reduce
// let nums=[1,2,3,4,5,6,7,8,9,10];
// let sum=nums.reduce((acc, val)=> {
//    return acc+val;
// });
// console.log(sum);
//largest number
// let nums=[1,2,3,4,5,6,7,8,9,10];
// let largest=nums.reduce((acc, val)=> {
//   return prev>val?prev:val;
// });
// console.log(largest);



//qs. we are given of marks of student .filter the makrs of student that scored 90+.
// let marks=[88,94,99, 92, 85, 90, 95];
// let filtermarks=marks.filter((val, idx)=> {
//    return val>=90;
// });

// console.log(filtermarks);

//qs take a number n as input from user .create an array of numbers from 1 to n.
//use the reduce methode to calculate the sum of all the numbers in the array.
//use the reduce methode to calculate the product of all the numbers in the array.
// let n=prompt("enter the number");
// let arr=[];   
// for(let i=1; i<=n; i++){
//    arr[i-1]=i;
//    // arr.push(i);
// }
// console.log(arr);
// let sum=arr.reduce((acc, val)=> {
//    return acc+val;
// });
// console.log("sum:",sum);
// let factorial=arr.reduce((acc, val)=> {
//    return acc*val;
// });
// console.log("factorial:",factorial);


//dom




