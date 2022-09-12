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
Think of the city as a matrix, and suppose you're in a random cell of the matrix, with row index 0 and column index 0
If you move upward (north) then row index+1
If you move downward (south) then row index-1
If you move leftward (west) then column index-1
If you move rightward (est) then column index+1
We want to walk exactly ten minutes hence the array (with movements) length will be exactly ten, and after the walk we need to be in position [0,0] again.
*/

function isValidWalk(walk) {
    let coordinates = [0, 0]
    if (walk.length === 10) {
        for (let i = 0; i < walk.length; i++) {
            switch (walk[i]) {
                case "n":
                    coordinates[0]++;
                    break;

                case "s":
                    coordinates[0]--
                    break;

                case "e":
                    coordinates[1]++
                    break;

                case "w":
                    coordinates[1]--
                    break;

                default:
                    break;
            }
        }

        if (coordinates[0] === 0 && coordinates[1] === 0) {
            return true
        }

    }

    return false
}

console.log(isValidWalk(["n", "n", "n", "e", "s", "s", "s", "w"]))