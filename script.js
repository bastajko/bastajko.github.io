calculateYearsOfExperience();

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function calculateYearsOfExperience() {
  const startDate = new Date("2020-03-16");
  const currentDate = new Date();

  const diffInMs = currentDate - startDate;

  const msInYear = 365.25 * 24 * 60 * 60 * 1000;
  const years = Math.floor(diffInMs / msInYear);

  const paragraph = document.getElementById('years_of_experience');
  paragraph.innerHTML = `${years}` + paragraph.innerHTML;
}