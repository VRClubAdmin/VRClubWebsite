function fadeTo(destination) {
    document.getElementById('body').style = "animation: fadeOut 1s;animation-fill-mode: forwards;";
    setTimeout(function () { window.location.href = destination; }, 1000);
}

function fadeIn() {
    document.getElementById('body').classList = "animation: fadeIn 1s; animation-fill-mode: forwards;";
}