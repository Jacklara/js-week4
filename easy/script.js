
let calAverage = function(arr) {
    let sum = 0;
     for(let i = 0; i < arr.length; i++) {
         sum += arr[i]
     }
     return sum / arr.length
}

console.log(calAverage([1 , 4 , 7]));
