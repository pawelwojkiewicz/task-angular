# Recruitment-task-angular

INFORMATION: 
To solve this task, you can, but you don't have to use the Angular Material library.
It is strongly recomended to use it in case of the table though (point 6.), as it provides all the required functionality
If you have any questions, please do not hesitate to ask.
Good luck!


Recruitment excercise

1. Create a new component called 'elements-list'
2. Create a new component called 'elements-details'
3. In the 'elements-list' component display selectable list of elements names, loaded from assets/data/elements.json 
4. On the right of the list display the 'elements-details' component with all the information of the selected element

5. Create a new component called 'colors'
6. In the 'colors' component display a table with sorting and pagination with data provided in assets/data/colors.json

7. Implement routing for the 'elements-list' and 'colors' components. Display each of them inside .content in app.component
8. In app.component add menu that opens on button click and add routes to the 'elements-list' and 'colors' components
9. On application start redirect to the 'colors' component

10. Add a new module with one component inside called 'coloring-matrix'
11. In the 'coloring-matrix' component add an input which accepts number values from 10 to 100, with the default value of 20
12. In the 'coloring-matrix' component generate a matrix of divs elements, with size specified by the input value (the same number of columns and rows). 
13. Each matrix element should have the same size, 15px x 15px, and background color black
14. The space between each two elements should be 1px

15. Lazy load the 'coloring-matrix' module under route 'coloring-matrix'. It should show 'coloring-matrix' component.
16. Add a button inside the 'colors' component redirecting to the 'coloring-matrix'

17. Create a new directive that will modify the background color of the clicked element:
get first 10 colors from assets/data/colors.json. Each click on the element should change the background to the next color in the array.
On the 11th click the background should be black again and the cycle should start again.

18.Add the directive to every element of the matrix


Delivering the solution

After you're done with the task, create a new repository on GitLab, GitHub or BitBucket and push your solution there.
Sent the link to the repository to us.