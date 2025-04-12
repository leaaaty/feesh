// script.js

const getBirthday = () => {
    const today = new Date();
    let nextBirthday = new Date(today.getFullYear(), 5, 21);
    if (today > nextBirthday) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    return nextBirthday;
  };
  
  const countdownElement = document.getElementById("countdown");
  
  function updateCountdown() {
    const now = new Date();
    const birthday = getBirthday();
  
    const timeLeft = birthday - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);
  
    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  
  setInterval(updateCountdown, 1000);
  updateCountdown();
  
  // Text changing effect
  const textElement = document.getElementById("text");
  const texts = ["Coming Soon", "www.finanaryugu.com"];
  let currentTextIndex = 0;
  
  // Set the initial text immediately upon page load
  textElement.textContent = texts[currentTextIndex];
  textElement.style.opacity = 1; // Ensure the text is visible initially
  
  function changeText() {
    textElement.style.opacity = 0; // Start fade-out animation
    setTimeout(() => {
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      textElement.textContent = texts[currentTextIndex]; // Change the text
      textElement.style.opacity = 1; // Fade back in
    }, 1000); // Wait for 1 second before changing the text
  }
  
  // Change the text every 3 seconds after the initial page load
  setInterval(changeText, 3000);
  
  // Generate random rain drops
const rainContainer = document.getElementById('rain');
for (let i = 0; i < 100; i++) {
  const drop = document.createElement('div');
  drop.className = 'raindrop';
  
  // Randomize the horizontal position
  drop.style.setProperty('--random-x', `${Math.random() * 100}vw`);
  
  // Randomize animation duration and delay
  drop.style.animationDuration = `${1.5 + Math.random() * 2}s`; // Increased duration
  drop.style.animationDelay = `${Math.random() * 2}s`;
  
  rainContainer.appendChild(drop);
}