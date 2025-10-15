// mark grade project

let marks = 10;

if(marks >= 80 && marks <= 100 ){
    console.log("A+")
}else if(marks >= 70 && marks <= 79 ){
    console.log("A")
}else if(marks >= 60 && marks <= 69 ){
    console.log("A-")
}else if(marks >= 40 && marks <= 59 ){
    console.log("B")
}else{
    console.log("falied")
}

// switch statement

let mark = 1000;

switch(true){
    case mark > 100 : // 80 -100 
    console.log("invalid mark")
    break;
    case mark >= 80 && mark <= 100 : // 80 -100 
    console.log("A+")
    break;
    case mark >= 70 && mark <= 79 : //70 -79
    console.log("A")
    break;
    case mark >= 60 && mark <= 69 : //60 -69
    console.log("A-")
    break;
    case mark >= 50 && mark <= 59 :
    console.log("B")
    break;
    case mark >= 40 && mark <= 49 :
    console.log("C")
    break;
    default :
    console.log("failed")
}


console.log(12>8)


loop 
 console.log(1)
 console.log(2)
 console.log(3)
 console.log(4)
 console.log(5)
 console.log(6)
 1000


// for loop
//  for( start value ,condition ,initials value like increment or decrement)
for( let i = 5; i <= 10 ;i++){
    console.log(i)
}

// while loop?
let i = 5;
while(i <= 10){
    console.log(i)
    i++
}

// do while loop
let j = 5;
do{ 
    console.log(i)
    j++
}
while(j <= 10)

