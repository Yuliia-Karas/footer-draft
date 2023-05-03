
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log('Hello, world!');
    console.log(entry);
  });
});

const sentinel = document.querySelector("#sentinel");
observer.observe(sentinel);
