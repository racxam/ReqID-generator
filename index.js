let a="R"
let b=1000
let maxlen=8;

for (let i = 1; i <=100000; i++) { 
 


    
    let zeros= "0".repeat(maxlen - noOfDigit(i));
    let newArr= a+zeros+i
    console.log(newArr);
    

    

}
function noOfDigit(n) {
    return Math.floor(Math.log10(n)) + 1;
}



function calNoOfZeros(n) {
    let str=""
    for (let i = 0; i < n; i++) {
        str+=0;
        
        
    }
    return str;
    
}
