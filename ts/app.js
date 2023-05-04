// Bascically typescript is a type language where we need to define that what type we actually need 
// When We Use TypeScript We Can Check Error On Compile Type 
// This thing we cannot do inside javascript ...
// in javascript we are defining first only string number boolean 

// for example 

function javascript(num1, num2) {
    return(num1+num2)
}

console.log(javascript('1' , '2'))


function outer () {
    var a =100
   return function inner() {
        console.log(100)
    }
}
outer()()
