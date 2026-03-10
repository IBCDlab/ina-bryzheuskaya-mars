// Footer
// Create a footer element and add it to the bottom of the page

const footer = document.createElement("footer");
document.body.appendChild(footer);

// Current date
// Get today's date from the browser

const today = new Date();

// Current year
// Extract the current year and display it in the footer

const thisYear = today.getFullYear();
const copyright = document.createElement("p");
copyright.innerText = `© Ina Bryzheuskaya ${thisYear}`;
footer.appendChild(copyright);

// Skills
// Create a list of skills and add them dynamically to the Skills section

const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub", "VS Code"];

const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

// Loop through the skills array and create list items

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// Leave a Message
// Handle form submission and display the message on the page

const messagesForm = document.querySelector("form[name='leave_message']");

messagesForm.addEventListener("submit", function (event) {
  event.preventDefault();// prevent page reload after form submission

// Get values from the form inputs
  const userName = event.target.userName.value;
  const userEmail = event.target.userEmail.value;
  const userMessage = event.target.userMessage.value;

// Find the Messages section and its list
  const messageSection = document.querySelector("#Messages");
  const messageList = messageSection.querySelector("ul");

// Create a new message list item
  const newMessage = document.createElement("li");

// Create a link with the user's email
  const userNameLink = document.createElement("a");
  userNameLink.innerText = userName;
  userNameLink.href = `mailto:${userEmail}`;

// Create a span element for the message text
  const userMessageText = document.createElement("span");
  userMessageText.innerText = userMessage;

  newMessage.appendChild(userNameLink);
  newMessage.appendChild(userMessageText);

//Add remove button
// Create a button that allows the message to be removed
  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messagesForm.reset();// Clear the form after submission
});

// GitHub Projects
// Fetch repositories from the GitHub API and display them in the Projects section
fetch("https://api.github.com/users/IBCDlab/repos")
  .then(function (response) {
    //Get the response and check for error
    if (!response.ok) {
      throw new Error("Request failed");
    }
    return response.json();
  })

  .then(function (data) {
    const repositories = data;//save json data

    const projectSection = document.querySelector("#Projects");
    const projectList = projectSection.querySelector("ul");

    //loop through each repository and create li
    for (let i = 0; i < repositories.length; i++) {
      const li = document.createElement("li");
      const project = document.createElement("a");

      // Create a link to the GitHub repository
      project.href = repositories[i].html_url;
      project.target = "_blank";
      project.textContent = repositories[i].name;
      li.appendChild(project);
      projectList.appendChild(li);
    }
  })

  // error if fetch  request fails.
  .catch(function (error) {
    console.log("Something went wrong:", error);
  });

// Dark Mode Toggle
// Toggle the dark theme class on the body when the button is clicked

  const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});
