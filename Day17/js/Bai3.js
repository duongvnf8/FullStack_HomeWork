const users = ["User 1", "User 2", "User 3", "User 2", "User 4"];
let uniqueUsers = [];
for (let i = 0; i < users.length; i++) {
  if (!uniqueUsers.includes(users[i])) {
    uniqueUsers[uniqueUsers.length] = users[i];
  }
}
console.log(uniqueUsers);
