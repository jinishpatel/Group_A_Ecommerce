Xlet join = document.querySelector("#join");

let firstname = document.querySelector("#firstname");
let password = document.querySelector("#lastname");

join.addEventListener("click", (e) => {
  const allInputValidation = (firstname, password) => {
    if (firstname.value === "" || password.value === "") {
      firstname.focus();
      alert("Please fill out the form");
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
    let namePattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,20}$/;
    if (!password.value.match(namePattern)) {
      password.focus();
      alert("Invelid credentials!!!!");
      e.preventDefault();

      return false;
    } else {
      return true;
    }
  };

  if (allInputValidation(firstname, password)) {
    if (firstnameValidation(firstname)) {
      if (passwordvalidation(password)) {
        let retrievedObject = localStorage.getItem("user");
        let name = JSON.parse(retrievedObject);
        let loginName = name.firstname;
        let loginPassword = name.password;
        console.log(firstname.value);
        if (firstname.value == "admin" && password.value == "Admin@123") {
          console.log("from admin");
          console.log(firstname.value);
          window.location.pathname = "../templates/admin.html";
        } else if (
          firstname.value === loginName &&
          password.value === loginPassword
        ) {
          window.location.pathname = "../templates/home.html";
        } else {
          alert("Invalid Login Credentials");
        }
      }
    }
  }
});
