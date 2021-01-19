// Получить пользоваля (не массив) по email (поле email, он уникальный).
import list from './users.js'
const getUserWithEmail = (users, email) => {
  return users.find(({email}) => email === email);
};

console.log(getUserWithEmail(list, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(list, 'elmahead@omatom.com')); // {объект пользователя Elma Head}