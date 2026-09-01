document.addEventListener("DOMContentLoaded", () => {

    let home = document.getElementById("home");
    let letter = document.getElementById("letter");
    let lour = document.getElementById("lour");
    let chan = document.getElementById("chan");
    let sac = document.getElementById("sac");
    let heshei = document.getElementById("heshei");
    let nate = document.getElementById("nate");
    let images = document.getElementById("images");
    let creds = document.getElementById("creds");
    let backBtn = document.getElementById("back");

    let currentScreen = home;
    let previousScreen = null;

    function showScreen(screen) {
        currentScreen.classList.remove("active");

        previousScreen = currentScreen;
        currentScreen = screen;

        currentScreen.classList.add("active");

        backBtn.style.display = "block";
    }

    /* HOME */

    window.showImages = function() {
        showScreen(images);
    }

    window.showFamily = function() {
        showScreen(document.getElementById("dafam"));
    }

    window.showLetter = function() {
        showScreen(letter);
    }

    window.showCredits = function() {
        showScreen(creds);
    }

    /* LETTERS */

    window.showLourence = function() {
        showScreen(lour);
    }

    window.showChanelle = function() {
        showScreen(chan);
    }

    window.showIsaac = function() {
        showScreen(sac);
    }

    window.showHeshei = function() {
        showScreen(heshei);
    }

    window.showNate = function() {
        showScreen(nate);
    }

    /* BACK BUTTON */

    window.goBack = function() {
        if (!previousScreen) return;

        currentScreen.classList.remove("active");

        let oldScreen = currentScreen;
        currentScreen = previousScreen;
        previousScreen = null;

        currentScreen.classList.add("active");

        if (currentScreen === home) {
            backBtn.style.display = "none";
        }
    }

    /* CONFETTI */

    window.launchConfetti = function() {
        for (let i = 0; i < 200; i++) {

            let leaf = document.createElement("div");

            leaf.classList.add("leaf");

            leaf.innerHTML = ["🍂", "🍃", "🍁", "🌺", "🌸", "🍀"]
                [Math.floor(Math.random() * 6)];

            leaf.style.left = Math.random() * 100 + "vw";
            leaf.style.fontSize = Math.random() * 20 + 20 + "px";
            leaf.style.animationDuration = Math.random() * 4 + 3 + "s";

            document.body.appendChild(leaf);

            setTimeout(() => {
                leaf.remove();
            }, 7000);
        }
    }

    /* SPARKLES */

    window.launchSparkles = function() {
        for (let i = 0; i < 200; i++) {

            let spark = document.createElement("div");

            spark.classList.add("spark");

            spark.innerHTML = ["✨", "🎇", "🎆"]
                [Math.floor(Math.random() * 3)];

            spark.style.left = Math.random() * 100 + "vw";
            spark.style.fontSize = Math.random() * 20 + 20 + "px";
            spark.style.animationDuration = Math.random() * 4 + 3 + "s";

            document.body.appendChild(spark);

            setTimeout(() => {
                spark.remove();
            }, 7000);
        }
    }

    /* CREDITS EXPLOSION */

    window.launchBomb = function() {
        for (let i = 0; i < 50; i++) {

            let explode = document.createElement("div");

            explode.classList.add("explode");

            explode.innerHTML = ["💥", "🎉", "🎊", "✨"]
                [Math.floor(Math.random() * 4)];

            explode.style.left = Math.random() * 100 + "vw";
            explode.style.top = "-50px";
            explode.style.fontSize = Math.random() * 20 + 20 + "px";
            explode.style.animationDuration = Math.random() * 4 + 3 + "s";

            document.body.appendChild(explode);

            setTimeout(() => {
                explode.remove();
            }, 7000);
        }
    }

    /* INITIAL STATE */

    backBtn.style.display = "none";

});
