function pigLatinStr(engStr) {
    return engStr
        .split(" ")
        .map(el => el.split(""))
        .map(el => {
            el.push(el.shift(), "a", "y");
            return el
        })
        .map(el => el.join(""))
        .join(" ")
        .toLowerCase();

}

console.log(pigLatinStr("Hello my name is Bob"))