# csc404-assignment-2

CSC404 Software Engineering and Testing 
Project #2 Development Phase  
 
In this part, you will complete the development of the web application without using 
databases. 
 
Project Description 
 
We will develop a Node.js Web Application to compute the final grade of a course 
at West Chester University.  
 
The web application displays three tabs: Home, Test Results, Add Test. When a 
user clicks the “Test Results” tab, all test cases will be displayed. When the “Add 
Test” tab is clicks, a form will be displayed, and a user can enter test data for a 
test case. After the test case is entered, you can check the test results by clicking 
the “Test Results” tab to see all tests. 
 
Problem Description: 
 
Generate test cases using Boundary Value Testing method using the problem 
describe below: 
 
The final grade for CSC404 is determined based on the average of three 
homework assignments with the weight of 20%, and two exams with the weight 
of 40% each. You need to write a Node.js program to implement the calculation 
of your final letter grade based on the rubric of A(93 or higher), A-(90-92), 
B+(87-89), B(83-86), B-(80-82), C+, C, C-, D+, D, D-, and F(0-59). You need to 
compute the grade to the first digit after the decimal point, i.e., 90.5, or 89.4. 
Then, the numeric grade will be rounded up if it is at the border. For example, 
89.5 becomes 90. 
 
Each team needs to develop several modules callable from external files. For 
example, the average of three homework assignments can be computed in the 
function find_Average (hw1, hw2, hw3) and stored in a controller.js JavaScript 
file. 
 
In Phase II, you need to develop the main.js, testController.js (with helping 
functions and controller functions), and front-end Views (index.ejs, addTest.ejs, 
displayTests.ejs) in Node.js.
