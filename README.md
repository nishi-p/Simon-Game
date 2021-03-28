# Simon-Game
A version of "Simon" game developed with JavaScript and jQuery library. (Personal project)  
https://en.wikipedia.org/wiki/Simon_(game)

How to play:  
1. Computer highlights a color on screen with sound.  
2. User clicks on the same color.  
3. Computer highlights another color.  
4. User has to repeat the pattern or sequence of colors that were highlighted from the beginning. If the user fails to follow the sequence, game restarts.  
5. Successfully following the pattern takes the user to a new level. With each new level, the length of the sequence increases.  

Example:

Level 1  
Computer --> ["red"]  
User --> ["red"]  
Successful!  

Level 2  
Computer --> ["blue"]  
User --> ["red", "blue"]  
Successful!  

Level 3  
Computer --> ["red"]  
User --> ["red", "blue", "red"]  
Successful!  

Level 4  
Computer --> ["green"]  
User --> ["red", "blue", "red", "yellow"]  
Game Over! Start Over.
