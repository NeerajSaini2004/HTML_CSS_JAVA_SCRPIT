// console.dir(document);
// console.log(document.body);
// console.log(document.body.innerHTML);
// console.log(document.body.innerText);


//dom manipulation
// let heading=document.getElementById("myid");//h1

// console.dir(heading);

// let myclass=document.getElementsByClassName("my-class");//class
// console.dir(myclass);
// console.log(myclass);

// let  paragraphs=document.getElementsByTagName("p");//tag
// console.dir(paragraphs);

// //quearyselectors
// let firstele=document.querySelector("p");//1st element
// console.log(firstele);
// let allele2=document.querySelectorAll("p");//all elements
// console.log(allele2);

// let myid=document.querySelector("#myid ");// id
// console.log(myid);
// let myclass2=document.querySelector(".my-class");// class
// console.log(myclass2);


// //innerhtml
// let div=document.querySelector("div");
// console.log(div.innerHTML);
// console.log(div.innerText);
// console.log(div.textContent);
// // div.innerHTML="<h1>hello</h1>";
// let heading=document.querySelector("h1");
// console.log(heading);
// //change heading text 
// heading.innerText="hello world";


//question 1 //append a new text with h2 heading
// let heading=document.querySelector("h2");
// console.dir(heading);
// heading.innerText=heading.innerText+ " from apna collage ";

// //question 2 //create three box  acces and change some specific text
//    let divs=document.querySelectorAll(".box");
//     console.log(divs);
    //     divs[0].interText="new unique value one ";
//  divs[1].interText="new unique value one ";
//   divs[2].interText="new unique value one ";
//     let idx=1;
//    for(div of divs){
//        div.innerText=`new unique value ${idx}`;
//        idx++;
//    }


//attribute manipulation
// let h2=document.querySelector("h2");
// console.log(h2);
// let id=h2.getAttribute("id");
// console.log(id);

// let name=h2.getAttribute("name");
// console.log(name);
// //set attribute
// h2.setAttribute("name","new name");
// console.log(h2.getAttribute("name"));

// //style manipulation
// let div=document.querySelector("div");
// console.log(div.style);
// console.log(div.style.backgroundColor);
// div.style.backgroundColor="red";
// div.style.color="white";

//insert manipulation

// let newbtn=document.createElement("button");
// newbtn.innerText="click me";
// console.log(newbtn);
// let div=document.querySelector("div");
// div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
// div.after(newbtn);

// div.remove();

//question 1 create button element give it a text "clik me ",bacground color of red & text color of white
// insert the button  as the frst element inside the body tag
// let newbtn=document.createElement("button");
// newbtn.innerText="click me";
// newbtn.style.backgroundColor="red";
// newbtn.style.color="white";
// // let body=document.querySelector("body");
// // body.prepend(newbtn);
// document.querySelector("body").prepend(newbtn);

//create a <p> tag in html , give  it a class & come stlying 
//now create a new class in css and try to append this class to the <p> element
//did you notice how you overwrite the class name when you add a new one 
//solve this problem by using classlist

//  let para=document.querySelector("p");
//     console.log(para);
//     para.classList.add("newpara");

//event in js 
let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
// console.log("btn1 is clcked");
// let a=23;
// a++;
// console.log(a);
// }
// btn1.onclick=(evt)=>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//      console.log(evt.clientX);
//     console.log(evt.clientY);
//     }

//using add event listener multiple event in one attrribute
// btn1.addEventListener("click",()=>{
//     console.log("btn1 is clcked handler1");
   
// })
// btn1.addEventListener("click",()=>{
//     console.log("btn1 is clcked handler2");
   
// })
// let handler3=()=>{
//     console.log("btn1 is clcked handler3");
   
// }
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",()=>{
//     console.log("btn1 is clcked handler4");
   
// })
// //remove event listener
// btn1.removeEventListener("click",handler3);


// let div=document.querySelector("div");
// div.onmouseover=()=>{
//     console.log("div is hovered");
// }
// div.onmouseover=(evt)=>{
// console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//      console.log(evt.clientX);
//     console.log(evt.clientY);}
//using add event listener


//questinn create a  toggle button that change the screen to drak-mode when clicked & light-mode when clicked again 

// let modebtn=document.querySelector("#mode");
// let body=document.querySelector("body");
// let currentmode="light"; //chnage in drak

// modebtn.addEventListener("click",()=>{
   
//     if(currentmode==="light"){
//         // document.querySelector("body").style.backgroundColor="black";
//          currentmode="dark";
//        body.classList.add("dark");
//          body.classList.remove("light");      
       
       
//     }
//     else{
//         //  document.querySelector("body").style.backgroundColor="white";
//       currentmode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
        
//     }
//     console.log(currentmode);
   
// });

// //mouse hover to toogle change the color of the text in paragraph text to red when mouse is over the text
// let para=document.querySelector("p");
// // para.addEventListener("mouseover",()=>{
// //     para.style.color="red";
// // })
// para.addEventListener("mouseout",()=>{
//     para.style.color="orange";
// })


