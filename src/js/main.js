// -------------- BACK TO TOP -------------------
// Get the button:
let toTopBtn = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  scrollFunctionNav();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    toTopBtn.classList.remove("hidden");
  } else {
    toTopBtn.classList.add("hidden");
  }
}

// When the user clicks on the button, scroll to the top of the document
toTopBtn.addEventListener("click", function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// -------------- NAVIGATION -------------------

let header = document.getElementsByTagName("header")[0];

function scrollFunctionNav() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    header.classList.add("bg-white");
    header.classList.replace("py-[65px]", "py-[36px]");
  } else {
    header.classList.remove("bg-white");
    header.classList.replace("py-[36px]", "py-[65px]");
  }
}
// -------------- SLICK -------------------

$(".services-items").slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
});

$(".slick__text").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  fade: true,
});

// -------------- TYPING TEXT -------------------
