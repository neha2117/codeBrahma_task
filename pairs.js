var arr = [];   // input array
var target;     // target value
var length = 0; // length of array
var inputLength = 0;
inputLength = window.prompt("Enter the size of the input array:");
for(var i = 0; i < inputLength; i++)
   arr.push(window.prompt("Enter a number:"));
target = window.prompt("Enter the target value:");
length = arr.length;
arr.sort(function(a, b){return a - b;}); // sorting the input array

//counting by comparing adjacent elements
arr.map((v,k) => {
    if ((arr[k+1] - v) == target) {
        console.log("(" + arr[k+1] + "," + v + ")");
    }
});