const count_container = document.getElementById("count-container");
const skittles = document.getElementById("skittles");

let COUNT_BTN = true,
    COLOR_BTN = 0;

function count() {
    if (COUNT_BTN) {
        for (let i = 0; i < 257; i++) {
            if (i == 0) {
                count_container.innerHTML += `${(i + 1).toString()}`;
            } else {
                count_container.innerHTML += `, ${i + 1}`;
            }
        }
    }
    COUNT_BTN = false;
}

function color() {
    if (COLOR_BTN == 0) {
        skittles.style.color = "purple";
    } else if (COLOR_BTN == 1) {
        skittles.style.color = "red";
    } else if (COLOR_BTN == 2) {
        skittles.style.color = "green";
    }
    COLOR_BTN++;
}

function reset() {
    //Buttons
    COUNT_BTN = true;
    COLOR_BTN = 0;

    //Skittles
    skittles.style.color = "black";

    //Clear
    count_container.innerHTML = "";
}
