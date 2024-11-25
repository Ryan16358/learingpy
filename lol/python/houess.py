students = [
     {"name": "harry","house": "Harry"},
     {"name": "rubeus", "house": "Slytherin"},
     {"name": "neville", "house": "Hufflepuff"},
     {"name": "bill", "house": "Ravenclaw"},
     {"name": "albus", "house": "Gryffindor"},
]


houses = set()

for student in students:
    houses.add(student["house"])

for house in houses:
    print(house)