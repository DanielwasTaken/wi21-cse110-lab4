## part 1 answers
1. Line 11 will print the final value of i, which will be equal to the length of prices. i is declared using var, so it will be a global variable, allowing it to be printed. 
2. Line 12 will print the final value of disountedPrice, which will be equal to the value of whatever is contained at the last index of prices times (1-discount). discountedPrice is a global variable due to the use of var in the declaration, so it is a global variable and can be printed outside of the for loop code block. 
3. Line 13 will print finalPrice, which will be equal to discountedPrice rounded to the nearest cent, or the second decimal place. finalPrice was declared outside of the for loop, and was also declared using var, so it is a global variable and is within the scope of the console.log call at line 13. 
4. discountPrices([100,200,300],.5) will return the array [50, 100, 150]. Each of the values in prices will be multiplied by half, rounded to the nearest cent, then pushed to the discounted array. Then after the print statements, discounted is returned, which will contain the above values. discounted is declared outside of the for loop so it is in the same scope as the return statemnt.
5. An error will occur at line 11 because i is contained within the scope of the for loop. It is declared using let so it is not a global variable. Trying to print it outside of the for loop like in line 11 will cause an error.
6. An error will occur at line 12 because discountedPrice is declared inside the for loop using the let keyword. Thus, discountedPrice can only be used inside of the for loop and its code block. Since line 12 is outside of the code block, an error will occur.
7. Line 13 will print finalPrice, which will be equal to the final value of discountedPrice rounded to the nearest cent, or the second decimal place. finalPrice was declared outside of the for loop, so it is within the scope of the console.log call at line 13. 
8. discountPrices([100,200,300],.5) will return the array [50, 100, 150]. Each of the values in prices will be multiplied by half, rounded to the nearest cent, then pushed to the discounted array. Then after the print statements, discounted is returned, which will contain the above values. discounted is declared outside of the for loop so it is in the same scope as the return statemnt.
9. An error will occur at line 11 because i is contained within the scope of the for loop. It is declared using let so it is not a global variable. Trying to print it outside of the for loop like in line 11 will cause an error.
10. An error will occur at line 12 because discountedPrice is declared using const within the for loop. It is not within the scope of line 12, so an error will occur when an attempt is made to print it. 
11. Assuming all the errors in other lines are resolved, then line 13 will print 0 regardless of input. This is beause it is declared as constant, so it will never change from 0. finalPrice is declared outside the for loop, so there are no problems with the scope of the variable when it is printed. 
12. Assuming that no errors are thrown and the initial values of all variables besides i are kept due to the const keyword, then the array [0, 0, 0] would be returned. The length of prices is 3, so the for loop would loop 3 times, pushing a zero to discounted each time. finalPrice was declared outside of the for loop there are no problems with the scope. 
13. 
    - A: student.name
    - B: student['Grad Year']
    - C: student.greeting()
    - D: student['Favorite Teacher'].name
    - E: student.courseLoad[0]
14. 
    - A: 32, because 3 is a string and 2 is concatenated to it
    - B: 1, because 2 is subtracted rather than concatenated, it becomes 3-2
    - C: 3, because it is just the numeric value 3 + 0, since the numeric value of null is 0.
    - D: 3null, because 3 is a string, and null is concatenated to it
    - E: 4, because the numeric value of the boolean true is 1, which is added to 3
    - F: 0, because the numeric value of the boolean false is 0, which is added to the numeric value 0 of null
    - G: 3undefined, because 3 is a string and so undefined is concatenated to it
    - H: NaN, since undefined converts to NaN rather than having a numeric value, it cannot subtract another number and will just return NaN
15. 
    - A: true, because the numeric value of the string 2 is greater than the numeric value 1
    - B: false, because the two are compared as strings, and alphabetically 2 does not come before 1. 
    - C: True, because the numeric values of the two are equal
    - D: false, because === checks without type conversion
    - E: false, because the numeric value of true is 1, which is not equal to 2
    - F: true, because Boolean(2) will make the 2 a boolean true, which will be equal to another boolean true.
16. The == will check two values for equality, and will convert these values to numbers if the operand types are different. === does not convert the types, and so any operands with different types will immediately return false without type conversion.
17. 'How are you?' will be printed. This is because 2 is not equal to 1, the numeric value of true. This means that the print statement from the first if statement will not be reached. 2 is a nonzero number, which is interpreted as true by the else if statement, so line 4 will print. Since the else if statement is satisfied, the else statement will be skipped. Thus, 'How are you?' will be the only thing printed. 

 19. The array [6, 8, 10] will be returned by modifyArray. The parameters given are [1, 2, 3] and callback, which is a function that returns the results of a function with the parameter value increased by 2. Thus, 1 becomes 3, which is multiplied by 2 to become 6, 2+2=4*2=8, 3+2=5*2=10, with each of the results being pushed to newArr. Then newArr is returned at the end of the function, which will be [6, 8, 10] with the given parameters. 

 21. 1 4 3 2 will be printed on separate lines in order. setTimeout runs the functions after a delay, so first 1 and 4 will be printed. 3 has no delay so it is printed next. Then 2 is printed after a 1 second delay.


