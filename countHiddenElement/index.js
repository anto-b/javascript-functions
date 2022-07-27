const body = document.getElementsByTagName("body")[0];
let hiddenCounter = 0;

updateHiddenCounter(body)
console.log(hiddenCounter)

/* 

*/

function updateHiddenCounter(element) { //the parameter is the root element, from which to start the recursive calls of the function
    /*  
        //use for debugging
        console.log("----------------------------")
        console.log("Element: ", element)
        console.log("Has child: " + hasChild(element))
        console.log("Is visible: " + isVisible(element)) 
    */

    if (isVisible(element)) { //get the current element, and check if it's visible
        if (hasChild(element)) { //then check if has any child
            for (let i = 0; i < element.children.length; i++) { //if so, recall the function for each child and repeat the checks for each child
                updateHiddenCounter(element.children[i])
            }
        }
    } else { //if the current element is hidden, update the hidden counter by 1
        hiddenCounter++;
        if (hasChild(element)) { //check if the current hidden element has any child
            for (let i = 0; i < element.children.length; i++) {
                addHiddenChild(element.children[i]) //then for each child update the hidden counter by one, and check for other nested children
            }
        }
    }
}

/* 
function updateHiddenCounter(element) {
    //this version of the function doesn't count the hidden children of an hidden element
    console.log(element)
    console.log(isVisible(element))
    if (isVisible(element)) {
        if(hasChild(element)){
            for(let i = 0; i<element.children.length; i++){
                updateHiddenCounter(element.children[i])
            }
        }
    } else {
        //if the element is hidden, each children of the element is hidden
        hiddenCounter++
    }
} 
*/

/* 
function updateHiddenCounter(element) {
    console.log("----------------------------")
    console.log("Element: ", element)
    console.log("Has child: " + hasChild(element))
    console.log("Is visible: " + isVisible(element))

    if (hasChild(element) && isVisible(element)) {
        for (let i = 0; i < element.children.length; i++) {
            updateHiddenCounter(element.children[i]);
        }
    } else {
        if (!isVisible(element)) {
            hiddenCounter++
            console.log(hiddenCounter)
        }
    }
} 
*/


function isVisible(element) {
    return checkDisplayProperty(element) && checkVisibilityProperty(element) && checkOpacityProperty(element) && checkSizeProperty(element)
}

function checkDisplayProperty(element) {
    //this function will also fire, for input with type="hidden"
    return getComputedStyle(element).getPropertyValue("display") != "none"
}

function checkVisibilityProperty(element) {
    return getComputedStyle(element).getPropertyValue("visibility") != "hidden"
}

function checkOpacityProperty(element) {
    return getComputedStyle(element).getPropertyValue("opacity") != 0
}

function checkSizeProperty(element) {
    return getComputedStyle(element).getPropertyValue("width") != 0 && getComputedStyle(element).getPropertyValue("height") != 0
}

function hasChild(element) {
    return element.children.length
}

function addHiddenChild(element) { //used for iterate each child of an hidden element
    hiddenCounter++
    if (hasChild(element)) {
        for (let i = 0; i < element.children.length; i++) {
            addHiddenChild(element.children[i])
        }
    }
}