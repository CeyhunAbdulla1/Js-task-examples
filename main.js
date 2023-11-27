// let eded=prompt("eded daxil edin")
// if(eded>0){
//     console.log("musbet eded")
// }
// else if(eded==0){
//     console.log("0-a beraber")
// }
// else if(eded<0){
//     console.log("menfi")
// }
// else{
//     console.log("reqem deyil")
// }


// ---------------------
// let eded=prompt("eded daxil edin")
// if(eded%2==0){
//     console.log("Cut")
// }
// else{
//     console.log("Deyil")
// }


// -----------------------

// Function to find the largest among three numbers
// function findLargest(num1, num2, num3) {
//     let largest = num1;

//     if (num2 > largest) {
//         largest = num2;
//     }

//     if (num3 > largest) {
//         largest = num3;
//     }

//     return largest;
// }

// let eded=findLargest(2,1,4)
// console.log(eded)




// --------------------------
// factorial
// let n=6;
// let fact=1
// for(let i=n;i>0;i--){
//     fact=fact*i;
// }
// console.log(fact)

// program to generate a multiplication table

// take input from the user
const number = 9;

//creating a multiplication table
for(let i = 1; i <= 10; i++) {

    // multiply i with number
    const result = i * number;

    // display the result
    console.log(`${number} * ${i} = ${result}`);
}