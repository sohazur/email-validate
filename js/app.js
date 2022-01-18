const emailChecker = () => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const email = document.getElementById("email").value;
  displayEmailValidation(regex.test(email));
};

const displayEmailValidation = (validEmail) => {
  const div = document.getElementById("email-checker");
  div.innerText = "";
  if (validEmail) {
    div.innerHTML = `
        <div class="green-status">
            <h4>This a valid email.</h4>
        </div>
    `;
  } else {
    div.innerHTML = `
        <div class="red-status">
            <h4 >This an invalid email.</h4>
            <h5>Please type a valid email</h5>
        </div>
    `;
  }
};
