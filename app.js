var toggleBtn = document.getElementById('toggler');
function toggleMode() {
    var hobby = document.querySelector('.hobbies-details');
    if (hobby.style.display === "none") {
        hobby.style.display = "block";
    }
    else {
        hobby.style.display = "none";
    }
}
toggleBtn.onclick = function () {
    toggleMode();
};
