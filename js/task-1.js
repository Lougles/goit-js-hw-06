import list from './users.js'

// const getUserNames = list.map(user => user.name);
// console.log(getUserNames);

const getUserNames = users => {
  return users.map(({name}) => name);
};

console.log(getUserNames(list));


