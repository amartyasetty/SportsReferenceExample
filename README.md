# SportsReferenceExample
I used JavaScript to solve the engineering intern coding prompt.
To start, I imported the json file that contained the win-loss data.
I then stored the keys(or team names), the amount of teams, and stored the json information into a variable that can be accessed in JS.
To create a data structure that portrays the example table, I created a master array and stored other arrays in that array to create rows.
The first array is filled with the team abbreviations to match the sample table in the first and last rows shown.
To fill the head-to-head data, I created a nested for loop that went through every team/key and filled in the amount of wins that team had against the other teams and added it to an array.
The json data was accessed through the data variable made in the beginning, and the code goes through the keys using the loop iteration variables.
When the row and column had the same team, a "--" was inserted in that position in the array.
That array was then pushed to the master array, adding a new row that matches the format shown in the sample table.

