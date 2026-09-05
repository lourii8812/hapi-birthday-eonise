document.addEventListener("DOMContentLoaded", () => {

    let bot = document.getElementById("bot");
    let log = document.getElementById("login");
    let home = document.getElementById("home");
    let letter = document.getElementById("letter");
    let lour = document.getElementById("lour");
    let chan = document.getElementById("chan");
    let sac = document.getElementById("sac");
    let heshei = document.getElementById("heshei");
    let nate = document.getElementById("nate");
    let images = document.getElementById("images");
    let creds = document.getElementById("creds");
    let dafam = document.getElementById("dafam");
    let mb = document.getElementById("mainBack");
    let lb = document.getElementById("letterBack");
    mb.style.display = "none";
    lb.style.display = "none";
    let es1 = document.getElementById("easteregg1");
    let es2 = document.getElementById("easteregg2");
    let es3 = document.getElementById("easteregg3");
    let fbl = document.getElementById("fullLetter");
    let sp = document.getElementById("spinner");
    let botClicks = 0;
    let botWaiting = false;
    let eggsFound = 0;
    let foundEggs = [];

    function foundEgg(egg) {
        if (!foundEggs.includes(egg)) {
            foundEggs.push(egg);
            eggsFound++;

            document.getElementById("count").textContent = "🥚 found: " + eggsFound + "/14";
        }
    }
    let botTimer;
    window.notBot = function() {
        botClicks++;

        if (botClicks >= 100000000000000000000) {
            clearTimeout(botTimer);
            sp.classList.remove("spinner");
            bot.classList.remove("active");
            log.classList.add("active");
            foundEgg("14thClick");
            return;
        }

        if (!botWaiting) {
            botWaiting = true;
            sp.classList.add("spinner");

            botTimer = setTimeout(() => {
                bot.classList.remove("active");
                log.classList.add("active");
            }, 180000);
        }
    }
    window.showImages = function() {
        home.classList.remove("active");
        images.classList.add("active");

        mb.style.display = "block";
        lb.style.display = "none";
    }

    window.goBackPass = function() {
        es3.classList.remove("active");
        log.classList.add("active");
    }
    window.showFamily = function() {
        home.classList.remove("active");
        dafam.classList.add("active");
        
        mb.style.display = "block";
        lb.style.display = "none";
    }

    window.showLetter = function() {
        home.classList.remove("active");
        letter.classList.add("active");
        
        mb.style.display = "block";
        lb.style.display = "none";
    }

    window.showCredits = function() {
        home.classList.remove("active");
        creds.classList.add("active");
        
        mb.style.display = "block";
        lb.style.display = "none";
    }
    
    window.showEasterEgg1 = function() {
        images.classList.remove("active");
        es1.classList.add("active");
        foundEgg("es1");

        mb.style.display = "none";
        lb.style.display = "none";
    }
    window.showEasterEgg2 = function() {
        home.classList.remove("active");
        es2.classList.add("active");
        foundEgg("es2");
        
        mb.style.display = "none";
        lb.style.display = "none";
    }

    window.goReveal = function() {
        setTimeout(() => {
            document.getElementById("reveal").textContent = "Password: hmph!noaccess";
            foundEgg("revpass");
        }, 15000);
    }

    window.showLourence = function() {
        letter.classList.remove("active");
        lour.classList.add("active");

        mb.style.display = "none";
        lb.style.display = "block";
    }

    window.showChanelle = function() {
        letter.classList.remove("active");
        chan.classList.add("active");

        mb.style.display = "none";
        lb.style.display = "block";
    }

    window.showIsaac = function() {
        letter.classList.remove("active");
        sac.classList.add("active");

        mb.style.display = "none";
        lb.style.display = "block";
    }

    window.showHeshei = function() {
        letter.classList.remove("active");
        heshei.classList.add("active");

        mb.style.display = "none";
        lb.style.display = "block";
    }

    window.showNate = function() {
        letter.classList.remove("active");
        nate.classList.add("active");

        mb.style.display = "none";
        lb.style.display = "block";
    }


    window.goBackMain = function() {
        images.classList.remove("active");
        letter.classList.remove("active");
        creds.classList.remove("active");
        dafam.classList.remove("active");
        es1.classList.remove("active");
        es2.classList.remove("active");
        fbl.classList.remove("active");

        home.classList.add("active");
        
        mb.style.display = "none";
        lb.style.display = "none";
    }
    window.goBackLetter = function() {
        heshei.classList.remove("active");
        nate.classList.remove("active");
        sac.classList.remove("active");
        lour.classList.remove("active");
        chan.classList.remove("active");

        letter.classList.add("active");

        mb.style.display = "block";
        lb.style.display = "none";
    }
    
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
    
    function updateClock() {
        const now = new Date();
        const formattedDateTime = now.toLocaleString(); 
        document.getElementById("live-clock").textContent = formattedDateTime;
    }
    updateClock();
    setInterval(updateClock, 1000);
    
    async function translateToJapanese() {
    const letters = document.querySelectorAll("bt2");

    for (const letter of letters) {
        const english = letter.textContent.trim();

        const response = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(english)}&langpair=en|ja`
        );

        const data = await response.json();

        letter.textContent = data.responseData.translatedText;
    }
}
    translateToJapanese();

    window.checkPassword = function() {
        const password = document.getElementById("password").value;

        if (password === "hmph!noaccess") {
            log.classList.remove("active");
            home.classList.add("active");
        }
        else if (password === "iamgayforhim") {
            log.classList.remove("active");
            es3.classList.add("active");
        }
        else {
            document.getElementById("error").textContent = "Wrong Password LOOOL >///< 😝😝";
        }
    }

    window.Birthday = function() {
        creds.classList.remove("active");
        fbl.classList.add("active");
        foundEgg("fullbirthdayletter");

        mb.style.display = "none";
        lb.style.display = "none";
    }
});
