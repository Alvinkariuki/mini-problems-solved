var accounts = {
  Accounts: [
    {
      Id: 21,
      Name: "John Shepherd",
      LogonCount: 13,
      LastLogon: new Date(2017, 1, 14, 16, 15, 6, 111),
    },
    {
      Id: 12,
      Name: "Frank Matthews",
      LogonCount: 1,
      LastLogon: new Date(2017, 1, 15, 14, 26, 31, 821),
    },
  ],
};

var logons = {
  Logons: [],
};

function updateAccounts(accounts, logons) {
  accounts.Accounts.sort((a, b) => a.Id - b.Id);
  if (logons.Logons.length === 0) return accounts;
  // Sort logons
  logons.Logons.sort(
    (a, b) => (a.Date || a.LastLogon) - (b.Date || b.LastLogon)
  );

  logons.Logons.forEach((elem) => {
    const foundIndex = accounts.Accounts.findIndex((obj) => obj.Id === elem.Id);
    if (foundIndex >= 0) {
      accounts.Accounts[foundIndex].Name =
        elem.Name &&
        (elem.LastLogon || elem.Date) > accounts.Accounts[foundIndex].LastLogon
          ? elem.Name
          : accounts.Accounts[foundIndex].Name;

      accounts.Accounts[foundIndex].LastLogon =
        elem.LastLogon ||
        (elem.Date &&
          (elem.LastLogon || elem.Date) >
            accounts.Accounts[foundIndex].LastLogon)
          ? elem.LastLogon || elem.Date
          : accounts.Accounts[foundIndex].LastLogon;
      accounts.Accounts[foundIndex].LogonCount++;
    } else if (foundIndex < 0) {
      // Rename Date key to LastLogon
      delete Object.assign(elem, { ["LastLogon"]: elem["Date"] })["Date"];
      elem.LogonCount ? elem.LogonCount : (elem.LogonCount = 1);
      accounts.Accounts.unshift(elem);
    }
  });

  return accounts;
}

console.log(updateAccounts(accounts, logons));
