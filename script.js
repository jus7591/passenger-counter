let total = 0;

function increment () {
    total += 1;
    document.getElementById("count").innerHTML = total;
}

function save() {
    let countStr = total + " - ";
    document.getElementById("save").textContent += countStr;
}

function reset() {
    total = 0;
    document.getElementById("count").innerHTML = 0;
    document.getElementById("save").textContent = "Previous Entries: ";
    
}