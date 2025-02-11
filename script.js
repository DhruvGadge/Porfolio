// Navbar Toggle (Hamburger Menu)
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close the menu when a navigation item is clicked
  const navItems = document.querySelectorAll(".nav-links li a");
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

// Dark/Light Mode Toggle
const themeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark-mode") {
  body.classList.add("dark-mode");
  themeToggle.innerText = "Light Mode";
}

// Toggle theme on button click
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light-mode");
      themeToggle.innerText = "Dark Mode";
    } else {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark-mode");
      themeToggle.innerText = "Light Mode";
    }
  });
}

// Form Validation (for Contact Form)
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to allow validation

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation check to ensure all fields are filled out
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
    } else {
      alert("Thank you for your message!");
      contactForm.reset(); // Reset form fields after submission
    }
  });
}

// Smooth Scroll for Internal Links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50, // Adjusted for navbar height
        behavior: "smooth",
      });
    }
  });
});

// Blog Section - Dynamically Add Blog Items
document.addEventListener("DOMContentLoaded", function () {
  const blogList = document.getElementById("blog-list");

  if (blogList) {
    // Sample blog data
    const blogs = [
      {
        title: "Understanding JavaScript Closures",
        excerpt: "JavaScript closures are a fundamental concept for handling functions and scope...",
        link: "blog1.html",
      },
      {
        title: "CSS Grid vs Flexbox",
        excerpt: "Choosing between CSS Grid and Flexbox? Here's what you need to know...",
        link: "blog2.html",
      },
      {
        title: "Getting Started with React",
        excerpt: "React is a powerful library for building user interfaces. Learn how to start...",
        link: "blog3.html",
      },
    ];

    // Dynamically add blogs to the section
    blogs.forEach((blog) => {
      const blogItem = document.createElement("div");
      blogItem.classList.add("blog-item");

      blogItem.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.excerpt}</p>
            <a href="${blog.link}">Read More</a>
        `;

      blogList.appendChild(blogItem);
    });
  }
});

// ✅ Add the Online Voting System Project (Dynamically)
document.addEventListener("DOMContentLoaded", function () {
  const projectsGrid = document.querySelector(".projects-grid");

  if (projectsGrid) {
    // Project Details
    const project = {
      title: "Online Voting System",
      description:
        "This project implements a voting system using Object-Oriented Programming (OOP) in C++. It simulates a real-world voting scenario where voters can cast their votes for different political parties.",
      githubLink: "https://github.com/DhruvGadge/Project11",
      fileLink: "Online Voting System.pdf",
      image: "project.png",
    };

    // Create project card
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.githubLink}" class="btn" target="_blank">View on GitHub</a>
        <a href="${project.fileLink}" class="btn" download>Download Project</a>
    `;

    projectsGrid.appendChild(projectDiv);
  }
});
