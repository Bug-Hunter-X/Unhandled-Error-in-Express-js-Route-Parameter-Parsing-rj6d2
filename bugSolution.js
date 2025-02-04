const express = require('express');
const app = express();

// Sample user data (replace with your actual database)
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' }
];

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  if (isNaN(userId)) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === userId);
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.send(user);
  }
});

// Generic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});