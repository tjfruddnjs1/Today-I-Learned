let user = {
  name: "John",
  age: 30,
};

function count(user) {
  return Object.keys(user).length;
}

console.log(count(user));
