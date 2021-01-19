// Получить массив только неактивных пользователей (поле isActive).
import list from './users.js'
const getInactiveUsers = users => {
  return users.filter(({isActive}) => !isActive);
};

console.log(getInactiveUsers(list)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]