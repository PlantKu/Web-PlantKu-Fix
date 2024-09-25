function openModal() {
    document.getElementById("founderModal").style.display = "block";
}

function closeModal() {
    document.getElementById("founderModal").style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById("founderModal")) {
        document.getElementById("founderModal").style.display = "none";
    }
}
