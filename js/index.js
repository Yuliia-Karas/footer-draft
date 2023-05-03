// import "./io";

const callback = entries => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
      console.log("Hello, world!");
      console.log(entry);
    };
  });
};

const options = {
  rootMargin: '200px',
};
const observer = new IntersectionObserver(callback, options);

const sentinel = document.querySelector("#sentinel");
observer.observe(sentinel);
