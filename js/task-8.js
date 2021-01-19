// Массив имен всех пользователей у которых есть друг с указанным именем.
import list from './users.js'

const getUsersWithFriend = (users, friendName) => {
  // return users.filter(user => user.friends.includes(friendName));
  return users.filter(({friends}) => friends.includes(friendName)).map(({name}) => name);
};

console.log(getUsersWithFriend(list, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(list, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]