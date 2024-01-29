// Capitalizes First Letter
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Regex to Validate Email Address
export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Function to Remove Hyphen and Capitalize First Letter of Each Word
export function removeHyphensAndCapitalize(string) {
  return string.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())
}
