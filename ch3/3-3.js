// when not logged in
let user = null;

// Load user data from somewhere using the new fetch API
// (essentially the newer, better version of XMLHttpRequest)

fetch(someUrl) 
    .then(response => user = response.json())
    .catch(err => console.error(err));

// when logged in
console.log(user);
// yields:
// {
//   username: 'mark',
//   email: 'mark@ifelse.io'
//   firstName: 'Mark',
//   lastName: 'Thomas',
//   preferences: {
//     email: false,
//     react: true,
//   }
// }

// Change user settings; bring on the emails!
user.preferences.email = true;

// Update user settings
application.updateUser(user);

// Perform some logout action
application.logout = function() {
    user = null
}; 

application.logout();
