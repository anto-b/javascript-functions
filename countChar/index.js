const txtArea = document.getElementById("txt-area");
const leftChar = document.getElementById("left-char");

const maxLn = 4;
txtArea.setAttribute("maxlength", maxLn);
leftChar.textContent = maxLn

txtArea.oninput = () =>{
    const stripped = txtArea.value.replace(/\s/g,"").length;
    leftChar.textContent = maxLn - stripped;
    txtArea.setAttribute("maxlength", maxLn + txtArea.value.length - stripped);
}




