// Type converstion 

// let type = "10" /  2;
// console.log(type)
// console.log(typeof type);



// 1.String()
// 2.Number()
// 3.Boplean()


// convert into Srting

// let type = 100;
// console.log(typeof type)

// let type2 = String(type)
// console.log(typeof type2)


// convert To number 

// let type = true;
// console.log(typeof type)

// let type2 = Number(type)
// console.log(typeof type2)


//covert into Boolean 

// let type = "Hello"
// console.log(typeof type)

// let type2 = Boolean(type)
// console.log(typeof type2)



// String Function

// SubString
// let str = "Hello I am Fornt-end developer"
// let str2 = str.substring(0,16)
// console.log(str2)

// //ChatAT The method return the character at a specfied index(position) in a string
// let str = "Hellp I am Front-end-developer"
// let str2 = str.charAt(2);
// console.log(str2);

//Slice(start , end)
// The difference is that the second paramater specifices the lenth of the extracted part
// let text = "Apple banana Kiwi"
// let text2 = text.slice(0,5);
// console.log(text2);

//Upper Case: A String is converted to upper case with Touppercae()
// let text = "Hello I am Front-ene-developer"
// let text2 = text.toUpperCase()
// console.log(text2)

// Lower case L A string is converted to lower case with toLowercase()
// let text = "HELLO I AM FRONT-END-DEVELOPER"
// let text2 = text.toLowerCase()
// console.log(text2)


// Trim method removes Whitespaces from the both sides of a string 

// let text = "                   Hello                    "
// let text2 = text.trim()
// console.log(text2);

// trimStart()
// let text = "       Hello World           "
// let text2 = text.trimStart()
// console.log(text2)

//trimEnd
// let text = "       Hello World           "
// let text2 = text.trimEnd()
// console.log(text2)

//repeat  methods return string with a new number of copies of a string
// let text = "Hello Developer"
// let text2 = text.repeat(4)
// console.log(text2)

// indexof :-methods return the index (position) the frist occourence of at string 
// let text = "Hello I am Front-end Developer";
// let text2 = text.indexOf("Developer")
// console.log(text2);


// inculde () the method return true if a string contains a specified value 

// let text = "Hello My name is Manjunath Shetty"
// let text2 = text.includes("is")
// console.log(text2);

// startwith the method returns true is a string begin with specfield value 

// let text = "Hello I am Front-end-developer"
// let text2 = text.startsWith("I")
// console.log(text2)

// Endwith
// let text = "Hello I am Front-end-developer"
// let text2 = text.endsWith("end")
// console.log(text2)


// Array

// let arr1 = "hell";

// arr1 = "Hello"
// console.log(arr1)
// let arr2 = "hello";
// let arr3 = "Hii";
// let are4 = "Bye"



// let arry = "Hello";

// console.log(Array.isArray(arry))

// arry[1] = "Maths"

// let arry = newArray("English", "hindi", "Marathi", "Punjabi")

// console.log(arry);



// arry.push("Maths") // To add array at last postion 

// arry.unshift("History") // To Add an array from Frist value 

// arry.pop(); // To remove value Form last index

// arry.shift(); // to remove From frist Value index

// let arry = ["English", "hindi", "Marathi", "Punjabi"]

// let arry2 = ["100" ,"200", "300"]
// let arry4 = ["English", "hindi", "Marathi", "Punjabi"]
// let arry3 = arry.concat(arry2,arry4)

// console.log(arry3)
// let fetch = arry.split(' ')

// let fetch = arry.join(' # ')

// console.log(fetch)

// arry.splice(1,1)
// arry.length = 0;
// arry = []

// let fetch = arry.indexOf("hindi")


// let bookswithpages = [
//      ["Maths","300"],
//      ["Physics","400"],
//      ["bio", "500"]
// ]

// let fetch = bookswithpages[2][1];
// console.log(fetch);


// let arry = ["English", "hindi", "Marathi", "Punjabi"];

// let booklenth = arry.length;

// for(i=0; i < booklenth; i++){
//    console.log(`Element ${i} is ${arry[i]} \n`)
// }

//Function

// for(i = 1 ; i<=10; i++ ){
//     document.write(`2 X ${i} = ${2*i}`)
//     document.write('<br>')    
// }

// function Multi(){
//     for(i = 1 ; i<=10; i++ ){
//         document.write(`2 X ${i} = ${2*i}`)
//         document.write('<br>')    
//     }
// }

// Multi();
// document.write('<br>') 
// Multi();
// document.write('<br>') 
// Multi();

// Parmeter and agrument


// function multable(num){
//     for(i = 1 ; i<=10; i++ ){
//                 document.write(`${num} x ${i} = ${num*i}`)
//                 document.write('<br>')    
//             }
//             document.write('<br>')   
// }

// multable(5);
// multable(10);
// multable(36)

// function add(a,b){
//       console.log(a+b)
// }

