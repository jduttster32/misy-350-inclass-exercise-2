total = float(raw_input("Enter the total amount of your meal: "))

tip = float(raw_input("Enter tip rate (such as 0.15): "))

fullPrice = total + (total * tip)

print ("Your should pay: " + str(round(fullPrice, 2)))
