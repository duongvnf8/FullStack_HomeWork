const transactions = [
  { id: 1, account: "A", type: "deposit", amount: 1000 },
  { id: 2, account: "B", type: "withdraw", amount: 200 },
  { id: 3, account: "A", type: "withdraw", amount: 500 },
  { id: 4, account: "C", type: "deposit", amount: 700 },
  { id: 5, account: "B", type: "deposit", amount: 300 },
];
//  Tính số dư cuối cùng của từng tài khoản.
const Balance = (transactions) => {
  return transactions.reduce((acc, cur) => {
    acc[cur.account] = acc[cur.account] || 0;
    acc[cur.account] += cur.type === "deposit" ? cur.amount : -cur.amount;
    return acc;
  }, {});
};
console.log(Balance(transactions));

// - Tìm tài khoản có số dư cao nhất.
const maxAccount = (transactions) => {
  return Object.entries(Balance(transactions)).reduce(
    (acc, cur) => {
      const accountName = cur[0];
      const balance = cur[1];
      if (balance > acc.balance) {
        return {
          account: accountName,
          balance,
        };
      }
      return acc;
    },
    {
      balance: 0,
    }
  );
};
console.log(maxAccount(transactions));
