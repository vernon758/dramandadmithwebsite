
// Menu
let menuList = document.getElementById("menuList");
let menuIcon = document.querySelector(".menu-icon i");

menuList.style.maxHeight = "0px";

menuIcon.addEventListener("click", function() {
    if (menuList.style.maxHeight === "0px") {
        menuList.style.maxHeight = "100vh"; // Set menu height to full viewport height
        menuIcon.classList.remove("ri-menu-3-line");
        menuIcon.classList.add("ri-close-line");
    } else {
        menuList.style.maxHeight = "0px";
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-3-line");
    }
});

// Tabbed content
function openTab(tabName) {
  var i;
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// User dropdown
document.addEventListener("DOMContentLoaded", function() {
    const userBtn = document.querySelector('.user-btn');
    const userDropdown = document.querySelector('.user-dropdown');
  
    userBtn.addEventListener('click', function() {
      userDropdown.classList.toggle('show');
    });
  
    // Close dropdown if clicked outside
    document.addEventListener('click', function(event) {
      if (!userBtn.contains(event.target) && !userDropdown.contains(event.target)) {
        userDropdown.classList.remove('show');
      }
    });
  });
