# Brute-force solution to the Square-Sum Problem

This program tests every permutation of an array of numbers, looking for solutions to the square-sum problem. It is very slow (O(n*n!) computation time). This will calculate for each problem-set (1-n) from the start value of n to the max value of n as defined in the program arguments.

**Usage:** 
- node index.js [start] [max] [showMultiple]

**Example:** node index.js 25 true

*start* - (optional) the high value of *n* for the problem-set to start with. Ex. 15 would mean start by using the numbers from 1 to 15. Default = 15  
*max* - (required) the high value of *n* of the largest problem-set (1-n). Should be larger than the value choosen for *start*.  
*showMultiple* - (optional) show multiple results for each problem set. [true/false] Default = false

Example Output for *node index.js 15 25 false*  
```
Square-Sum Problem: Bruteforce Solution
15: 8-1-15-10-6-3-13-12-4-5-11-14-2-7-9
16: 8-1-15-10-6-3-13-12-4-5-11-14-2-7-9-16
17: 16-9-7-2-14-11-5-4-12-13-3-6-10-15-1-8-17
18: No Solution
19: No Solution
20: No Solution
21: No Solution
22: No Solution
23: 2-23-13-12-4-21-15-10-6-19-17-8-1-3-22-14-11-5-20-16-9-7-18
24: No Solution
25: 2-23-13-12-24-25-11-14-22-3-1-8-17-19-6-10-15-21-4-5-20-16-9-7-18
Solutions Found: 5
Time elapsed: 30 ms
```