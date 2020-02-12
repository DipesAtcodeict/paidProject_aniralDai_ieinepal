// Navbar Code
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

//scroll code
let aboutUsBtn = document.getElementById('aboutUs-btn');
let contactUsBtn = document.getElementById('contactUs-btn');

scrollAndGoToDiv = targetDiv => {
  let scrollToDiv = document.querySelector(`.${targetDiv}`);
  let coords = scrollToDiv.getBoundingClientRect();
  window.scrollTo({
    top: coords.y + 10,
    left: coords.x + 10,
    behavior: 'smooth'
  });
};

aboutUsBtn.addEventListener('click', () => {
  scrollAndGoToDiv('aboutUs');
});

contactUsBtn.addEventListener('click', () => {
  scrollAndGoToDiv('contactUs');
});

//Sending Email
const emailForm = document.querySelector('.emailForm');

emailForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.querySelector('.name').value;
  const email = document.querySelector('.email').value;
  const contact = document.querySelector('.contact').value;
  const message = document.querySelector('.message').value;
  console.log(name);

  if (name && email && contact && message) {
    window.open(
      `mailto:ieinepal98@gmail.com?subject=queryFromWebsite&body=Sender Name: ${name} Sender Email: ${email}
      Sender Message:${message}`
    );
  } else {
    alert('Please provide all the information correctly');
  }
});
