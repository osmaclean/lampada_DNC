

; (function () {
    'use strict'

    let on = document.getElementById("on");
    let offButton = document.getElementById("offButton");
    let offIMG = document.getElementById("offIMG");
    let msgAlert = document.getElementById("msgAviso");



    function broken() {
        return offIMG.src.endsWith('break');
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
        let redirect = offIMG.src = "assets/src/img/break.svg";
        msgAlert.innerHTML = 'Eu avisei, não é mesmo?<br> Atualize a página novamente'

        if (redirect.endsWith('break.svg')) {
            on.disabled = true;
            on.style.backgroundColor = "#818181"
            on.style.border = "#818181"
            on.style.pointerEvents = "none";
            offIMG.style.pointerEvents = "none";
            offButton.disabled = true;
            offButton.style
            offButton.style.backgroundColor = "#818181"
            offButton.style.border = "#818181"
            offButton.style.pointerEvents = "none";
        }
    });
})()