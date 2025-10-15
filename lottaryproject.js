

let random = Math.floor(Math.random()*20)+1
let user = 13;
if(random === user){
    console.log("you are lucky winner number is :",random)
}else if (random < user){
    console.log("your are to high try again number is :",random)
}else{
    console.log("you are to low try again number is :",random)
}