const sky = document.getElementById("sky");

/* ESTRELAS */

for (let i = 0; i < 220; i++) {

  const s = document.createElement("div");

  s.className = "star";

  const size = Math.random() * 2.5 + 0.5;

  s.style.cssText = `
    width:${size}px;
    height:${size}px;

    top:${Math.random() * 100}%;

    left:${Math.random() * 100}%;

    --dur:${Math.random() * 3 + 2}s;

    animation-delay:${Math.random() * 5}s;

    opacity:${Math.random() * 0.6 + 0.3};

    box-shadow:
      0 0 ${size * 2}px rgba(
        180,
        200,
        255,
        ${Math.random() * 0.4 + 0.1}
      );
  `;

  sky.appendChild(s);
}

/* ESTRELAS CADENTES */

for (let i = 0; i < 6; i++) {

  const ss = document.createElement("div");

  ss.className = "shooting-star";

  ss.style.cssText = `
    top:${Math.random() * 40}%;

    left:${Math.random() * 60 + 30}%;

    --shoot-dur:${Math.random() * 4 + 6}s;

    --delay:${Math.random() * 10 + i * 3}s;
  `;

  sky.appendChild(ss);
}