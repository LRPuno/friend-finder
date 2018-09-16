# Friend Finder
Homework for Coding Bootcamp

# Introduction
This app simulates a match-making algorithm that matches you with a friend and holds said friends on a database on the server-side. 

# Technologies Used
1. Node.js
    1. body parser
    2. path
    3. express
2. Express
3. Bootstrap 4
4. jQuery

## Basics of the Website

1. After inputting information into the survey, the compatibility logic is ran.

2. The compability logic involves subtracting the score of each question of every "friend" in the database with your own score that you just inputed. Absolute values are then applied to the differences to negate the negative number.

3. The total differences are then added up.

4. The lowest difference between all the friends in the database (max being 0) is the person you are most compatibile with.


