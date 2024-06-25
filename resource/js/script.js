// Scroll back to top
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
  toTop.classList.toggle("active", window.pageYOffset > 100);
});

// Sidebar open/close
const navLinks = document.querySelector(".nav-links");
const menuOpenBtn = document.querySelector(".navbar .bx-menu");
const menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.addEventListener("click", () => {
  navLinks.style.left = "0";
});
menuCloseBtn.addEventListener("click", () => {
  navLinks.style.left = "-100%";
});

// Sidebar submenu open/close
document.querySelectorAll(".submenu-arrow").forEach(arrow => {
  arrow.addEventListener("click", () => {
    navLinks.classList.toggle("show", arrow.classList.contains("show"));
  });
});

// Carousel
document.addEventListener("DOMContentLoaded", function() {
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
document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    item.addEventListener("click", () => {
      item.classList.toggle("open");
    });
  });
});

// Send WhatsApp message
function sendWhatsAppMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;
  const message = document.getElementById("message").value;

  // Validate input
  if (!name || !email || !phone || !date || !time || !guests) {
    alert("Please fill in all required fields.");
    return;
  }

  // Construct WhatsApp message
  const whatsappMessage = `Reservation Details:
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Date: ${date}
    Time: ${time}
    Number of Guests: ${guests}
    Special Requests: ${message}`;

  // Create WhatsApp chat link
  const whatsappLink = `https://wa.me/60108706008?text=${encodeURIComponent(whatsappMessage)}`;

  // Log the link for debugging
  console.log("Generated WhatsApp Link:", whatsappLink);

  // Display the link for the user to click
  alert("Please click OK to open WhatsApp and send the message.");

  // Delay opening the link
  setTimeout(() => {
    window.open(whatsappLink, "_blank");
  }, 4000);
}
