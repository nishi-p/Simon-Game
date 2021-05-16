# Simon-Game

### Task:
An online version of "Simon" game.
https://en.wikipedia.org/wiki/Simon_(game)

### Learning:
JavaScript and jQuery library.

### Working:
Hosted at https://nishi-p.github.io/Simon-Game/.

How to play:  
1. Browser highlights a color on screen with sound.  
2. User clicks on the same color.  
3. Browser highlights another color.  
4. User has to repeat the pattern or sequence of colors that were highlighted from the beginning. If the user fails to follow the sequence, game restarts.  
5. Successfully following the pattern takes the user to a new level. With each new level, the length of the sequence increases.  

Example:

Level 1  
Browser --> ["red"]  
User --> ["red"]  
Successful!  

Level 2  
Browser --> ["blue"]  
User --> ["red", "blue"]  
Successful!  

Level 3  
Browser --> ["red"]  
User --> ["red", "blue", "red"]  
Successful!  

Level 4  
Browser --> ["green"]  
User --> ["red", "blue", "red", "yellow"]  
Game Over! Start Over.
