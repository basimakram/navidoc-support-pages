
function showButton2() {
    const button2 = document.querySelector(".uk-button");
    button2.style.display = "flex";
}

function showButton1() {
    const button1 = document.querySelector(".dk-button");
    button1.style.display = "flex";
}

let parentButton = document.querySelector(".dk-button");
let childButton = document.querySelector(".uk-button");


function swapButtons(clickedButton) {
    const button1 = document.querySelector(".dk-button");
    const button2 = document.querySelector(".uk-button");

    if (clickedButton === "button1") {
        button2.style.display = "none";
        button1.style.display = "flex";
        button2.parentNode.insertBefore(button2, button1.nextSibling);
        parentButton = button1;
        childButton = button2;
        showButton2();
    } else if (clickedButton === "button2") {
        button1.style.display = "none";
        button2.style.display = "flex";
        button1.parentNode.insertBefore(button1, button2.nextSibling);
        parentButton = button2;
        childButton = button1;
        showButton1();
    }
}

function hideChildButton(event) {
    // Check if the parent button is being hovered
    const isHovered = parentButton.contains(event.relatedTarget) || childButton.contains(event.relatedTarget);

    // Hide the child button after 2 seconds if button is not being hovered
    if (!isHovered) {
        childButton.style.display = "none";
    }
}
