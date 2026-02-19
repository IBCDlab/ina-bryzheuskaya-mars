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

const skills = ["HTML", "CSS", "JavaScript", "Git", "GitHub"];

const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}

// Leave a Message

const messagesForm = document.querySelector("form[name='leave_message']");
messagesForm.addEventListener('submit', function(event) {
event.preventDefault();
  const userName = event.target.userName.value;
  const userEmail = event.target.userEmail.value;
  const userMessage = event.target.userMessage.value;

  console.log(userName, userEmail, userMessage);

  const messageSection = document.querySelector("#Messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement('li');
  const userNameLink = document.createElement('a');
  userNameLink.innerText = userName;
  userNameLink.href = `mailto: ${userEmail}`;
  const userMessageText = document.createElement('span');
  userMessageText.innerText = userMessage;
newMessage.appendChild(userNameLink);
newMessage.appendChild(userMessageText);

//new button

const removeButton = document.createElement('button');
removeButton.innerText = 'remove';
removeButton.type = 'button';
removeButton.addEventListener('click', function() {
  const entry = removeButton.parentNode;
  entry.remove();
  })
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messagesForm.reset();
})
