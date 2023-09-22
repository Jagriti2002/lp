// ========== Scroll Reveal ========== //
const revealElements = document.querySelectorAll("[data-reveal]");
const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}
window.addEventListener("scroll", revealElementOnScroll);
window.addEventListener("load", revealElementOnScroll);

$(".tilt-image").tilt({
	glare: true,
	maxGlare: 0.5,
	speed: 1000,
	maxTilt: 5,
	scale: 1.05,
	perspective: 800
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//email


function sendMail() {
  // Prevent the form from submitting
  event.preventDefault();
  // Get the selected options from the language select tag
  var selectedOptions = Array.from(document.getElementById('course').selectedOptions);
  var languageValues = selectedOptions.map(option => option.value);
  // Get the form values
  var templateParams = {
    language: languageValues.join(', '), // Convert the array to a comma-separated string
    fname: document.getElementById('fname').value,
    lname: document.getElementById('lname').value,
    email: document.getElementById('email').value,
    number: document.getElementById('number').value,
    course: document.getElementById('course').value,
  };
  // Display the alert box
  Swal.fire({
    title: 'Success',
    text: 'Form submitted successfully!',
    icon: 'success',
    background: '#ffffff',
    customClass: {
      title: 'text-success',
      content: 'text-success',
      confirmButton: 'btn btn-success'
    },
    showCloseButton: true,
    timer: 5000,
  });
  // Close the alert box when clicking outside of it
  document.body.addEventListener('click', function(event) {
    if (!alertBox.contains(event.target)) {
      Swal.close();
    }
  });
  // Send the email using EmailJS
  emailjs.send('service_s0iioyv', 'template_010y82m', templateParams)
    .then(function(response) {
      console.log('Email sent successfully!', response.status, response.text);
      // Reset the form after sending
      document.getElementById('fname').value = '';
      document.getElementById('lname').value = '';
      document.getElementById('email').value = '';
      document.getElementById('number').value = '';
      document.getElementById('course').value = '';
    })
    .catch(function(error) {
      console.log('Email sending failed:', error);
    });
}