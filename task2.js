console.log("Это JS - task 2");

const users = [
  { name: "Mango", active: true },
  { name: "Poly", active: false },
  { name: "Ajax", active: true },
  { name: "Lux", active: false },
];

const toggleUserState = (allUsers, userName, callback) => {
  const updatedUsers = allUsers.map((user) =>
    user.name === userName ? { ...user, active: !user.active } : user
  );

  callback(updatedUsers);
};

const logger = (updatedUsers) => console.table(updatedUsers);

/*
 * Сейчас работает так
 */
toggleUserState(users, "Mango", logger);
toggleUserState(users, "Lux", logger);

/*
 * Должно работать так
 */
// toggleUserState(users, "Mango").then(logger);
// toggleUserState(users, "Lux").then(logger);

// const makePromise = (text, delay) => {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA", 1000);
// const promiseB = makePromise("promiseB", 3000);

// /*
//  * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
//  * Первый выполнится через секунду и просто будет готов
//  */
// Promise.race([promiseA, promiseB])
//   .then((result) => console.log(result)) //["promiseA", "promiseB"]
//   .catch((err) => console.log(err));
