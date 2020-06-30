function scrollAppear() {
  const images = document.querySelectorAll(".frame,.img-appear, .img-caption");

  for (let i = 0; i < images.length; i++) {
    const scrollPosition = images[i].getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    scrollPosition < screenPosition
      ? images[i].classList.add("appear")
      : images[i].classList.remove("appear");
  }
}

window.addEventListener("scroll", scrollAppear);

// review part
const reviews = [
  {
    name: "Sarah Yang",
    job: "International Model",
    text:
      "Necessitatibus, vitae ipsa? Ab, placeat? Placeat ad quasi, sunt hic praesentium suscipit excepturi necessitatibus qui facere iste illum assumenda in quos esse!",
    imgUrl: "images/review-img-1.png",
  },
  {
    name: "Josh Robertson",
    job: "UX Desigener",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae vel eaque quia cupiditate veniam a iusto? Harum debitis et eligendi. Omnis dicta fuga repellat ratione recusandae itaque sed autem nobis.",
    imgUrl: "images/review-img-2.png",
  },
  {
    name: "Park Sung Hoon",
    job: "Lecture",
    text:
      "Quos, veniam aspernatur facere nesciunt sint unde cupiditate porro! Nisi esse perferendis dolore. Commodi, atque doloremque assumenda dolor in debitis. Incidunt commodi magni laboriosam esse at, fugiat soluta quia odio officia alias optio porro illo rerum. Aut ipsum sit nobis delectus! Fugit, nulla.",
    imgUrl: "images/review-img-3.png",
  },
];

const reviewImg = document.querySelector("#person-img");
const name = document.querySelector("#name");
const job = document.querySelector("#job");
const text = document.querySelector("#text");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let index = 0;
nextBtn.addEventListener("click", function () {
  index++;
  if (index > reviews.length - 1) {
    index = 0;
  }
  if (!reviewImg.classList.contains("animation")) {
    reviewImg.classList.add("animation");
    setTimeout(function () {
      reviewImg.classList.remove("animation");
    }, 500);
  }
  showReview(index);
});

prevBtn.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = reviews.length - 1;
  }
  showReview(index);
});

function showReview(number) {
  const item = reviews[number];
  reviewImg.src = item.imgUrl;

  name.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}

const navbar = document.querySelector("nav");
const navbarHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight);
