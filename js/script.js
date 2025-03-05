// Import AOS animation library
import AOS from "aos"

// Initialize AOS animation library
AOS.init({
  duration: 800,
  once: false,
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Portfolio Filter
document.addEventListener("DOMContentLoaded", () => {
  // Get all filter buttons
  const filterButtons = document.querySelectorAll(".portfolio-filter .btn")
  // Get all portfolio items
  const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper")

  // Add click event to filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      // Get filter value
      const filterValue = this.getAttribute("data-filter")

      // Filter portfolio items
      portfolioItems.forEach((item) => {
        const category = item.getAttribute("data-category")

        if (filterValue === "all" || filterValue === category) {
          item.style.display = "block"
          setTimeout(() => {
            item.style.opacity = "1"
            item.style.transform = "scale(1)"
          }, 100)
        } else {
          item.style.opacity = "0"
          item.style.transform = "scale(0.8)"
          setTimeout(() => {
            item.style.display = "none"
          }, 300)
        }
      })
    })
  })

  // Portfolio Modal
  const portfolioModal = document.getElementById("portfolioModal")
  // Import bootstrap
  import { Modal } from 'bootstrap';
  const modal = new Modal(portfolioModal)
  const portfolioButtons = document.querySelectorAll(".portfolio-btn")

  // Project data
  const projects = {
    project1: {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce website with product catalog, shopping cart, and secure checkout functionality. Built with modern web technologies for optimal performance.",
      client: "Fashion Retailer",
      date: "March 2024",
      category: "Web Design",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MongoDB"],
      link: "#",
      image: "/placeholder.svg?height=600&width=800",
    },
    project2: {
      title: "Fitness App",
      description:
        "A mobile application for fitness enthusiasts to track workouts, set goals, and monitor progress. Features include custom workout plans, nutrition tracking, and social sharing.",
      client: "Health & Wellness Company",
      date: "February 2024",
      category: "App Development",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      link: "#",
      image: "/placeholder.svg?height=600&width=800",
    },
    project3: {
      title: "Coffee Shop Branding",
      description:
        "Complete brand identity design for an artisanal coffee shop, including logo design, color palette, typography, packaging, and marketing materials.",
      client: "Artisan Coffee Co.",
      date: "January 2024",
      category: "Branding & Identity",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      link: "#",
      image: "/placeholder.svg?height=600&width=800",
    },
    project4: {
      title: "Portfolio Website",
      description:
        "A creative portfolio website for a professional photographer showcasing their work with a minimalist design and smooth animations.",
      client: "Professional Photographer",
      date: "December 2023",
      category: "Web Design",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      link: "#",
      image: "/placeholder.svg?height=600&width=800",
    },
    project5: {
      title: "Food Delivery App",
      description:
        "A mobile application for ordering food from local restaurants with real-time order tracking, payment processing, and delivery status updates.",
      client: "Food Delivery Startup",
      date: "November 2023",
      category: "App Development",
      technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
      link: "#",
      image: "/placeholder.svg?height=600&width=800",
    },
    project6: {
      title: "Fashion Brand Identity",
      description:
        "Complete brand identity design for a sustainable fashion brand, including logo design, packaging, social media templates, and marketing materials.",
      client: "Eco Fashion Brand",
      date: "October 2023",
      category: "Branding & Identity",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign"],
      link: "#",
      image: "/placeholder.svg?height=600&width=800",
    },
  }

  // Add click event to portfolio buttons
  portfolioButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Get project data
      const projectId = this.getAttribute("data-portfolio")
      const project = projects[projectId]

      // Update modal content
      portfolioModal.querySelector(".modal-project-title").textContent = project.title
      portfolioModal.querySelector(".modal-project-description").textContent = project.description
      portfolioModal.querySelector(".modal-project-client").textContent = project.client
      portfolioModal.querySelector(".modal-project-date").textContent = project.date
      portfolioModal.querySelector(".modal-project-category").textContent = project.category
      portfolioModal.querySelector(".modal-project-link").setAttribute("href", project.link)
      portfolioModal.querySelector(".modal-img").setAttribute("src", project.image)
      portfolioModal.querySelector(".modal-img").setAttribute("alt", project.title)

      // Update technologies
      const techContainer = portfolioModal.querySelector(".modal-project-technologies")
      techContainer.innerHTML = ""
      project.technologies.forEach((tech) => {
        const badge = document.createElement("span")
        badge.className = "badge bg-light text-dark"
        badge.textContent = tech
        techContainer.appendChild(badge)
      })

      // Show modal
      modal.show()
    })
  })
})

// Add floating animation to hero elements
document.addEventListener("DOMContentLoaded", () => {
  // Add floating animation with different delays to hero elements
  const heroTitle = document.querySelector("#hero h1")
  const heroSubtitle = document.querySelector("#hero h5")
  const heroButtons = document.querySelector("#hero .hero-buttons")

  if (heroTitle) heroTitle.classList.add("floating")

  // Animate elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll")

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.3

      if (elementPosition < screenPosition) {
        element.classList.add("animated")
      }
    })
  }

  // Run on scroll
  window.addEventListener("scroll", animateOnScroll)

  // Run once on page load
  animateOnScroll()

  // Enhance smooth scrolling with animation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        // Add highlight animation to the target section
        targetElement.classList.add("section-highlight")

        // Remove the highlight after animation completes
        setTimeout(() => {
          targetElement.classList.remove("section-highlight")
        }, 1500)

        // Smooth scroll to the element
        targetElement.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })
})

