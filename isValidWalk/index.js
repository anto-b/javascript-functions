/* 
Solution of codewars kata: 
https://www.codewars.com/dashboard

Description:
You live in the city of Cartesia where all roads are laid out in a perfect grid. 
You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, 
of course, return you to your starting point. Return false otherwise.

My implementation:
Think of the city as a matrix, and suppose you're in the center of the matrix.
If you move upward (north) then row index+1
If you move downward (south) then row index-1
If you move leftward (west) then column index-1
If you move rightward (est) then column index+1
Is known that we only have 10 minutes, so for this reason we'll use a 10x10 matrix, and also for this reason the maximum array length will be 10
*/

function isValidWalk(walk) {
    let centerCoordinates = [0, 0]
    if (walk.length === 10) {
        for (let i = 0; i < walk.length; i++) {
            switch (walk[i]) {
                case "n":
                    centerCoordinates[0]++;
                    break;

                case "s":
                    centerCoordinates[0]--
                    break;

                case "e":
                    centerCoordinates[1]++
                    break;

                case "w":
                    centerCoordinates[1]--
                    break;

                default:
                    break;
            }
        }

        if (centerCoordinates[0] === 0 && centerCoordinates[1] === 0) {
            return true
        }

    }

    return false
}

console.log(isValidWalk(["n", "n", "n", "e", "s", "s", "s", "w"]))