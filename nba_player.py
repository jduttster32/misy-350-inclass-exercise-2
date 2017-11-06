# get string input
player = raw_input("Enter the player name: ")

# get integer input: int() convert string to integer
# float() convert string to floating number 
year_joined = int(raw_input("When did the player joined NBA: "))

year_in_nba = 2017 - year_joined

# str() converts a number to string
print (player + " has playerd in NBA for " + str(year_in_nba) + " years!")