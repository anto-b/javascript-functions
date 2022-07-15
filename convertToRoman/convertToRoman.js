function convertToRoman(num) {
    if (num < 1 || num > 4999) return "";

    const rules =
        [
            ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], //unità
            ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], //decine
            ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], //centinaia
            ["M", "MM", "MMM", "MMMM"]//migliaia
        ]
    const arr = num.toString().split("").reverse();
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str = arr[i] > 0 ? rules[i][arr[i] - 1] + str : str; //il nuovo valore deve andare in testa ala stringa non in coda
    }
    return str;
}


console.log(convertToRoman(2791));