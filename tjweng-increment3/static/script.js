var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "World";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2){
    x3 = x1 + x2;
    console.log(x3);
}

sumnPrint(x, y);
sumnPrint(A, B);


if (C.length > z) {
    console.log(C)
    if (C.length < z) {
        console.log(z)
    }
} else {
    console.log("good job!")}

// L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
// L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// function findTheBanana(array){
//     for (i = 0; i < array.length; i++){
//         if (array[i] === "Banana") {
//             alert("Found the banana in array!");
//             return;
//         }
//     }
// }

// findTheBanana(L1);
// findTheBanana(L2);

// L1.forEach(bananaFound);

// L2.forEach(bananaFound);
    
// function bananaFound(element){
//     if (element === "Banana") {
//         alert("Found the banana in array!");
//     }
// }

let now = new Date();
let hour = now.getHours();

function greeting(hour) {
    const greetingElement = document.getElementById("greeting");

    if (hour < 12) {
        greetingElement.textContent = "Good morning";
    } else if (hour >= 12 && hour < 18) {
        greetingElement.textContent = "Good afternoon";
    } else if (hour >= 18 && hour < 20) {
        greetingElement.textContent = "Good evening";
    } else {
        greetingElement.textContent = "Good night";
    }
}

function addYear() {
    const year = new Date().getFullYear();
    const copyYearElement = document.getElementById("copyYear");
    copyYearElement.innerHTML = `Copyright &copy; ${new Date().getFullYear()} MonoMuse. All rights reserved.`;
}

greeting(hour);
addYear();