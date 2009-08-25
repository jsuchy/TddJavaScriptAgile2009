var password = {
  isValid: function() {
    return this.contents.length >= 8;
  }
}
var password_validator = {
  validate: function(input) {
    password.contents = input.value;
    
    if (password.isValid()) {
      input.className = "password_valid";
    }
    else {
      input.className = "password_invalid";
    }
    
  }
}