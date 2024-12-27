import random

def guess(x):
    random_number = random.randint(1,x)
    guess = 0
    while guess != random_number:
        guess = int(input(f'guess a number between 1 and {x}:'))
        if guess < random_number:
            print('sorry guess again too low...')
        elif guess > random_number:
            print('sorry guess again too high...')

    print(f"yay, congratulations you guess correctly {random_number}")


def computer_guess(x):
    low =1
    high = x
    feedback =""
    while feedback != "c":
        if low != high:
            guess = random.randint(low, high)
        else:
            guess = low
        guess = random.randint(low, high)
        feedback = input(f"is {guess} too high (H), to low (L), or correct (C)?? ").lower()
        if feedback =="h":
            high = guess - 1
        elif feedback == "l":
            low = guess + 1
    print(f"yah! The follopwing guess is correct {guess}")


computer_guess(10)