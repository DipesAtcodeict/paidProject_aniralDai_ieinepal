// Navbar Code
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active');
});

//scroll code
let aboutUsBtn = document.getElementById('aboutUs-btn');
let contactUsBtn = document.getElementById('contactUs-btn');
let productsBtn = document.getElementById('products-btn');
let productsBtn2 = document.getElementById('products-btn2');

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

productsBtn.addEventListener('click', () => {
  scrollAndGoToDiv('ourProducts');
});

productsBtn2.addEventListener('click', () => {
  scrollAndGoToDiv('ourProducts');
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

// caraousel/slider code
const rightBtnImg = document.querySelector('.rightImg');
const backBtnImg = document.querySelector('.backImg');
const captionText = document.querySelector('.caption');
const carousel = document.querySelector('.carousel');
const replay = document.querySelector('.replay');

const carouselData = [
  {
    imgUrl: 'assets/products/airpollution.jpg',
    caption:
      'An air pollution control system for industrial purpose prepared through cross ventilation system helps to save the environment by reducing polluted air which comes out of industry. One of this system was installed for Chaudhary Group.'
  },
  {
    imgUrl: 'assets/products/effluentTreatmentPlant.jpg',
    caption:
      'ETP is a process design for treating the industrial waste water for its reuse or safe disposal to the environment.'
  },
  {
    imgUrl: 'assets/products/crushers.jpg',
    caption: 'Crushers'
  },
  {
    imgUrl: 'assets/products/tram.jpg',
    caption:
      'Each tram is custom-made to match the architecture and aesthetics of the property and is equipped with safety systems of the highest quality.'
  },
  {
    imgUrl: 'assets/products/wasteIncinerator.jpg',
    caption: 'Waste Incinerator.'
  },
  {
    imgUrl: 'assets/products/trust.jpg',
    caption: 'Metal Frame Truss.'
  },
  {
    imgUrl: 'assets/products/industrialWaterTreatmentPlant.JPG',
    caption: 'Industrial Water Treatment.'
  },
  {
    imgUrl: 'assets/products/saunaMachine.jpg',
    caption: 'Sauna Machine.'
  },
  {
    imgUrl: 'assets/products/elevators.jpg',
    caption: 'Customized Elevetors.'
  },
  {
    imgUrl: 'assets/products/cableCarGondola.jpg',
    caption: 'Cable Car Gondola.'
  },
  {
    imgUrl: 'assets/products/washingMachine.jpg',
    caption: 'Washing Machine'
  },
  {
    imgUrl: 'assets/products/woodFiredThreePassDryer.JPG',
    caption: 'Wood Fired Three Pass Dryer.'
  },
  {
    imgUrl: 'assets/products/trolleys.jpg',
    caption: 'Trolleys'
  },
  {
    imgUrl: 'assets/products/woodFiredVerticalTubeBoiler.JPG',
    caption: 'Wood Fired Vertical Tube Boiler.'
  }
];

//counter variable
let i = 0;

//code to change backgroundImage
const changeBackgroundImageAndCaption = (imgUrl, caption) => {
  carousel.style.backgroundImage = `url(${imgUrl})`;
  captionText.innerText = caption;
};

//function to make code wait synchronously
const wait = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

//code to start slider
const startSlider = async () => {
  if (i == carouselData.length + 2) {
    return;
  }
  for (i = 0; i < carouselData.length; i++) {
    changeBackgroundImageAndCaption(
      carouselData[i].imgUrl,
      carouselData[i].caption
    );
    if (i == carouselData.length - 1) {
      i = -1;
    }
    await wait(4000);
  }
};

//forward image
let k = 0;
rightBtnImg.addEventListener('click', () => {
  if (k == carouselData.length) {
    k = 0;
  }
  i = carouselData.length + 2;
  changeBackgroundImageAndCaption(
    carouselData[k].imgUrl,
    carouselData[k].caption
  );
  k++;
});

//backward image
let j = carouselData.length - 1;
backBtnImg.addEventListener('click', () => {
  if (j < 0) {
    j = carouselData.length - 1;
  }
  changeBackgroundImageAndCaption(
    carouselData[j].imgUrl,
    carouselData[j].caption
  );
  j--;
});

//replay
replay.addEventListener('click', () => {
  location.reload();
});

startSlider();
