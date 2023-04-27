const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user__image');
const username = document.querySelector('.user__name');
const userRole = document.querySelector('.user__role');
const indicators = document.querySelector(".current-user");
const currentUser = document.querySelector(".current");
const total = document.querySelector(".total");
const quotes = document.querySelector(".quotes");
const currentSecond = document.querySelector(".current-second");
let index = 1;
let second = 0;

// Users data
const userTestimonials = [
  {
    name: 'Mihelle Heartland',
    position: 'Web Developer',
    photo: 'img/woman-1.jpg',
    text:
      "I've worked with hundreds of Front-end developers and I have to say the top spot goes to those people. Those are amazing developers. They stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. A real masterpiece work.",
  },
  {
    name: 'Kethlyn Watanaby',
    position: 'Software Engineer',
    photo: 'img/woman-2.jpg',
    text:
      'This person is an amazing Front-end developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I hope to work again with him!',
  },
  {
    name: 'Kyda Viskansen',
    position: 'Data Scientist',
    photo: 'img/woman-3.jpg',
    text:
      "They are hard workers. Communication was also very good with them and they were very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with them.",
  },
  {
    name: 'Renee Silverstone',
    position: 'Accountant',
    photo: 'img/woman-4.jpg',
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: 'Jonathan Nickman',
    position: 'Graphic Designer',
    photo: 'img/man-1.jpg',
    text:
      "I had my concerns that due to a tight deadline this project can't be done. But they proved me wrong not only they delivered an outstanding work but they managed to deliver 1 day prior to the deadline. And when I asked for some revisions they made them in minutes. I'm looking forward to work with them again and I totally recommend them.",
  },
  {
    name: 'Karin Hoyshi',
    position: 'Data Analyst',
    photo: 'img/woman-5.jpg',
    text:
      'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been blessed to work with him!',
  },
  {
    name: 'Walter Spranen',
    position: 'Director',
    photo: 'img/man-2.jpg',
    text:
      'This team has talented IT professionals, proactive and responsible, with a strong work ethic. It is very strong in PSD2 to HTML conversions and HTML/CSS/JavaScript technology. All collaborators are quick learners, eager to learn new technologies. They are focused and have the good dynamics to achieve due dates and outstanding results.',
  },
]

// Update the seconds
const updateSeconds = () => {
  second++;
  
  currentSecond.innerHTML = `${second}s`;

  if(second > userTestimonials.length - 1) second = -1;
}

// Initial loading
const loadPage = () => {
  testimonial.innerHTML = userTestimonials[0].text;
  userImage.src = userTestimonials[0].photo;
  username.innerHTML = userTestimonials[0].name;
  userRole.innerHTML = userTestimonials[0].position;

  currentUser.innerHTML = index;
  total.innerHTML = userTestimonials.length;

  currentSecond.innerHTML = `${second}s`;

  setInterval(updateSeconds, 1000);
}
loadPage();

// Change testimonial every 8 seconds
const changeTestimonial = () => {
  const {text, photo, name, position} = userTestimonials[index];  
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  userRole.innerHTML = position;

  // Change opacity of all elements 
  const users = [testimonial, userImage, username, userRole, indicators, quotes];
  users.forEach((item) => item.classList.add("change-user"));
  userImage.classList.add("rotate-image");

  setTimeout(() => {
    users.forEach((item) => item.classList.remove("change-user"));
    userImage.classList.remove("rotate-image");
  }, 1600);

  currentUser.innerHTML = index + 1;

  index++;

  if(index > userTestimonials.length - 1) index = 0;
}
setInterval(changeTestimonial, 8000);