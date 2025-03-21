import random

def guess(x):
    random_number = random.randint(1,x)
    guess = 0
    while guess != random_number:
        guess = int(input(f'guess a number: '))
        if guess > random_number:
            print('too high')
        elif guess < random_number:
            print('too low')
    print(f'you are correct about number number is {random_number}')



def c












guess(10)


