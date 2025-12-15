
function updateClock() {
  const now = new Date(); // current date & time

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12;     // convert to 12-hour format
  hours = hours ? hours : 12; // handle midnight (0 => 12)

  // Add leading zeros
  const hStr = hours.toString().padStart(2, "0");
  const mStr = minutes.toString().padStart(2, "0");
  const sStr = seconds.toString().padStart(2, "0");

  // Display time
  const timeEl = document.getElementById("time");
  timeEl.textContent = `${hStr}:${mStr} ${ampm}`;

  // Display date
  const dateEl = document.getElementById("date");
  const options = { weekday: "long", year: "numeric", month: "numeric", day: "numeric" };
  dateEl.textContent = now.toLocaleDateString(undefined, options);
}

// Call every second
setInterval(updateClock, 1000);

// Initial call to display immediately
updateClock();




const darkModeBtn = document.getElementById('theme-toggle'); // matches HTML
const htmlEl = document.documentElement;

// Load saved dark mode on page load
if (localStorage.getItem('theme-toggle') === 'true') {
  htmlEl.classList.add('dark');
}

// Toggle dark mode on click
darkModeBtn.addEventListener('click', () => {
  htmlEl.classList.toggle('dark'); // toggle class
  localStorage.setItem('theme-toggle', htmlEl.classList.contains('dark')); // save state
});




// 1. Mobile Menu Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('close-sidebar');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', () => {
        // Remove 'hidden' to show it, add 'flex' to ensure display
        sidebar.classList.remove('hidden');
        sidebar.classList.add('flex');
    });

    closeBtn.addEventListener('click', () => {
        // Add 'hidden' back to hide it
        sidebar.classList.add('hidden');
        sidebar.classList.remove('flex');
    });

    // 2. Dark Mode Logic (Preserved from your context)
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });

   
   