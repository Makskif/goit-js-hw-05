// const getTotalBalanceByGender = (users, gender) => {
//     return users.filter((item, index, array) => {
//         usersGender = item.gender[0];
//         return usersGender.includes(gender[0])
//     })
// }

// // .map(item.reduce((previousValue, number) => {
// //         console.log(previousValue);
// //         console.log(previousValue + number);
// //         console.log(item.balance);
// //         return previousValue + number;
      
// },0))

// const getTotalBalanceByGender = (users, gender) => users.filter((item) =>
//     (usersGender = item.gender[0]) && (usersGender.includes(gender[0])))
//     .map(item => item.balance).reduce((previousValue, number) => {
      
//         return previousValue + number;
      
// },0)

const getTotalBalanceByGender = (users, gender) => users.filter((item) =>
    (usersGender = item.gender[0]) && (usersGender.includes(gender[0])))
    .map(item => item.balance).reduce((previousValue, number) => previousValue + number ,0)

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

