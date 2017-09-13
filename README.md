# JavaScript Filter Lab

## Overview

In this lab, we'll use the `filter` method to write functions that properly query our data.

## Instructions

Be sure to run the tests to get a feel for the types of problems this lab is
asking you to solve.

You'll be writing four functions:

 * `updateDriverWithKeyAndValue`- this function should take in a `driver` object, a `key` and a `value`. The function should not mutate the `driver` parameter and return a new `driver` that has an updated `value` for the `key` passed int
 * `destructivelyUpdateDriverWithKeyAndValue` - this function should work the same as `updateDriverWithKeyAndValue` but it *should* mutate the `driver` parameter passed in.
 * `deleteFromDriverByKey` - this function should take in a `driver` object and a `key`. It should delete the `key`/`value` pair for the `key` that was passed in from the `driver` object. This should all not actually `mutate` the `driver` passed in
 * `destructivelyDeleteFromDriverByKey` - this function should work the same as `deleteFromDriverByKey` but it *should* mutate the `driver` passed in.

Good luck!

**HINT**: You might find `deleteFromDriverByKey` to be a bit hard to write non-destructively. Think about how we learned to use `Object.assign`. What happens if we do

``` javascript
var obj = { foo: 'bar' }

var newObj = Object.assign({}, obj)

newObj // { foo: 'bar' }

delete newObj.foo // true

newObj // {}

obj // { foo: 'bar' }
```

Remember the workflow:

1. Run `learn-test`.

2. Read the errors; vocalize what they're asking you to do.

3. Write code; repeat steps 1 and 2 often until a test passes.

4. Repeat as needed for further tests.

5. Run `learn submit` when finished!

If you open up `test/indexTest.js`, you will see that in the `beforeEach` block we initialize our `driver` array values so that you can focus on what really matters — understanding how to manipulate arrays in JavaScript.

## Resources

- [MDN: Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

<p class='util--hide'>View <a href='https://learn.co/lessons/javascript-object-lab'>Javascript Object Lab</a> on Learn.co and start learning to code for free.</p>
