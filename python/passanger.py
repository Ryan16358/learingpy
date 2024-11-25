class Flight():
    def __init__(self,capacity):
        self.capacity = capacity
        self.passenger = []


    def add_passenger(self,name):
        if not self.open_seats():
            return False
        self.passenger.append(name)
        return True
        

    def open_seats(self):
        return self.capacity - len(self.passenger)


flight = Flight(3)
people =["HARRY","HARDING","GINNY","RON","ryan"]

for person in people:
    s = flight.add_passenger(person)
    if s:
        print(f"YOU ARE IN THE FLIGHT CONGRATULATION {person}")
    else:
        print(f"no available seats for {person}")