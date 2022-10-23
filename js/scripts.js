//---> HAPPY STORIES SECTION
$(".testimonials").slick({
  autoplay: true,
  autoplaySpeed: 10000,
});

//---> BUTTON ON SCROLL
//Get the button:
mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

jQuery(document).ready(function ($) {
  $(".fa-bars").click(function () {
    $("nav").addClass("show");
  });

  $(".fa-xmark").click(function () {
    $("nav").removeClass("show");
  });

  $("a").click(function () {
    $("nav").removeClass("show");
  });
});

//---> GALLERY CATS - TEXT OVER IMAGES
/*Text over image when clicked*/
var textOverImages = document.getElementsByClassName("onClickTextOverImage");
var previousTextOverImage;

for (var i = 0; i < textOverImages.length; i++) {
  textOverImages[i].onclick = function () {
    var classes = this.classList;
    if (classes.contains("show")) {
      classes.remove("show");
    } else {
      if (previousTextOverImage != null)
        previousTextOverImage.classList.remove("show");
      previousTextOverImage = this;
      classes.add("show");
    }
  };
}

function stopPropagation(event) {
  event.stopPropagation();
}

//---> BUTTOM REQUEST CAT FOR ADOPTION
//USE OF AN ARRAY

function adopt() {
  //get user input
  userName = prompt("What is your name?");
  userPhone = prompt("What is your phone number?");
  userCatsNo = prompt("How many cats would you like to adopt?");

  //Validate prompt to avoid accepting null values
  if (
    userName == null ||
    userName.length == 0 ||
    /^\s+$/.test(userName) ||
    userPhone == null ||
    userPhone.length == 0 ||
    /^\s+$/.test(userPhone) ||
    userCatsNo == null ||
    userCatsNo.length == 0 ||
    /^\s+$/.test(userCatsNo)
  ) {
    alert("Please, answer all questions.");
  } else {
    //alert("Questions answered properly")
    var userChoice = []; //Declare array
    var size = userCatsNo; // Array size

    for (var i = 0; i < size; i++) {
      userChoice[i] = prompt(
        "Enter name of the cat no " + (i + 1) + " you wish to adopt "
      );
    }

    console.log(userChoice); //Print the array in the console
    window.alert(
      userName +
        ", thank you! We will contact you on " +
        userPhone +
        " about the adoption of: " +
        userChoice +
        " shortly :)"
    ); //show msg to user
    hide();
  }
}

//hide function to hide button after request
function hide() {
  document.getElementById("button").style.display = "none";
}

//---> BUTTON DONATE
function donate() {
  let name = prompt("What is your name?");
  let phone = prompt("What is your phone number?");
  let age = prompt("How old are you?");
  if (
    name !== null &&
    name !== "" &&
    name !== undefined &&
    phone !== null &&
    phone !== "" &&
    phone !== undefined &&
    age !== null &&
    age !== "" &&
    age !== undefined
  ) {
    if (age >= 18) {
      alert(
        "Thank you, " +
          name +
          " 🌺 We'll call you shortly at " +
          phone +
          " to discuss your donation!"
      );
    } else {
      alert("Sorry, " + name + " you cannot donate. Minimum age is 18.");
    }
  } else {
    alert("Please, try to type some text. ");
  }
}

let donateButton = document.querySelector(".donate-button");
donateButton.addEventListener("click", donate);





//---> CONTACT SECTION - FORM

const form = document.getElementById("formId");
const inputs = document.querySelectorAll("#formId input");

const expresions = {
  name: /^[ a-zA-Z\-\’]+$/, // Letters and it can contain spaces.
  email: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  phone: /^\d{7,14}$/, // 7 to 14 numbers.
  message: /^[ a-zA-Z\-\’]+$/, // Letters and it can contain spaces.
};

const areas = {
  name: false,
  email: false,
  phone: false,
  message: false,
};

const validateForm = (e) => {
  /*console.log("executed");-----check is working*/
  /*console.log(e.target.name);-----check is working*/
  switch (e.target.name) {
    case "name":
      /* console.log("name works!");-----check is working*/
      validateArea(expresions.name, e.target, "name");
      break;
    case "email":
      /*  console.log("email works!");-----check is working*/
      validateArea(expresions.email, e.target, "email");
      break;
    case "phone":
      /*  console.log("phone works!");-----check is working*/
      validateArea(expresions.phone, e.target, "phone");
      break;
    case "message":
      /*  console.log("msg works!");-----check is working*/
      validateArea(expresions.message, e.target, "message");
      break;
  }
};

/*Create function that will be re-used above */
const validateArea = (expresion, input, area) => {
  /*area is the value for all groups:name, email, phone, msg  */
  if (expresion.test(input.value)) {
    /*if everything is correct, what is inside -if- will be executed*/
    document
      .getElementById(`group__${area}`)
      .classList.remove("form__group-wrong");
    document
      .getElementById(`group__${area}`)
      .classList.add("form__group-right");
    document
      .querySelector(`#group__${area} i`)
      .classList.add(
        "fa-circle-check"
      ); /*add another icon where typing is correct */
    document
      .querySelector(`#group__${area} i`)
      .classList.remove("fa-circle-xmark"); /*remove xmark icon */
    document
      .querySelector(`#group__${area} .form__input-error`)
      .classList.remove("form__input-error-active");
    areas[area] = true;
  } else {
    document
      .getElementById(`group__${area}`)
      .classList.add("form__group-wrong");
    document
      .getElementById(`group__${area}`)
      .classList.remove("form__group-right");
    document
      .querySelector(`#group__${area} i`)
      .classList.add("fa-circle-xmark"); /*add xmark icon */
    document
      .querySelector(`#group__${area} i`)
      .classList.remove("fa-circle-check"); /*remove check icon */
    document
      .querySelector(
        `#group__${area} .form__input-error`
      ) /* Show message to specify user what should be written */
      .classList.add("form__input-error-active");
    areas[area] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validateForm);
  input.addEventListener("blur", validateForm);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  /*check all form areas are filled*/
  const terms = document.getElementById("terms");
  if (
    areas.name &&
    areas.email &&
    areas.phone &&
    areas.message &&
    terms.checked
  ) {
    form.reset();

    document
      .getElementById("form__msg-success")
      .classList.add("form__msg-success-active");
    setTimeout(() => {
      document
        .getElementById("form__msg-success")
        .classList.remove("form__msg-success-active");
    }, 5000); /*time we want this part to be executed */

    /*to remove icons after submission*/
    document.querySelectorAll(".form__group-right").forEach((icon) => {
      icon.classList.remove("form__group-right");
    });
  } else {
    document
      .getElementById("form__msg-Displayed")
      .classList.add("form__msg-Displayed-active");
  }
});

