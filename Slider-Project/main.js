// Get Slider Items   | Array.form
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// get Number Of Slide
let numberOfSlids = sliderImages.length;

// Curent Index
let curentSlide = 1;

// number of Slider
let slideNumberElement = document.querySelector(".slider-number");

// previous and next
let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

// Handel click on previous and next
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// creat the main ul element
let paginationElement = document.createElement("ul");
//set Id on UL element
paginationElement.classList.add("pagination-ul");
// creat List items based on the array of slides
for (let i = 1; i <= numberOfSlids; i++) {
  // create li
  let paginationItems = document.createElement("li");
  //set custom atribute
  paginationItems.setAttribute("data-index", i);
  //set item content
  paginationItems.appendChild(document.createTextNode(i));
  // append item to UL
  paginationElement.appendChild(paginationItems);
}
//add UL to the (indecator) element
document.getElementById("indecators").appendChild(paginationElement);

// get the created UL
let paginationCreatedUL = document.getElementById("pagination-ul");

// get paginatin list Items
let paginationListItems = Array.from(
  document.querySelectorAll(".pagination-ul li")
);

// Change Current Slide by Bullites click
paginationListItems.forEach((e, index) => {
  e.onclick = () => {
    curentSlide = index + 1;
    checker();
  };
});

//Next slide functon
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    curentSlide++;
    checker();
  }
}
//previous slide functon
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    // Do Nothing
    return false;
  } else {
    curentSlide--;
    checker();
  }
}

//Create Checker Function
function checker() {
  // remove All active class
  removeAllActive();
  //set active and slide number
  setActiveSlide();

  //check if current slide is the frist
  if (curentSlide === 1) {
    // add disabled class on previous button
    prevButton.classList.add("disabled");
    nextButton.classList.remove("disabled");
  } else if (curentSlide === numberOfSlids) {
    // add disabled class on next button
    nextButton.classList.add("disabled");
    prevButton.classList.remove("disabled");
  } else {
    prevButton.classList.remove("disabled");
    nextButton.classList.remove("disabled");
  }
}

// Trigger checker function Frist Time
checker();

// remove All active class from paginaton bullets and images
function removeAllActive() {
  sliderImages.forEach((e) => {
    e.classList.remove("active");
  });
  paginationListItems.forEach((e) => {
    e.classList.remove("active");
  });
}

// Set Active And Slide Number

function setActiveSlide() {
  // set the slide number (Slide #1 of 6)
  slideNumberElement.textContent = `Slide #${curentSlide} of ${numberOfSlids}`;
  //set active class on current class
  sliderImages[curentSlide - 1].classList.add("active");
  //set active class on current pagination
  paginationListItems[curentSlide - 1].classList.add("active");
}
