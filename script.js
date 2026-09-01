function launchConfetti() {
  for (let i = 0; i < 200; i++) {
    const leaf = document.createElement("div");

    leaf.classList.add("leaf");

    leaf.innerHTML = ["🍂", "🍃", "🍁", "🌺", "🌸", "🍀"][Math.floor(Math.random() * 6)];

    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.fontSize = Math.random() * 20 + 20 + "px";
    leaf.style.animationDuration = Math.random() * 4 + 3 + "s";

    document.body.appendChild(leaf);

    setTimeout(() => {
      leaf.remove();
    }, 7000);
  }
}

function launchSparkles() {
  for (let i = 0; i < 200; i++) {
    const spark = document.createElement("div");

    spark.classList.add("spark");
    spark.innerHTML = ["✨", "🎇", "🎆"][Math.floor(Math.random() * 3)];

    spark.style.left = Math.random() * 100 + "vw";
    spark.style.fontSize = Math.random() * 20 + 20 + "px";
    spark.style.animationDuration = Math.random() * 4 + 3 + "s";

    document.body.appendChild(spark);

    setTimeout(() => {
      spark.remove();
    }, 7000);
  }
}

function launchBomb() {
  for (let i = 0; i < 50; i++) {
    const explode = document.createElement("div");

    explode.classList.add("explode");
    explode.innerHTML = ["💥", "🎉", "🎊", "✨"][Math.floor(Math.random() * 4)];

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

function showImages() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("images").classList.add("active");
}
function showFamily() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("dafam").classList.add("active");
}
function showLetter() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("letter").classList.add("active");
}
function showChanelle() {
  document.getElementById("letter").classList.remove("active");
  document.getElementById("chan").classList.add("active");
}
function showLourence() {
  document.getElementById("letter").classList.remove("active");
  document.getElementById("lour").classList.add("active");
}
function showHeshei() {
  document.getElementById("letter").classList.remove("active");
  document.getElementById("heshei").classList.add("active");
}
function showIsaac() {
  document.getElementById("letter").classList.remove("active");
  document.getElementById("sac").classList.add("active");
}
function showNate() {
  document.getElementById("letter").classList.remove("active");
  document.getElementById("nate").classList.add("active");
}
function showCredits() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("creds").classList.add("active");
}
