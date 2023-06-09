function form() {
    let name =  document.getElementById("name");
    let email = document.getElementById("email");
    let mobile = document.getElementById("mobile");

    if (name.value == "") {
      document.getElementById("userError").innerHTML = "name must be filled out";
      return false;
    }   

    if (email.value == "") {
      document.getElementById("emailError").innerHTML = "email must be filled out";
      return false;
    } else {
      // Check email validity using regex
      var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!email.value.match(emailRegex)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address ";
        return false;
      }
    }
    if (mobile.value == "") {
      document.getElementById("mobileError").innerHTML = "phone number must be filled out";
      return false;
    } 
    else {
      // Check mobile number validity
      var mobileRegex = /^[0-9]{10}$/;  
      if (!mobile.value.match(mobileRegex)) {
        document.getElementById("mobileError").innerHTML = 
        "Please enter a valid 10-digit mobile number";
        return false;
      }
    }
    alert("Thank You for Your Time") 
  }


  function login() {

    let email = document.getElementById("email");
 

    if (email.value == "") {
      document.getElementById("emailError").innerHTML = "email must be filled out";
      return false;
    } else {
      // Check email validity using regex
      var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (!email.value.match(emailRegex)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address ";
        return false;
      }
    }
  
    alert("successfully logged in!")
    
     
  }