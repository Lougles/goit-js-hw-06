// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
import list from './users.js'

const getNamesSortedByFriendsCount = users => {
  // const names = users.map(user => user.friends.forEach((num, idx) => console.log(idx, num)));
  // return users.reduce((index, user) => user.friends.sort(index), 0);
  let obj = {};
  let countFriends = users.forEach(user => obj[user.friends] = '0');
  countFriends.forEach(user => {
    obj[user.friends] ? obj[user.friends] + 1 : console.log(user.friends);
  })
  return obj;
};

console.log(getNamesSortedByFriendsCount(list));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


