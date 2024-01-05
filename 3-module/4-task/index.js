function showSalary(users, age) {
  return users
    .filter((element) => {
      return element.age <= age;
    })
    .map((element, index, array) => {
      let userString = `${element.name}, ${element.balance}`;
      if (index !== array.length - 1) {
        userString += "\n";
      }

      return userString;
    })

    .join("");
}
