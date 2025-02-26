var asteroidCollision = function (asteroids) {
    const res = []; // Stack to store the final state of asteroids

    for (let i = 0; i < asteroids.length; i++) {
        const last = res[res.length - 1]; // Last asteroid in the stack
        const cur = asteroids[i]; // Current asteroid

        // Case 1: No collision (stack is empty, or last asteroid is moving left, or current asteroid is moving right)
        if (!res.length || last < 0 ||      cur > 0) {
            //       (last)<--  -->(cur)  (l)-->  -->(cur)
            //                  <--(cur)    <--
            res.push(cur); // Add the current asteroid to the stack
        }
        // Case 2: Collision happens (last asteroid is moving right, and current asteroid is moving left)
        else if (-cur === last) {
            // Both asteroids are of the same size -> both are destroyed
            res.pop(); // Remove the last asteroid from the stack
        } else if (-cur > last) {
            // Current asteroid is larger -> destroy the last asteroid
            res.pop(); // Remove the last asteroid from the stack
            i--; // Re-check the current asteroid against the new last asteroid
        }
        // Case 3: Last asteroid is larger -> current asteroid is destroyed (do nothing)
    }

    return res; // Return the final state of the asteroids
};

console.log(asteroidCollision([5,10,-5]))