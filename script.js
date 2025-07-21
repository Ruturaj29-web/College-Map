document.addEventListener("DOMContentLoaded", () => {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.stopPropagation();

      // Close all other submenus
      document.querySelectorAll(".menu-item").forEach((menu) => {
        if (menu !== item) menu.classList.remove("active");
      });

      // Toggle the active class
      item.classList.toggle("active");
    });
  });

  // Close submenus when clicking outside
  document.addEventListener("click", () => {
    document.querySelectorAll(".menu-item").forEach((menu) => menu.classList.remove("active"));
  });
});
function handleSearch() {
  // Get user input
  let query = document.getElementById("searchQuery").value.toLowerCase().trim();
  
  // Define search mappings
  let pages = {
      "home": "index.html",
      "first floor": "1FirstFloor.html",
      "second floor": "2SecondFloor.html",
      "third floor": "3ThirdFloor.html",
      "fourth floor": "4FourthFloor.html",
      "about us": "aboutus.html"
  };

  // Redirect if page exists in the mapping
  if (pages[query]) {
      window.location.href = pages[query];
  } else {
      alert("Page not found! Try a different search.");
  }

  return false; // Prevent form submission
}
document.addEventListener("DOMContentLoaded", () => {
  const searchBar = document.querySelector(".search-bar");

  // List of valid files that users can search
  const validFiles = {
      "home": "index.html",
      "about": "aboutus.html",
      "services": "services.html",
      "floor plan": "floorplan.html",
      "first floor": "1Firstfloor.html",
      "Chemical Department": "EngineeringChemical.html",
      "Civil Department": "EngineeringCivil.html",
      "Computer Depaartment": "EngineeringComputer.html",
      "Electrical Department": "EngineeringElectrical.html",
      "ENTC Department": "EngineeringENTC.html",
      "Mechanical Department": "EngineeringMechanical.html",
      "Robotics Department": "EngineeringRobotics.html",
      "106": "106.html",
      "200": "200.html",
      "213": "213.html",
      "219": "219.html",
      "224": "224.html",
      "228": "228.html",
      "237": "237.html",
      "238": "238.html",
      "244": "244.html",
      "302": "302.html",
      "304": "304.html",
      "305": "305.html",
      "306": "306.html",
      "314": "314.html",
      "315": "315.html",
      "316": "316.html",
      "317": "317.html",
      "318": "318.html",
      "324": "324.html",
      "340": "340.html",
      "344": "344.html",
      "345": "345.html",
      "414": "414.html",
      "417": "417.html",
      "420": "420.html",
      "429": "429.html",
      "432": "432.html",
      "437": "437.html",
      "440": "440.html",
      "441": "441.html",
      "442": "442.html",
      "443": "443.html",
      "446": "446.html",
      "447": "447.html",
  };

  // Expand search bar when clicked
  searchBar.addEventListener("click", () => {
      searchBar.focus();
  });

  // Collapse search bar when clicking outside
  document.addEventListener("click", (event) => {
      if (!searchBar.contains(event.target)) {
          searchBar.blur();
      }
  });

  // Handle search input when user presses Enter
  searchBar.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
          event.preventDefault(); // Prevent form submission
          const query = searchBar.value.trim().toLowerCase();

          // Check if query matches any valid file
          if (validFiles[query]) {
              window.location.href = validFiles[query]; // Redirect to the correct file
          } else {
              alert("Page not found! Please enter a valid search term."); // Show alert for invalid input
          }
      }
  });
});

// Optional JS file: You can use this to log clicks or add more interactivity
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
      console.log(`Navigating to: ${button.getAttribute('href')}`);
  });
});

function showUnderDevelopment(event) {
  event.preventDefault(); // Stop the link
  document.getElementById('popup').style.display = 'flex'; // Show popup
}

function closePopup() {
  document.getElementById('popup').style.display = 'none'; // Hide popup
}





