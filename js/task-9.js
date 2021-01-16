// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
import list from './users.js'

const getNamesSortedByFriendsCount = users => {
  return users.sort((a, b) => a.friends.length > b.friends.length ? 1 : -1);
};

console.log(getNamesSortedByFriendsCount(list));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


