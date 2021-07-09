# Recruitment-task-angular

## Information: 
* To solve this task, you can, but you don't have to use the Angular Material library : https://material.angular.io/
* Angular Material is already installed in this project
* If you have any questions, please do not hesitate to ask.
* Good luck!

## Recruitment task

1. Create a new component called 'elements-list'
2. Create a new component called 'elements-details'
3. In the 'elements-list' component display selectable list of elements names, loaded from assets/data/elements.json 
4. On the right of the list display the 'elements-details' component with all the information of the selected element
5. Implement routing for the 'elements-list' component. Display the routing result inside .content in app.component

6. In app.component add menu that opens on button click and add link to the 'elements-list' component
7. On application start redirect to the 'elements-list' component

8. Add a new module with one component inside called 'coloring-matrix'
9. In the 'coloring-matrix' component template add an input which accepts number values from 10 to 100, with the default value of 20
10. In the 'coloring-matrix' component generate a matrix of divs elements, with size specified by the input value (the same number of columns and rows). 
11. Each matrix element should have the same size, 15px x 15px, and background color black
12. The space between each two elements should be 1px

13. Lazy load the 'coloring-matrix' module under route 'coloring-matrix'. It should show 'coloring-matrix' component.
14. Add a button inside the 'elements-list' component redirecting to the 'coloring-matrix'

15. Create a new directive that will modify the background color of the clicked element:
get first 10 colors from assets/data/colors.json. Each click on the element should change the background to the next color in the array.
On the 11th click the background should be black again and the cycle should start again.

16. Add the directive to every element of the matrix.
17. Save the current background of each element and restore it on application reload.

## Delivering the solution

* After you're done with the task, create a new repository on GitLab, GitHub or BitBucket and push your solution there.
* Send the link to the repository to us.
# task-angular
