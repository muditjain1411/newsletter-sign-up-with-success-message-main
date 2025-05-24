const email = document.getElementById("email")
const err = document.querySelector(".error-frame span")
const form = document.getElementById("form")
const signUpPage = document.getElementById("signUpPage")
const successPage = document.querySelector(".success")

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    err.className = "error hidden";
  } else {
    err.className = "error";
  }
});

form.addEventListener("submit", event=>{
    if(!email.validity.valid){
        err.className = "error"
        event.preventDefault()
    }
    else{
        event.preventDefault()
        signUpPage.classList.add("hidden")
        successPage.classList.remove("hidden")

    }
})