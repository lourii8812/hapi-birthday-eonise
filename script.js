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
    let dafam = document.getElementById("dafam");
    let mb = document.getElementById("mainBack");
    let lb = document.getElementById("letterBack");


    window.showImages = function() {
        home.classList.remove("active");
        images.classList.add("active");

        mb.style.display = "block";
        lb.style.display = "none";
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

});
