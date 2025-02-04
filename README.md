# Express.js Route Parameter Error Handling

This repository demonstrates a common error in Express.js route handlers:  missing error handling when parsing route parameters.  The `bug.js` file contains code with the error, while `bugSolution.js` provides the corrected version.

**Problem:**

The original code attempts to parse a user ID from the request parameters without handling potential errors. If the `userId` is not a valid integer, the `parseInt` function might return `NaN`, causing unexpected errors or crashes.

**Solution:**

The solution includes robust error handling. It checks if `userId` is a valid number before attempting to find the user in the database.  It also adds a generic error handler to catch any unexpected exceptions that may arise.

**How to run:**

1. Clone this repository.
2. Run `npm install express` to install the necessary dependencies.
3. Run `node bug.js` (to see the error) or `node bugSolution.js` (to see the corrected code).