# JavaScript Filter and Map Lab

## Overview

In this lab, we'll use our `filter` and `map` methods to write functions that properly query our data and return various arrays.

## Instructions

Be sure to run the tests to get a feel for the types of problems this lab is
asking you to solve.

You'll be writing four functions:

 * `driversWithRevenueOver`- This accepts an array of `driver` objects as the function's first argument and revenue as the second argument.  The function returns an array of `driver` objects that have revenue greater than the amount passed through as the second argument.
 * `exactMatch` - This function accepts two arguments: an array of `driver` JavaScript objects as the first argument and a second argument of a JavaScript specifying the attribute and corresponding value.  For example, `exactMatch(drivers, {revenue: 3000})` returns all drivers whose `revenue` attribute equals `3000`, and `exactMatch(drivers, {name: 'bob'})` returns all drivers whose `name` attribute equals `bob`.      
 * `exactMatchToList` - This function works the same way as the above `exactMatch` function, except that instead of returning an array of `driver` objects, it returns an array of strings with each element in the array corresponding to the matching driver's name.  For example, `exactMatchToList(drivers, {revenue: 2000})` will return `['sammy']`, as `sammy` is the name of the matching `driver` object.
 * `driverNamesWithRevenueOver` - This function works the same way as `driversWithRevenueOver`.  The difference is that it returns an array of strings representing the name of each driver with a revenue over the specified amount.  

## Resources

- [MDN: Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)              
- [MDN: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)              

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-filter-lab'>Javascript Filter Lab</a> on Learn.co and start learning to code for free.</p>
