/* Square-Sum Problem: Bruteforce Solution Finder
 *
 * O(n*n!) solution for SquareSum Problem
 * 
 * Copyright (C) 2018 Corey Shuman (ctshumancode@gmail.com)
 * v1.0 1/13/18
 * 
 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 * 
 * *****************************************/

console.log("Square-Sum Problem: Bruteforce Solution");

// Support command line argument for max
if (process.argv.length < 3) {
    console.log(" Usage: node index.js [start] <max> [showMultiple]");
    console.log(" Example: node index.js 15 25 true");
    console.log("   start - (optional) the high value of *n* for the problem-set to start with. Ex. 15 would mean start by using the numbers from 1 to 15. Default = 15");
    console.log("   max - (required) the high value of *n* of the largest problem-set (1-n). Should be larger than the value choosen for *start*.");
    console.log("   showMultiple - (optional) show multiple results for each problem set. [true/false] Default = false");
    return;
}

let _userStart = 15;
let _userMax = NaN;
let _showMult = false;
let _argv = process.argv;
let _argn = _argv.length;

switch (_argn) {
    case 5:
    default:
        _userStart = parseInt(_argv[2]);
        _userMax = parseInt(_argv[3]);
        _showMult = _argv[4] === 'true';
        break;
    case 4:
        isNaN(_argv[3]) ? _showMult = _argv[3] === 'true' : _userStart = parseInt(_argv[2]);
        _userMax = isNaN(_argv[3]) ? parseInt(_argv[2]) : parseInt(_argv[3]);
        break;
    case 3:
        _userMax = parseInt(_argv[2]);
        break;
}


if (isNaN(_userMax)) {
    console.log("Error: 'max' argument must be a number.");
    console.log("Example: node index.js 15 true");
    return;
}

if (isNaN(_userStart)) {
    console.log("Error: 'start' argument must be a number.");
    console.log("Example: node index.js 15 25 true");
    return;
}

let _solutions = 0;
let _foundFlag = false;

/* Start calculation loop. Track time elapsed 
 *********************************************/
let _timeTrack = Date.now();

for (let max = _userStart; max <= _userMax; max++) {
    let output = `${max}: `;
    let array = Array(max);
    for (let i = 1; i <= max; i++) {
        array[i - 1] = i;
    }
    _foundFlag = false;
    permutate(array, output, array.length, 0, array.length);
    if (!_foundFlag) {
        console.log(output + "No Solution");
    }
}

let _timeElapsed = Date.now() - _timeTrack;
/* End calculation loop 
 *********************************************/

console.log(`Solutions Found: ${_solutions}`);
console.log(`Time elapsed: ${_timeElapsed} ms`);


/***** Utility Functions *****/
function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

function permutate(arr, output, n, li, ri) {
    if (_foundFlag && !_showMult) {
        return;
    }
    if (li == ri) {
        // end of permutations, check if this is a solution
        if (!isSquare(arr[n - 2] + arr[n - 1])) {
            // invalid sequence, let's move on.
            return;
        }
        // print solution
        _solutions++;
        _foundFlag = true;
        for (let i = 0; i < n; i++) {
            output += arr[i];
            if (i < n - 1) {
                output += "-";
            }
        }
        console.log(output);
    } else {
        // check if we are valid and should continue
        if (li >= 2) {
            if (!isSquare(arr[li - 1] + arr[li - 2])) {
                // invalid sequence, let's move on.
                return;
            }
        }
        // valid so far, continue permutation
        for (let i = li; i <= ri; i++) {
            swap(arr, li, i);
            permutate(arr, output, n, li + 1, ri);
            swap(arr, li, i); //backtrack
        }
    }
}

function isSquare(n) {
    return n > 0 && Math.sqrt(n) % 1 === 0;
};