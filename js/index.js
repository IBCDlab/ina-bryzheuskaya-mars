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
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const messageSection = document.querySelector("#Messages");
  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement('li');
  const usersNameLink = document.createElement('a');
  usersNameLink.innerText = usersName;
  usersNameLink.href = `mailto: ${usersEmail}`;
  const usersMessageText = document.createElement('span');
  usersMessageText.innerText = usersMessage;
newMessage.appendChild(usersNameLink);
newMessage.appendChild(usersMessageText);

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
