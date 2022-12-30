var counter=0;
var highest=0;
const avatar = document.getElementById("avatar");
const obstacle = document.getElementById("obstacle");

//AVATAR JUMPS
function hop(){
    if(avatar.classList != "animate"){
        avatar.classList.add("animate");
    }
    setTimeout(function(){
        avatar.classList.remove("animate");
    },500);
}

//Checks every 5ms to see if the avatar collided with the obstacle
var obstacleCollision = setInterval(function() {
    let avatarTop = parseInt(window.getComputedStyle(avatar).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    if(obstacleLeft<20 && obstacleLeft>-20 && avatarTop>=130){
        obstacle.style.animation = "none";
        alert("Game Over : \nScore: "+Math.floor(counter/200) + "\nTry again!");
        if (highest < counter){
            highest = counter;
        }
        counter=0;
        obstacle.style.animation = "obstacle 1s infinite linear";
    } else {
        counter++;
        if (highest < counter){
            highest = counter;
        }
        document.getElementById("score").innerHTML = Math.floor(counter/200);
        document.getElementById("highestScore").innerHTML = Math.floor(highest/200);
    }
}, 5);