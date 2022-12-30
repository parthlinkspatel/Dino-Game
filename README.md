# Dino-Game
## Welcome to my Dino game!

You can now play this game even when you have Internet!


Goal of this game is to not let the Dinosaur touch the flame.
When you click or tap, the dinosaur will jump.

### Overview of how my code is designed

My program is coded in HTML, CSS, and JavaScript in three files: index.html, style.css, and script.js

The file index.html imports all the images and supported files style.css and script.js.    

In style.css, the avatar and obstacle classes are created.    
Since the obstacle will always move from right to left, an infinate animation property was added to the obstacle and avatar. The avatar will jump vertically only when the user clicks, so an animation property has been created that allows the avatar to jump. However, this animation property will be added to and taken off of the avatar class.     

In script.js, there are two main functions: <code>hop()</code> and <code>obstacleCollision()</code>.   
<code>hop()</code> is called from index.html when the user clicks. This function first checks if the avatar is already in the air jumping. If it isn't, then it will add the animation to the avatar class. Within 500ms, the avatar will be done jumping and the animation property will be removed from the class. This will allow the avatar to only jump once it is back on the floor.     
The second function is script.js is <code>obstacleCollision()</code>. This runs every 5ms to check if the avatar has hit the obstacle. Based on the height and widths of the obstacle defined in style.css, it can see if the avatar is overlapping the obstacle. If the avatar is detected overlapping the obstacle, the game will end and display the score. Or else it will continue on to run the obstacleCollision method until the avatar collides with an obstacle.