//class
// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     getName(){
//         return this.name;
//     }
//     getAge(){
//         return this.age;
//     }
// }
// let person1=new Person("John",30);  // create an instance of Person object
// console.log(person1.getName());

// //inheritance
// class Student extends Person{
//     constructor(name,age,rollno){
//         super(name,age); // call the parent class constructor
//         this.rollno=rollno;
//     }
//     getRollNo(){
//         return this.rollno;
//     }
// }
// // create an instance of Student object
// let engstudentobj=new Student("Alice",20,"CS101");
// //console.log(engStudent.getName());

//question 1 you are creating a website for your collage. create aclass user with 2 properties , name& email.it also has a method called viewdata that allows user to view website data.
// let data = "Hello, this is a private data for the website.";
// class User {
//     constructor(name, email) {   
//         this.name = name;
//         this.email = email;
//     }
//     viewData() {
//         console.log("data=",data);
//     }
// }
// // create an instance of User object 
// let student1 = new User("John Doe", "john.email");
// student1.viewData(); // Output: Name: John Doe, Email: john.email
// // //question 2 create a class admin that inherits from user class and has an additional method called editData that allows admin to  edit website data.
// class Admin extends User {
//     constructor(name, email) {
//         super(name, email); // call the parent class constructor
//     }
//     editData(newData) {
//         data = newData; // update the private data
//         console.log("Data updated successfully.");
//     }
// }
// // create an instance of Admin object
// let admin1 = new Admin("Jane Doe", "jane.email");
// admin1.editData("New data for the website.");
// admin1.viewData(); // Output: Name: Jane Doe, Email: jane.email

//set timeout
// console.log("Start");
// setTimeout(() => {
//     console.log("Timeout executed after 2 seconds");
// }, 2000); // 2000 milliseconds = 2 seconds
// console.log("End");

//callback function
// const hello=()=>{
//     console.log("hello");
// }
// setTimeout(hello, 2000); // 2000 milliseconds = 2 seconds


//callback hell


// function getdata(dataid , getnextdata){
    
//     setTimeout(() => {
//         console.log("data", dataid);
//         if(getnextdata){
//             getnextdata();
//         }
//     }, 2000); // 2000 milliseconds = 2 seconds

// }

// getdata(1, () => {
//     getdata(2, () => {
//         getdata(3, () => {
//             console.log("All data fetched");
//         });
//     });
// });


//promise
// let promise = new Promise((resolve, reject) => {
//     let success = true; // Simulate success or failure
//     if (success) {
//         resolve("Data fetched successfully");
//     } else {
//         reject("Error fetching data");
//     }
// }   );

// function getdata(dataid ,getnextdata){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             resolve(`Data ${dataid} fetched successfully`);
//             if (getnextdata) {
//                 getnextdata();
//             }   
//         }, 2000); // 2000 milliseconds = 2 seconds
//     });
// }



// //promise chaining
// getdata(1)
//     .then((result) => {
       
//         return getdata(2);
//     })
//     .then((result) => {
      
//         return getdata(3);
//     })
//     .then((result) => {
       
//         console.log("All data fetched");
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// async await
// async function hello() {
//     console.log("hello");
// }


// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000); // 2000 milliseconds = 2 seconds
//     });
// }

// async function getWeatherData() {
//    await api(); //1st
//    await api();     //2nd
// }




// function getdata(dataid ){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataid);
//             resolve("successfully");
            
//         }, 2000); 
//     });
// }



// //async funtion in getdata
// async function getalldata() {
//     console.log("Fetching data...");
// await getdata(1);

//     await getdata(2);
//     await getdata(3);
//     console.log("All data fetched");
// }


// //iife immediately invoked function expression
// // This function will be executed immediately
// ( async function () {
//     console.log("Fetching data...");
// await getdata(1);

//     await getdata(2);
//     await getdata(3);
//     console.log("All data fetched");
// })();



//fetch api cat facts

// Fetch API to get data from an external API

// const url = "https://catfact.ninja/fact?max_length=140"; // API endpoint for cat facts// API endpoint for cat facts 

// let promise = fetch(url);
// //  console.log(promise);
// let factpara = document.querySelector("#fact"); // Paragraph to display the cat fact

// const getData = async () => {
//     console.log("Fetching data...");
//     let response = await fetch(url);
//     console.log(response); //json formate
//     let data = await response.json(); //convert to json
//    factpara.innerText= data[2].text;// Print the cat fact text
// };
 

//question  sending post request to an api
const postUrl = "https://jsonplaceholder.typicode.com/posts"; // API endpoint for posting data  
const postData = async () => {
    const data = {
        title: "foo",
        body: "bar",
        userId: 1
    };

    const response = await fetch(postUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const result = await response.json();
        console.log("Post created successfully:", result);
    } else {
        console.error("Error creating post:", response.statusText);
    }
};