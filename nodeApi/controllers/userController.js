const User = require('./models/userModel'); // Import the User model

const newUser = new User({
  username: 'john_doe',
  email: 'john.doe@example.com',
});

newUser.save((err) => {
  if (err) {
    console.error('Error saving user:', err);
  } else {
    console.log('User saved successfully.');
  }
});
