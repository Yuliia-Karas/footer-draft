// import "./io";

// import './io';
// const callback = (entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log("Hello, world!");
//       console.log(entry);
//     }
//   });
// };

// const options = {
//   rootMargin: "200px",
// };
// const observer = new IntersectionObserver(callback, options);

// const sentinel = document.querySelector("#sentinel");
// observer.observe(sentinel);

// /Стрілка/ 
// const scrollToTop = document.querySelector(".scroll-to-top");

// window.addEventListener("scroll", () => {
//   if (window.pageYOffset > 100) {
//     scrollToTop.style.display = "block";
//   } else {
//     scrollToTop.style.display = "none";
//   }
// });

// або
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollToTopBtn").style.display = "none";
  }
}

document
  .getElementById("scrollToTopBtn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });