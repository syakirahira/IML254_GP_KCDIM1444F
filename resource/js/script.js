function sendWhatsAppMessage() {
  // Retrieve form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const guests = document.getElementById("guests").value;
  const message = document.getElementById("message").value;

  // Construct the WhatsApp message
  const whatsappMessage = `Reservation Details:
Name: ${name}
Email: ${email}
Phone: ${phone}
Date: ${date}
Time: ${time}
Number of Guests: ${guests}
Special Requests: ${message}`;

  // Encode the message
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // Create the WhatsApp chat link
  const whatsappLink = `https://api.whatsapp.com/send?phone=60108706008&text=${encodedMessage}`;

  // Log the link to the console for debugging
  console.log(whatsappLink);

  // Alert the user and open the WhatsApp link
  alert("Please click OK to open WhatsApp and send the message.");
  window.open(whatsappLink, "_blank");
}

// Function to test encoding separately
function testEncoding() {
  const testMessage = "Reservation Details:\nName: Test\nEmail: test@test.com\nPhone: 0123456789\nDate: 2024-07-06\nTime: 13:17\nNumber of Guests: 2\nSpecial Requests: None";
  const encodedTestMessage = encodeURIComponent(testMessage);
  console.log(`Encoded message: ${encodedTestMessage}`);
  const testLink = `https://api.whatsapp.com/send?phone=60108706008&text=${encodedTestMessage}`;
  console.log(`Test link: ${testLink}`);
}

// Run the encoding test
testEncoding();
