//Various implementation:

/* function findLongestWordLength(str) {
    let m = 0;
    for (const el of str.split(" ")) {
        m = el.length > m ? el.length : m;
    }
    return m;
} */

/* function findLongestWordLength(str) {
    return str.split(" ").reduce((len, word) => Math.max(len, word.length), 0);
}
*/

//with ... (rest operator)
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(el => el.length));
}

console.log(findLongestWordLength("The quick brown fox juumped over the lazy dog"));




