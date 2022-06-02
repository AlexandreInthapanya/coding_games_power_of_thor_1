/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

 var inputs = readline().split(' ');
 const lightX = parseInt(inputs[0]); // the X position of the light of power
 const lightY = parseInt(inputs[1]); // the Y position of the light of power
 const initialTx = parseInt(inputs[2]); // Thor's starting X position
 const initialTy = parseInt(inputs[3]); // Thor's starting Y position
 
 var thorX = initialTx;
 var thorY = initialTy;
 // game loop
 while (true) {
     const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
 
     var direction = ''; //initialisation de la variable direction 
 
     if (thorY > lightY && thorY > 0){ //si la position de thor en ordonnée est supérieur à la position de l'éclair en ordonnée et que la position de thor en ordonnée est supérieur à 0 sont vraies 
         direction += 'N'; //alors ajouter redirection vers Nord
         thorY--; //décrémentation -1
     } else if (thorY < lightY && thorY < 17){ //sinon si la position de thor en ordonnée est inférieur à la position de l'éclair en ordonnée et que la position de thor en ordonnée est inférieur à 17 sont vraies 
         direction += 'S'; //alors ajouter redirection vers Sud
         thorY++; //incrémentation +1
     }
 
     if (thorX > lightX && thorX > 0){ //si la position de thor en abscisse est supérieur à la position de l'éclair en abscisse et que la position de thor en ordonnée est supérieur à 0 sont vraies 
         direction += 'W'; //alors ajouter redirection vers West
         thorX--; //décrémentation -1
     } else if (thorX < lightX && thorX < 39){ //sinon si la position de thor en abscisse est inférieur à la position de l'éclair en abscisse et que la position de thor en ordonnée est inférieur à 39 sont vraies 
         direction += 'E'; //alors ajouter redirection vers Est
         thorX++; //incrémentation +1
     } 
 
 
     // A single line providing the move to be made: N NE E SE S SW W or NW
     console.log(direction); 
 }