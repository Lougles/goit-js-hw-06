// Получить массив имен пользователей по полу (поле gender).
import list from './users.js'
const getUsersWithGender = (users, gender) => {
  return users.filter(({ gender }) => gender === gender);
};

console.log(getUsersWithGender(list, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]