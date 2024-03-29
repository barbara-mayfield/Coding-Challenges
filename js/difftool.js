// *Diffing an Object*

// Given JavaScript objects like this:

import { diff } from 'deep-diff';

newCode = {
   apples: 3, 
   oranges: 4
};

oldCode = {
   apples: 3, 
   grapes: 5
}

// Create a function that returns an array of containing the object diff like the:

var differences = diff(newCode, oldCode);

console.log(differences);

//returns: 
// [
//     ['-', 'grapes', 5],
//     ['+', 'oranges',4]
// ]```

// When you have figured this out, DM your TL the solution that you have come up with.  
// It is also highly recommended that you create a repository on Github named coding challenges and 
// upload your work to Github.  That way you keep getting green ticks on your Github graph.