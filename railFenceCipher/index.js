const string = "attack at once";
const numFences = 2; //Rows (Fences) number

console.log(encode(string,numFences))
console.log(decode(encode(string,numFences),numFences))

function encode(string, numRows) {
    //Note that numRows is equale to the number of fences
    const numColumns = string.length; //Columns number equals to the number of letters in the string
    let matrix = [];

    //creating numRowsXnumColumns matrix
    for (let i = 0; i < numRows; i++) {
        matrix.push([]);
        for (let j = 0; j < numColumns; j++) {
            matrix[i].push("")
        }
    }

    let i = 0;  //row index
    let j = 0; //column index
    let increment = true;
    while (j < numColumns) {
        //console.log(i, j);
        matrix[i][j] = string[j];

        if (increment) { //the row index must vary periodically between 0 and numRows-1, that is for numRows = 3, the row index must vary periodically: (0,1,2);(2,1,0);(0,1,2);(2,1,0);...
            i++
            if (i === numRows - 1) {
                increment = false;
            }
        } else if (!increment) {
            i--
            if (i === 0) {
                increment = true;
            }
        }

        j++;
    }

    let encoded = "";
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numColumns; j++) {
            if (matrix[i][j]) { //if element (i,j) exsists, that is, if element (i,j) isn't null (NOTE that blank IS a valid elemnent!)
                encoded += matrix[i][j] //concatenate the non-null elements of each rows
            }
        }
    }

    return encoded;
}

function decode(encodedString, numRows) {
    const numColumns = encodedString.length;
    let matrix = [];

    //creating numRowsXnumColumns matrix
    for (let i = 0; i < numRows; i++) {
        matrix.push([]);
        for (let j = 0; j < numColumns; j++) {
            matrix[i].push("")
        }
    }

    let i = 0;  //row index
    let j = 0; //column index
    let increment = true;
    let wordIndexs = []; //will contains the position of the single word in the row
    while (j < numColumns) {
        //console.log(i, j);
        wordIndexs.push([i, j]);

        if (increment) { //the row index must vary periodically between 0 and numRows-1, that is for numRows = 3, the row index must vary periodically: (0,1,2);(2,1,0);(0,1,2);(2,1,0);...
            i++
            if (i === numRows - 1) {
                increment = false;
            }
        } else if (!increment) {
            i--
            if (i === 0) {
                increment = true;
            }
        }

        j++;
    }

    //for decryption purpose, we will fill the matrix by rows
    j = 0 //word index
    for (let i = 0; i < numRows; i++) {
        for (let k = 0; k < wordIndexs.length; k++) {
            if (wordIndexs[k][0] === i) {
                matrix[wordIndexs[k][0]][wordIndexs[k][1]] = encodedString[j];
                j++;
            }
        }
    }

    let decoded = "";

    i = 0;  //row index
    j = 0; //column index
    increment = true;
    while (j < numColumns) {
        //console.log(i, j);
        decoded += matrix[i][j]

        if (increment) { //the row index must vary periodically between 0 and numRows-1, that is for numRows = 3, the row index must vary periodically: (0,1,2);(2,1,0);(0,1,2);(2,1,0);...
            i++
            if (i === numRows - 1) {
                increment = false;
            }
        } else if (!increment) {
            i--
            if (i === 0) {
                increment = true;
            }
        }

        j++;
    }

    return decoded
}





