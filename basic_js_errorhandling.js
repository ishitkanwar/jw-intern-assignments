/* #############################################
#################### Part 1 ####################
############################################# */
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while (true) {
    try {
      return primitiveMultiply(a, b); // Returning the final result.
    } catch (error) {
      if (error instanceof MultiplicatorUnitFailure) { // Catching the error 
        console.log("Trying again....")
      } else { // If some other error is thrown.
        throw error;
      }
    }
  }
}  

console.log(reliableMultiply(8, 8)); // → 64


/* #############################################
#################### Part 2 ####################
############################################# */
const box = {
locked: true,
unlock() { this.locked = false; },
lock() { this.locked = true;  },
_content: [],
get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
}
};
  
function withBoxUnlocked(body) {
// Your code here.
try {
    box.unlock();
    body();
} catch (error) {
    console.log('Error Occured')
    throw error
} finally {
    box.lock();
}
}

withBoxUnlocked(function() {
box.content.push("gold piece");
});

try {
withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
});
} catch (e) {
console.log("Error raised: " + e);
}

// Displaying final status of the box.
console.log(box.locked);
// Displaying final contents of the box.
box.unlock();
console.log(box.content);