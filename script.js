/* Smooth Scroll */
document.querySelectorAll("nav a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(a.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* 3D universal tilt */
/* Advanced 360° 3D Tilt Effect */
document.querySelectorAll(".tilt").forEach((box) => {
  let xRotation = 0;
  let yRotation = 0;

  box.style.transformStyle = "preserve-3d";

  box.addEventListener("mousemove", (e) => {
    const r = box.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    const centerX = r.width / 2;
    const centerY = r.height / 2;

    const rotateY = ((x - centerX) / centerX) * 18; // Left-right rotation
    const rotateX = -((y - centerY) / centerY) * 18; // Up-down rotation

    yRotation = rotateY;
    xRotation = rotateX;

    box.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.05,1.05,1.05)`;
  });

  box.addEventListener("mouseenter", () => {
    box.style.transition = "transform 0.15s ease-out";
  });

  box.addEventListener("mouseleave", () => {
    box.style.transition = "transform 0.5s ease";
    box.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  });
});

/* Card-specific extra glow */
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left,
      y = e.clientY - r.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

/* Modal */
function openModal(card) {
  document.getElementById("m-title").textContent = card.dataset.title;
  document.getElementById("m-tech").textContent = "Tech: " + card.dataset.tech;
  document.getElementById("m-desc").textContent = card.dataset.desc;
  document.getElementById("m-live").href = card.dataset.live;
  document.getElementById("m-git").href = card.dataset.git;

  document.getElementById("modal").classList.add("active");
}

function closeModal(e) {
  if (e.target.id === "modal" || e.target.classList.contains("modal-close")) {
    document.getElementById("modal").classList.remove("active");
  }
}

/* Make Live Demo and GitHub links open correctly */
document.querySelectorAll(".card").forEach((card) => {
  const liveBtn = card.querySelector("[data-live]");
  const gitBtn = card.querySelector("[data-git]");

  liveBtn.href = card.dataset.live;
  liveBtn.target = "_blank";

  gitBtn.href = card.dataset.git;
  gitBtn.target = "_blank";
});
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});
