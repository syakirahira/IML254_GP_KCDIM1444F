
// scroll back to top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll",()=> {
if (window.pageYOffset > 100) {
toTop.classList.add("active");
} else {
toTop.classList.remove("active");
}
})

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}

// sidebar submenu open close js code
let cuisinesArrow = document.querySelector(".cuisines-arrow");
cuisinesArrow.onclick = function () {
  navLinks.classList.toggle("show1");
}
let moreMArrow = document.querySelector(".moreM-arrow");
moreMArrow.onclick = function () {
  navLinks.classList.toggle("show2");
}
let moreIArrow = document.querySelector(".moreI-arrow");
moreIArrow.onclick = function () {
  navLinks.classList.toggle("show3");
}
let moreCArrow = document.querySelector(".moreC-arrow");
moreCArrow.onclick = function () {
  navLinks.classList.toggle("show4");
}

// home
document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.feedback-carousel');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');

  nextButton.addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  prevButton.addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });
});


// FAQ
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      item.addEventListener('click', () => {
          item.classList.toggle('open');
      });
  });
});

// Send whatsapp for Book table
function sendWhatsAppMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var guests = document.getElementById("guests").value;
  var message = document.getElementById("message").value;

  // Construct the WhatsApp message
  var whatsappMessage = "Reservation Details:\n";
  whatsappMessage += "Name: " + name + "\n";
  whatsappMessage += "Email: " + email + "\n";
  whatsappMessage += "Phone: " + phone + "\n";
  whatsappMessage += "Date: " + date + "\n";
  whatsappMessage += "Time: " + time + "\n";
  whatsappMessage += "Number of Guests: " + guests + "\n";
  whatsappMessage += "Special Requests: " + message;

  // Create the WhatsApp chat link
  var whatsappLink = "https://api.whatsapp.com/send/?phone=60108706008" + "?text=" + encodeURIComponent(whatsappMessage);

  // Display the link for the user to click
  alert("Please click OK to open WhatsApp and send the message.");
  window.open(whatsappLink, "_blank");
}




