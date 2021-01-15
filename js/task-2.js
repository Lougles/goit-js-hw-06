// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
import list from './users.js'

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(list, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]