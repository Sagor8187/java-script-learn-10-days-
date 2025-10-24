let cart = []

function addproduct(product){
    cart.push(product);
    console.log(product  + "  add in cart")
}

function removeitem(item ){
    let index = cart.indexOf(item)
   
    if(index !== -1){
        cart.splice(index,1)
        console.log(item +" remove succesfully")
    }else{
        console.log("product not faound")
    }
}

function showallproduct(){
    console.log(`my cart :${cart}`)
}

addproduct("mango")
addproduct("apple")
addproduct("orange")

removeitem("mango")
showallproduct()