// add(5,20)


//return 


// function add(a,b){
//       return a+b
// }

// let c = add(5,20)

// console.log(c)


//  function compare(a,b){
//      if(a>b){
//          return 1;
//      }
//      else if(b > a){
//           return -1
//      }else{
//          return 0
//      }
//  }

//  let c = compare(6 , 6)

//  console.log(c)
 



// let person={
//         fristnam:"Manjunath",
//         lastname:"Devadiga"
// }

// person.hii = function(){
//      console.log("HI");
// }

//Methods in object 

// let person ={
//                 fristnam:"Manjunath",
//                 lastname:"Devadiga",
//                 greet: function(){
//                          console.log("HI My name Is Rahul")
//                 } 
// }


// person.greet();

// person.sayhello = function(){
//          console.log("Hello")
// }

// person.sayhello();


// function greet(){
//          console.log("Say HEllO")
// }

// person.sayhello = greet;

// person.sayhello();


// let person = {
//         fristname: "Rahul",
//         lastname:"Sharama",
//         age:18,
//         greet:function(){
//              console.log("My Car Name is"+ car.brand2+" And My Name is "+ this.fristname+" "+this.lastname+"")    
//         }

// };


// let car ={
//     brand:"BMW",
//     brand2:"Oddy",
//     brand3:"Sokda"  
 
// }


// person.greet();


// Math Object


// let x = Math.sqrt(36)
// console.log(x)

// Date Object 

// let x = "2021-01-25",
// let d = "Jan-25-2011",
 
// let x = new Date("April 13 ,2018 11:12:56")

// x.setDate(x.getDate() + 1)

// console.log(x)


// let person = {
//        firstName:"Manjunat",
//        lastName:"Devdadiga"
// }
// console.log(person);


// function Student(name, last , age , Gen){
//     this.FirstName = name,
//     this.LastName = last,
//     this.age = age,
//     this.Gender = Gen

// }
 
// let student1 = new Student("manjunath", "Devadiga" , 55 , "Gender")


// console.log(student1)

// let st  =  var a;


// let a  = function(){
     
// }



// let avd  = "Manjunath",


// let r = new Date()
// console.log(r); 

// let r  = new Date();
// console.log(r)


// let person = {
//     fristName:"Rahul",
//     lastName:"Shar",
//     age:55,
//     sayhello : function(){
//          console.log("hello")
//     }

// }

// function greet(){
//      console.log("Hello")
// }

// person.sayhello = greet;

// person.sayhello()

// person.sayhello()


// person.sayhello = function(){
//       console.log("Hello")
// }

// console.log(person.sayhello())




// let person = new Object()


// person.fristName = "Rahul";
// person.age = 55;
// person.gender = "male"

// console.log(person)

// let person = {
//     fristName:"Rahul",
//     lastName:"Shar",
//     age:55,
//     sayhello : function(){
//          console.log("hello")
//     }
// }


// let Students = function(name , lastname , gender , age , hobbies){
//    this.fristname = name;
//    this.Lastname = lastname,
//    this.Gender = gender,
//    this.Age = age,
//    this.Hobbies = hobbies

// }

// let student1 = new Students("Rahul", "Sharama" , "Male", 55 , "Cricket")
//   student1.city = "pune"
//   student1.sayhello = function(){
//      console.log("Hello")
//   }

//   student1.sayhello()

// let student2 = new Students("MAnjunath" , "Shetty" , "Male", 23 , "Football")

// console.log(student1)
// console.log(student2)


// let person = {
//      fristName: "Rahul",
//      lastname:"Sharama",
//      personalinfo :{
//           gender: "male",
//           age: 55,
//           personalinfo2 : {
//              hobbies:"criket",
//              city:"pune",
//              state:"Maharashtra"
//           }  
//      }
// }


// console.log(person.personalinfo.personalinfo2)




// let Students = function(name , lastname , gender , age , hobbies){
//    this.fristname = name;
//    this.Lastname = lastname,
//    this.Gender = gender,
//    this.Age = age,
//    this.Hobbies = hobbies

// }


// let student1 = new Students("MAnjunath" , "Shetty" , "Male", 23 , "Football")
// let teacher = new Students("Rahul", "Sharama", "Male", 25 , "Football")

// Students.prototype.city = "Pune"
// Students.prototype.sayhello = function(){
//       console.log("Hello")
// }


// student1.sayhello();
// teacher.sayhello();




// Hoisting
// It is default js-behavious in Which Declartion at Top

// function hello(){
//      console.log("Hello")
// }
// hello();
// a=10//assigment
// console.log(a)// call 
// var a; //delartion;
// DOM
// The Document Object Model(DOM) Is an applecation programming interface (API) For manputalting HTML and XML Document (and Remove and Modify part of the document HTML)


// Dom Events Are Action that accour as a result of the user action or as result of state changes of the elements of a dom tree























