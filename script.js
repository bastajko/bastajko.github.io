//@ts-check

calculateYearsOfExperience();

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu) {
    menu.classList.toggle("open");
  } else {
    showErrorToast("Menu not found. Please contact support.");
    console.error("Menu element was null. Possibly missing from the DOM.");
  }
  icon?.classList.toggle("open") ?? console.log("Icon not found");
}

function calculateYearsOfExperience() {
  const startDate = new Date("2020-03-16");
  const currentDate = new Date();

  const diffInMs = currentDate.getTime() - startDate.getTime();

  const msInYear = 365.25 * 24 * 60 * 60 * 1000;
  const years = Math.floor(diffInMs / msInYear);

  const paragraph = document.getElementById("years_of_experience");
  if (!paragraph) {
    showErrorToast(
      "Paragraph element with ID 'years_of_experience' not found."
    );
    console.error("Paragraph element with ID 'years_of_experience' not found.");
    return;
  }
  paragraph.innerHTML = `${years}` + paragraph.innerHTML;
}

function showErrorToast(message) {
  Toastify({
    text: `❌ ${message}`,
    duration: 4000,
    gravity: "top",
    position: "right",
    style: {
      background: "linear-gradient(to right, #ff416c, #ff4b2b)",
      color: "#fff",
      fontWeight: "500",
      borderRadius: "6px",
      padding: "10px 20px",
    },
  }).showToast();
}
