function crearCorazon() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  const duracion = Math.random() * 3 + 2;
  heart.style.animationDuration = duracion + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duracion * 1000);
}

setInterval(crearCorazon, 200);