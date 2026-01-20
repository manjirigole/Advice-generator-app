document.addEventListener("DOMContentLoaded", () => {
  const diceBtn = document.querySelector(".dice-btn");
  const adviceCount = document.querySelector(".advice-count");
  const adviceText = document.querySelector(".advice");

  diceBtn.addEventListener("click", (e) => {
    e.preventDefault();

    async function fetchAdvice(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        const data = await response.json();
        adviceCount.textContent = `#${data.slip.id}`;
        adviceText.textContent = `"${data.slip.advice}"`;
        console.log(data);
      } catch (error) {
        console.error("fetch error", error.message);
      }
    }

    fetchAdvice("https://api.adviceslip.com/advice");
  });
});
