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
    explode.style.top = Math.random() * 100 + "vh";
    explode.style.fontSize = Math.random() * 20 + 20 + "px";
    explode.style.animationDuration = Math.random() * 4 + 3 + "s";

    document.body.appendChild(explode);

    setTimeout(() => {
      explode.remove();
    }, 7000);
  }
}
