// function askUser() {
//   const users = {};
//
//   while (true) {
//     const username = prompt("Enter name");
//
//     if (username === "break") return users;
//     const age = prompt("enter your age");
//
//     users[username] = {
//       age,
//       password: prompt("Enter your password"),
//     };
//   }
// }

const result = {
  "Bohdan Onatskyi": {
    age: "25",
    password: "qwerty1234",
  },
  "Julia Zav": {
    age: "22",
    password: "tqwer1252",
  },
  "Kirill Makh": {
    age: "22",
    password: "Tesd0987",
  },
};

const entries = Object.entries(result);
// .filter(([, { age }]) => {
//   return Number(age) < 25;
// })
// .map(([username]) => username)
// .reduce((accum, [username, { age }]) => {
//   if (Number(age) < 25) {
//     return [...accum, username];
//   }
//
//   return [...accum];
// }, [])
// .join(", ");
