// Footer

const footer = document.createElement("footer");
document.body.appendChild(footer);

// Current date

const today = new Date();

// Current yera

const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerText = `© Ina Bryzheuskaya ${thisYear}`;
footer.appendChild(copyright);

// Skills

const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
