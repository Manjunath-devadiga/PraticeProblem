// let a = 5;
//  a = 7
// console.log(a)

//   {
//      var a = 5
//      console.log(a)
//   }
//   a = 10
//   console.log(a)


// {
//       let a = 5
      
// console.log(a); 
// }

// const a = "Hello";
// a = "hii"
// console.log(a);



// Assigment Operators

// var d = 54;
// var c = 20;

// var z  = d / c;

// console.log(z)

// DataTypes In JavaScrpit 
    
// 1)String
// 2)Number
// 3)Boolean 
// 4)undefined
// 5)Null 
// 6)Object
// 7)Symbol
// 8)BigInt

// Strings
// let a = 'Hel"l"o'
// console.log(a);

//Numbers
// let a  = 34.5;
// console.log(a)

// Boolean 
// let a = 5 ;
// let b = 6;
//  console.log(a>b)

// arry 
// let arry = [1,"Hello",true]
// console.log(arry)

// Object

// let a ={
//      a:"hello",
//      b: "Guys"
// }

// console.log(a)

// undefined
//  let a;
//  console.log(a)

//NUll 
// let a = ""
// console.log(a);

// let a = "Hello";
// console.log(typeof a)


// let b = false;
// console.log(typeof b)


// if and else


// let age = 13;
// let votercard = "yes"

// if(age>=14){
//       if(votercard == "yes"){
//             alert("You can vote")
//       }
//       else{
//             alert("get Your Voter Id Card")
//       }

// }
// else{
//       alert("You Cant Vote")
// }


// Program to Check if the Number is positive or not

// let number = -1;

// if(number >= 0){
//    console.log("Positive Number")
// }
// else{
//       console.log("Negative Number")
// }


// let num1 = prompt("")
// let num2 = prompt("")

// if(num1 > num2 ){
//        console.log(`${num1} is the Largest Number`)
// }else if(num2 > num1){
//       console.log(`${num2} is the Largest Number`)
// }
// else{
//       console.log(`${num1} is Equal to ${num2}`)
// }


// ternary operator

// let loggdin = 1;

// if(loggdin == 0){
//        document.write("Login")
// }else{
//       document.write("logout")
// }

// let option = loggdin == 1 ? "logout" : "login";
// document.write(option)


//Switch Statement 


//  if input = 1 "y" , "yes" output = Cotunie\
// if input = 0 "n" "no" output = end 


// let input = 0

// if(input == 1){
//      document.write("coutinue.......");
// }else if(input == "y"){
//      document.write("coutinue.......");
// }else if(input == "yes"){
//      document.write("coutinue.......");
// }else if(input == 0){
//      document.write("end......")
// }else if(input == "n"){
//      document.write("end.in.....")
// }else if (input=="no"){
//      document.write("end......")
// }


// let input = "n";

// switch(input){
//      case 1: //input == 1
//      document.write("Coutinue.........");
//      break;

//      case "y": //input == "y"
//      document.write("Coutinue......");
//      break;

//      case "yes":
//      document.write("Coutinue......");
//      break;

//      case 0:
//      document.write("End........")
//      break;

//      case "n":
//      document.write("End...........")
//      break;

//      default : 
//      document.write("worng input")
// }
  

// While loop

// let counter = 1;

// while(counter >=10){
//        console.log("Javascrpit")
//        counter++;
// }


// let and const

//   var a = "ram";
//   var a ="Man"
//   console.log(a)

// let a = "ram";
//     a = "man";
// console.log(a);

// const a = "ram";
//  console.log(a)


// Default Parameter 

// function greet(parameter="Hello"){
//         console.log(parameter)
// }

// greet("hii Guys");

// Object with Default properties

// function createperson(x = 1 , y=2){
//         return x + y;
// }

// console.log(createperson(55 , 66))


function createperson(...args){
        console.log(args);
}
createperson();










