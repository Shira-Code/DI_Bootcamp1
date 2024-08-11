info1 = {
    "id": 1,
    'bank': "bankhapoalim",
    "last_name": "beni",
}

info2 = {
    #"last name" "benji"
    "id": 1,
    'bank': "leumi",
    "address:" : "tel aviv",
}
info1.update(info2)

print(info1)