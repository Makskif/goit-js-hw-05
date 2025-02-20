// const getTotalBalanceByGender = (users, gender) => users.filter((item) =>
//     (usersGender = item.gender[0]) && (usersGender.includes(gender[0])))
//     .map(item => item.balance).reduce((previousValue, number) => previousValue + number ,0)

const getTotalBalanceByGender = (users, gender) => users.filter((item) =>
    (item.gender === gender)).reduce((previousValue, item) => previousValue + item.balance ,0)

    const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863

