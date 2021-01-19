// Получить общую сумму баланса (поле balance) всех пользователей.
import list from './users.js'

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, {balance}) => totalBalance + balance, 0);
};

console.log(calculateTotalBalance(list)); // 20916