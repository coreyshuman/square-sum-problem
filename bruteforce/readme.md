# Brute-force solution to the Square-Sum Problem

This program tests every permutation of an array of numbers, looking for solutions to the square-sum problem. It is very slow (O(n*n!) computation time). This will calculate for each problem-set (1-n) from the start value of n to the max value of n as defined in the program arguments.

**Usage:** 
- node index.js [start] <max> [showMultiple]

**Example:** node index.js 25 true

*start* - (optional) the high value of *n* for the problem-set to start with. Ex. 15 would mean start by using the numbers from 1 to 15. Default = 15  
*max* - (required) the high value of *n* of the largest problem-set (1-n). Should be larger than the value choosen for *start*.  
*showMultiple* - (optional) show multiple results for each problem set. [true/false] Default = false

