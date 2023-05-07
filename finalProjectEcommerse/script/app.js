let join = document.querySelector("#join");
let reset = document.querySelector("#reset");

let email = document.querySelector("#email");
let reemail = document.querySelector("#reemail");
let firstname = document.querySelector("#firstname");
let password = document.querySelector("#password");

join.addEventListener("click", (e) => {
  const allInputValidation = (email, reemail, firstname, password) => {
    if (
      email.value === "" ||
      reemail.value === "" ||
      firstname.value === "" ||
      password.value === ""
    ) {
      email.focus();
      alert("Please fill out the form");
      e.preventDefault();
      return false;
    } else {
      return true;
    }
  };

  const emailValidation = (email) => {
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(emailPattern)) {
      email.focus();
      alert("You have entered invalid format of email. Try Again!!!!");
      e.preventDefault();
      return false;
    } else {
      return true;
    }
  };

  const reemailValidation = (email, reemail) => {
    if (email.value !== reemail.value) {
      reemail.focus();
      alert("Must equal to the First Email.");
      e.preventDefault();
      return false;
    } else {
      return true;
    }
  };

  const firstnameValidation = (firstname) => {
    let namePattern = /^[A-Za-z]+$/;
    if (!firstname.value.match(namePattern)) {
      firstname.focus();
      alert("First Name must have namePatternbet characters only!!!!");
      e.preventDefault();
      return false;
    } else {
      return true;
    }
  };
  const passwordvalidation = (password) => {
    let passwordpattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,20}$/;
    console.log(password.value);
    if (!password.value.match(passwordpattern)) {
      password.focus();
      document.getElementById("passworderror").innerHTML =
        "Password must have capital latters, small letters, numeric and special charactors!!!!";
      e.preventDefault();
      return false;
    } else {
      return true;
    }
  };

  if (allInputValidation(email, reemail, firstname, password)) {
    if (emailValidation(email)) {
      if (reemailValidation(email, reemail)) {
        if (firstnameValidation(firstname)) {
          if (passwordvalidation(password)) {
            alert("Thank you for registration");
            const user = {
              firstname: firstname.value,
              password: password.value,
            };

            localStorage.setItem("user", JSON.stringify(user));
            window.location.pathname = "../templates/login.html";
          }
        }
      }
    }
  }
});
