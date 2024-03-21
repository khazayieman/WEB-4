let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});



/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});

$(document).ready(function(){
  $("form").submit(function(e){
      var email = $("#inlineFormInputGroupUsername2").val();
      if (email === "") {
          alert("Please enter your email.");
          e.preventDefault();
      }
  });
});


$(document).ready(function() {
  // Fade in the section content
  $(".section-3").addClass("visible");
});

$(document).ready(function() {
  $(window).scroll(function() {
      // Get the top and bottom positions of the section
      var sectionTop = $('.section-3').offset().top;
      var sectionBottom = sectionTop + $('.section-3').outerHeight();

      // Get the current scroll position and window height
      var scrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();

      // Check if the section is in the viewport
      if ((sectionBottom >= scrollPosition) && (sectionTop <= (scrollPosition + windowHeight))) {
          $('.section-3').addClass('visible');
      } else {
          $('.section-3').removeClass('visible');
      }
  });
});

$(document).ready(function() {
  // Select all price columns
  var priceCols = $(".price-col");

  // Loop through each price column
  priceCols.each(function(index) {
      // Set a delay for fading in each price column
      $(this).addClass('fade-in').css('animation-delay', 0.4 * index + 's'); // Add the fade-in class and set animation delay
  });
});

document.getElementById('1-month-plan').addEventListener('click', function() {
  // Redirect to the corresponding page
  window.location.href = "../src/1-month plan.html";
});

document.getElementById('2-year-plan').addEventListener('click', function() {
  // Redirect to the corresponding page
  window.location.href = "../src/2-year plan.html";
});

document.getElementById('1-year-plan').addEventListener('click', function() {
  // Redirect to the corresponding page
  window.location.href = "../src/1-year plan.html";
});

function alertPurchaseSuccess() {
  alert("Congratulations! Your purchase was successful.");
}

// Function to handle unsuccessful purchase alert
function alertPurchaseUnsuccessful() {
  alert("Please fill in all required fields.");
}

// Function to handle purchase process
function handlePurchase(event) {
  // Prevent the form from submitting
  event.preventDefault();
  
  // Check if all required fields are filled
  const form = document.getElementById("purchaseForm");
  if (form.checkValidity()) {
      // If all required fields are filled, show alert
      alertPurchaseSuccess();
  } else {
      // If any required field is blank, show alert
      alertPurchaseUnsuccessful();
  }
}

document.getElementById("purchaseForm").addEventListener("submit", handlePurchase);


function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var feedback = document.getElementById("feedback").value;
  var confirmationMessage = "Please review your feedback:\n\n" +
    "Name: " + name + "\n" +
    "Email: " + email + "\n" +
    "Feedback: " + feedback + "\n\n" +
    "Do you want to submit?";

  if (confirm(confirmationMessage)) {
    alert("Feedback submitted successfully!");
    document.getElementById("feedbackForm").reset(); 
  }
}