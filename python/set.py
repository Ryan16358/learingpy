students = [
    {"name": "hermione","house": "gryffindor"},
    {"name": "rubeus","house": "slytherin"},
    {"name": "neville","house": "hufflepuff"},
    {"name": "bill","house": "ravenclaw"},
    {"name": "albus","house": "gryffindor"}
]


houses = []

for student in students:
    if student["house"] not in houses:
        houses.append(student["house"])


for house in sorted(houses):
    print(house)