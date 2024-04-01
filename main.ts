//Big-O notation - Upper bound

//O(1) - Constant Time
//O(log n) - Logarithmic Time
//O(n) - Linear Time
//O(n log n) - Linearithmic Time
//O(n^2) - Quadratic Time
//O(2^n) - Exponential Time
//O(n!) - Factorial Time
//O(sqrt(n)) - Square Root Time
//the last two are on quantum computers or take too long to compute

for (let i = 0; i < 10; i++) {
    console.log(i);
}
//this is O(n) because it has only one loop

for (let j = 10;   j > 0; j--) {
    console.log(j);
}
for (let k = 0; k < 10; k++) {
    console.log(k);
}
//this is O(2n) because it has two loops
//however the 2 in front of it is pointless so it's still O(n)

for (let l = 0; l < 10; l++) {
    for (let m = 0; m < 10; m++) {
        console.log(l, m);
    }
}
//this is O(n^2) because it has two loops
//and so on and so forth
//In summary:
//Growth is with respect with input
//Drop constants
//Worst case is usually the way we measure

//Arrays
//Is const a= [] an array?
//an array is a contiguous(unbreaking) memory space
//an array can be interpreted depending on the view that is taken of it