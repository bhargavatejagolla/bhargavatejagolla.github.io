document.addEventListener("DOMContentLoaded", function () {
  // Terminal animation with your specific details
  const terminalLines = [
    "Initializing Bhargava's portfolio system...",
    "Loading skills: Python, C, DSA, SQL...",
    "Connecting to education database: CMR College...",
    "Accessing certification records: CodeChef, Great Learning...",
    "System ready for interaction!",
  ];

  const terminalBody = document.querySelector(".terminal-body");
  const promptLine = document.querySelector(".prompt");

  // Clear initial content
  terminalBody.innerHTML = "";

  // Type out lines with delay
  terminalLines.forEach((line, index) => {
    setTimeout(() => {
      const newLine = document.createElement("div");
      newLine.className = "terminal-line";
      newLine.textContent = line;
      terminalBody.appendChild(newLine);

      // Scroll to bottom
      terminalBody.scrollTop = terminalBody.scrollHeight;

      // Show prompt after last line
      if (index === terminalLines.length - 1) {
        setTimeout(() => {
          terminalBody.appendChild(promptLine);
          startCursorAnimation();
        }, 500);
      }
    }, index * 800);
  });

  // Cursor animation
  function startCursorAnimation() {
    const cursor = document.querySelector(".cursor");
    if (cursor) {
      cursor.style.animation = "blink 1s infinite";
    }
  }

  // Form submission
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector("textarea").value;

      // Here you would typically send the form data to a server
      console.log("Form submitted:", { name, email, message });

      // Show success message
      alert(
        "Thank you for your message, " + name + "! I will get back to you soon."
      );

      // Reset form
      this.reset();
    });
  }

  // Smooth scrolling for navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Animation on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".timeline-item, .certificate-card, .project-item, .language-item"
    );

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementPosition < windowHeight - 100) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animation
  document
    .querySelectorAll(
      ".timeline-item, .certificate-card, .project-item, .language-item"
    )
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

  // Run once on load
  animateOnScroll();

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll);
});
