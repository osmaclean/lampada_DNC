

; (function () {
    'use strict'

    let on = document.getElementById("on");
    let offButton = document.getElementById("offButton");
    let offIMG = document.getElementById("offIMG");

    function broken() {
        return offIMG.src.indexOf('break') > -1;
    }

    on.addEventListener("click", () => {
        if (!broken()) {
            offIMG.src = "assets/src/img/on.svg";
        }
    });

    offButton.addEventListener("click", () => {
        if (!broken()) {
            offIMG.src = "assets/src/img/off.svg";
        }

    });

    offIMG.addEventListener("click", () => {
        offIMG.src = "assets/src/img/break.svg";
        return
    });
})()