name = input("what's your name ?")

with open("names.txt", "a") as f:
    f.write(f"{name}\n")