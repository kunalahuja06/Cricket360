///VALIDATE REGISTER INPUT
module.exports.validateRegister = (
  email,
  username,
  password,
  confirmpassword
) => {
  var errors = {};
  if (email.trim() === '') {
    errors.emailError=`Email can't be empty`
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.emailError=`Email must be a valid email address`
  }
}
if (username.trim() === "" ) {
    errors.usernameError=`Username can't be empty`
}
  if(username==='KunalAhuja'){
    errors.usernameError='Username is taken'
  }
  if (password.trim() === "") {
   errors.passwordError = `Password can't be empty`
  } else if (password !== confirmpassword) {
      errors.passwordError= `Passwords do not match`

}
console.log(errors)
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
}

//// VALIDATE LOGIN INPUT

module.exports.validateLogin = (email, password) => {
  var errors = {};
  if (email.trim() === "") {
    errors.emailError = `Email can't be empty`;
  } else {
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    if (!email.match(regEx)) {
      errors.emailError = `Email must be a valid email address`;
  }
}
  if (!password || password.trim() === "") {
    errors.passwordError = `Password can't be empty`;
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  }
}
