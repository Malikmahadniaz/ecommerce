  var items = document.getElementById("items");

  items.style.maxHeight = "0px";

  function menutoggle() {
      if (items.style.maxHeight == "0px") {
          items.style.maxHeight = "200px"
      } else {
          items.style.maxHeight = "0px"
      }
  }

  //js for product gallery


  var productImg = document.getElementById("productimg");

  function myfunction(smallImg) {
      productImg.src = smallImg.src;
  }


  //js for toggle form

  var loginForm = document.getElementById("login");
  var regForm = document.getElementById("register");
  var indicator = document.getElementById("ind");

  function register() {
      regForm.style.transform = "translateX(0px)";
      loginForm.style.transform = "translateX(0px)";
      indicator.style.transform = "translateX(100px)";
  }

  function login() {
      regForm.style.transform = "translateX(300px)";
      loginForm.style.transform = "translateX(300px)";
      indicator.style.transform = "translateX(0px)";
  }
