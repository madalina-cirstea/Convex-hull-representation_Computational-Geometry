# Convex hull for a polygon and an external point

### A visual representation of an algorithm which finds the convex hull for a given convex polygon and a point outside it.

![convex_hull](https://user-images.githubusercontent.com/56949829/75114942-07c01000-5663-11ea-8584-8f0d9b46f7ab.gif)

### Link
[https://convex-hull-for-a-polygon.herokuapp.com/index.html](https://convex-hull-for-a-polygon.herokuapp.com/index.html)

### Requirement
Given a convex polygon and a point outside it, find the convex hull of all the points.

### How does the algorithm work?
- Sort the points of the polygon in trigonometric sense.
- Find the polygon's closest point to the external point.
- The points are traversed in trigonometric sense to find the upper edge.
- The points are traversed in trigonometric sense to find the lower edge.
- In the new set of points we add the outer point, the upper edge, the lower edge and the points between them in the trigonometric sense.

### How to run the program?
- Create a session.
- Add the points of the polygon.
- Add the the external point.
- Draw the polygon.
- Click Play

### Tools
- HTML - for creating the structure of the web pages and the animations that are displayed
- Javascript - for the algorithm implementation
- CSS - for designing the style in which elements are to be displayed on the screen
- Heroku - for hosting the website

### Project done in collaboration with:
- [Alexandra Andronic](https://github.com/andronicaa)
- [Ana Puiu](https://github.com/AMAPuiu)
- [Natasa Cirstea](https://github.com/Natasa-C) 
