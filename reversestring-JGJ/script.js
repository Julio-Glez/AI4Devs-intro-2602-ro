function toggleButton() {
    const input = document.getElementById("inputText").value;
    const button = document.getElementById("reverseBtn");

    if (input.length > 3) {
        button.style.display = "inline";
    } else {
        button.style.display = "none";
    }
}

function reverseText() {
    const input = document.getElementById("inputText").value;

    const reversed = input.split("").reverse().join("");

    document.getElementById("result").textContent = reversed;
}