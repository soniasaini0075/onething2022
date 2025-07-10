export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validateMobileLength = (mobile) => {
  
  const cleanedMobile = String(mobile).replace(/[^0-9+]/g, ''); // Remove non-numeric characters except '+'
  
  if (cleanedMobile.match(/^\+?[0-9]{1,15}$/)) {
    console.log(cleanedMobile,"mobile")
    // Check if the cleanedMobile matches the pattern for 1 to 15 digits with an optional '+' sign
    return cleanedMobile;
  }
  // if (String(mobile).match(/^[0-9+]{10}$/)) {
  //   return Number(mobile);
  // }
};

export const ValidateAge = (age) => {
  if (String(age).match(/^[1-9]?[0-9]{1}$|^100$/)) {
    return Number(age);
  }
};

export const validateNumber = (event) => {
  const keyCode = event.keyCode;

  const excludedKeys = [8, 37, 39, 46];

  if (
    !(
      // (keyCode >= 48 && keyCode <= 57) ||
      // (keyCode >= 96 && keyCode <= 105) ||
      (
        (keyCode >= 96 && keyCode < 123) ||
        keyCode == 8 ||
        keyCode == 32 ||
        (keyCode >= 48 && keyCode <= 57) ||
        excludedKeys.includes(keyCode)
      )
    )
  ) {
    event.preventDefault();
    if(event.target.autocomplete)
   {
     event.target.autocomplete = "whatever";
   }
  }
};
