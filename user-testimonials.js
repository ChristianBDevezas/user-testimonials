const userText = document.querySelector('.testimonial');
const userImage = document.querySelector('.user__image');
const username = document.querySelector('.user__name');
const userRole = document.querySelector('.user__role');
const indicators = document.querySelector(".current-user");

// Users Data
const userData = [
  {
    name: 'Michelle Heartland',
    role: 'Web Developer',
    image: './img/woman-1.jpg',
    testimonial: "I've worked with hundreds of Front-end developers and I have to say the top spot goes to those people. Those are amazing developers. They stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. A real masterpiece work.",
  },
  {
    name: 'Kethlyn Watanaby',
    role: 'Software Engineer',
    image: './img/woman-2.jpg',
    testimonial: 'This person is an amazing Software Engineer that delivered the task exactly how we need it, do your self a favor and hire her, you will not be disappointed by the work delivered. She will go the extra mile to make sure that you are happy with your project. I hope to work again with her!',
  },
  {
    name: 'Kyda Viskansen',
    role: 'Data Scientist',
    image: './img/woman-3.jpg',
    testimonial: "They are hard workers. Communication was also very good with them and they were very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with them.",
  },
  {
    name: 'Renee Silverstone',
    role: 'Accountant',
    image: './img/woman-4.jpg',
    testimonial: "She does everything she can to get the job done and done right. This is the second time I've hired her, and I'll hire her again in the future.",
  },
  {
    name: 'Jonathan Nickman',
    role: 'Graphic Designer',
    image: './img/man-1.jpg',
    testimonial: "I had my concerns that due to a tight deadline this project can't be done. But they proved me wrong not only they delivered an outstanding work but they managed to deliver 1 day prior to the deadline. And when I asked for some revisions they made them in minutes. I'm looking forward to work with them again and I totally recommend them.",
  },
  {
    name: 'Karin Hoyshi',
    role: 'Data Analyst',
    image: './img/woman-5.jpg',
    testimonial: 'This is a top notch designer and Data Analyst. She communicates well, works fast and produces quality work. We have been blessed to work with her!',
  },
  {
    name: 'Walter Spranen',
    role: 'Director',
    image: './img/man-2.jpg',
    testimonial: 'This team has talented IT professionals, proactive and responsible, with a strong work ethic. It is very strong in PSD2 to HTML conversions and HTML/CSS/JavaScript technology. All collaborators are quick learners, eager to learn new technologies. They are focused and have the good dynamics to achieve due dates and outstanding results.',
  },
]

const currentUser = document.querySelector(".current");
const total = document.querySelector(".total");
const quotes = document.querySelector(".quotes");
const currentSecond = document.querySelector(".current-second");
let index = 1;
let second = 0;

// Update the seconds
const updateSeconds = () => {
  second++;  
  currentSecond.innerHTML = `${second}s`;
  if(second > userData.length - 1) second = -1;
}

// Initial loading
const loadPage = () => {
  // Grab the first item in the userData array
  userText.innerHTML = userData[0].testimonial;
  userImage.src = userData[0].image;
  username.innerHTML = userData[0].name;
  userRole.innerHTML = userData[0].role;

  // Display indicators and the current second
  currentUser.innerHTML = index;
  total.innerHTML = userData.length;
  currentSecond.innerHTML = `${second}s`;

  setInterval(updateSeconds, 1000);
}
loadPage();

// Change testimonial every 8 seconds
const changeTestimonial = () => {
  const {testimonial, image, name, role} = userData[index];  
  userText.innerHTML = testimonial;
  userImage.src = image;
  username.innerHTML = name;
  userRole.innerHTML = role;

  // Change opacity of all elements 
  const users = [userText, userImage, username, userRole, indicators, quotes];
  users.forEach((item) => item.classList.add("change-user"));
  userImage.classList.add("rotate-image");

  setTimeout(() => {
    users.forEach((item) => item.classList.remove("change-user"));
    userImage.classList.remove("rotate-image");
  }, 1600);

  currentUser.innerHTML = index + 1;

  // Update index by 1 and check if it's greather than the userData length
  index++;
  if(index > userData.length - 1) index = 0;
}
setInterval(changeTestimonial, 8000);