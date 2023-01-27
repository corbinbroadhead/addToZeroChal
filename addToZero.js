// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
doThey = false;
for (let i = 0; i < array.length; i++) {
    for (let e = 0; e < array.length; e++) {
        if (i !== e) {
             if (array[i] + array[e] === 0) {
              doThey = true;
             }
         }
    }
}

console.log(doThey);