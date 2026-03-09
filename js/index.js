// Footer

const footer = document.createElement("footer");
document.body.appendChild(footer);

// Current date

const today = new Date();

// Current year

const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerText = `© Ina Bryzheuskaya ${thisYear}`;
footer.appendChild(copyright);

// Skills

const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "VS Code"];

const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// Leave a Message

const messagesForm = document.querySelector("form[name='leave_message']");
messagesForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const userName = event.target.userName.value;
  const userEmail = event.target.userEmail.value;
  const userMessage = event.target.userMessage.value;

  console.log(userName, userEmail, userMessage);

  const messageSection = document.querySelector("#Messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");
  const userNameLink = document.createElement("a");
  userNameLink.innerText = userName;
  userNameLink.href = `mailto: ${userEmail}`;
  const userMessageText = document.createElement("span");
  userMessageText.innerText = userMessage;
  newMessage.appendChild(userNameLink);
  newMessage.appendChild(userMessageText);

  //add remove button

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messagesForm.reset();
});

// Fetch. Get the repositories from github

fetch("https://api.github.com/users/IBCDlab/repos")
  .then(function (response) {
    //get the response and check for error
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })

  .then(function (data) {
    //save ison data
    const repositories = data;
    console.log(repositories);

    const projectSection = document.querySelector("#Projects");
    const projectList = projectSection.querySelector("ul");

    //loop through each repository and create li
    for (let i = 0; i < repositories.length; i++) {
      const li = document.createElement("li");
      const project = document.createElement("a");

      project.href = repositories[i].html_url;
      project.target = "_blank";
      project.textContent = repositories[i].name;
      li.appendChild(project);
      projectList.appendChild(li);
    }
  })

  // error if fetch fails.
  .catch(function (error) {
    console.log("Something went wrong:", error);
  });
