# yossi, eik, 54320, bankhapoalim, tel aviv

#Ben, benji, 52345, leumi, rananna

account1 = {"name": "yossi", "id": 54320, "city": "bankhapoalim", "country": "tel aviv"}

account2 = {"name": "Ben", "id": 52345, "city": "leumi", "country": "rananna"}

account3 = {#"name": "shi",
             "id": 52, "city": "leumi", "country": "bat yam"}

print(account1)
print(account2)
print(account3)

accounts = [account1, account2, account3]

print(accounts)

for account in accounts:
    first_name = account.get["name"]

    print(first_name)

    #much data is tranferred in json file