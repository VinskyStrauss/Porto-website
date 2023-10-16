import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import emailjs from "emailjs-com";

function App() {
  const images = [
    "Screenshot 2023-10-14 155609.png",
    "Screenshot 2023-10-14 155521.png",
    "Screenshot 2023-10-14 155543.png",
    "Screenshot 2023-10-14 155659.png",
  ];

  const pizzaImages = [
    "Screenshot 2023-10-14 191522.png",
    "Screenshot 2023-10-14 191650.png",
    "Screenshot 2023-10-14 191704.png",
    "Screenshot 2023-10-14 191547.png",
  ];

  const hciImages = [
    "Screenshot_20231015-171947.jpg",
    "Screenshot_20231015-171955.jpg",
    "Screenshot_20231015-172014.jpg",
    "Screenshot_20231015-172037.jpg",
    "Screenshot_20231015-172043.jpg",
    "Screenshot_20231015-172030.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPizzaImageIndex, setCurrentPizzaImageIndex] = useState(0);
  const [currentHciImageIndex, setCurrentHciImageIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage2 = () => {
    setCurrentPizzaImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage2 = () => {
    setCurrentPizzaImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage3 = () => {
    setCurrentHciImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage3 = () => {
    setCurrentHciImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  //scroll
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth", // This triggers smooth scrolling
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    //send the message to my email
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Vinsky Strauss",
    };
    console.log(templateParams);
    emailjs
      .send(
        "vinskygmail-service",
        "template_email",
        templateParams,
        "w9YynDbPCo6GrLKXM"
      )
      .then((response) => {
        if (response.status !== 200) {
          throw "";
        }
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Message failed to send.");
      });
  };
  return (
    <div>
      <div className="header">
        <a href="#intro" onClick={(e) => scrollToSection(e, "intro")}>
          Home
        </a>
        <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
          About Me
        </a>
        <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
          Projects
        </a>
        <a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
          Contact Me
        </a>
      </div>
      <div class="intro" id="intro">
        <img class="profile-pic" src="20230526_203550.jpg" alt="My Image" />
        <p>
          Hello and welcome to my portfolio website! I'm Vinsky Strauss
          TanHanSen, originally from Jakarta, Indonesia, and currently residing
          in Germany for my studies. With a strong passion for web and mobile
          application development, I'm on a journey to explore and create
          innovative solutions. Through my experiences and projects, I aim to
          bring my ideas to life and share them with the world.
        </p>
        <div class="logos">
          <img
            class="logo"
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vinsky-strauss-tanhansen-577853202/"
              )
            }
          />
          <img
            class="logo"
            src="https://img.icons8.com/fluent/48/000000/github.png"
            alt="github"
            onClick={() => window.open("https://github.com/VinskyStrauss")}
          />
          <img
            class="logo"
            src="https://img.icons8.com/fluent/48/000000/facebook-new.png"
            alt="facebook"
            onClick={() => {
              window.open("https://www.facebook.com/vinsky.strauss.3");
            }}
          />
        </div>
        <a
          href="https://drive.google.com/file/d/1t-SDmpdoOPIbAsg5d6-JksUHiM1DKpws/view?usp=sharing"
          download
          target="_blank"
        >
          <button>Here's my CV</button>
        </a>
      </div>

      <div class="about" id="about">
        <div>
          <h1>About Me</h1>
          <p class="center-paragraph">
            I'm a computer science student currently in my 6th semester,
            passionate about all things technology. Beyond the structured world
            of academia, I love to explore and create. During this semester
            breaks, I took the opportunity to channel my passion into a creative
            endeavor to built my very own website. It was a journey of learning,
            coding, and problem-solving, which allowed me to apply the knowledge
            gained in my coursework. Through this website, I hope to share my
            experiences and projects with you.
          </p>
        </div>
        <div class="skills">
          <h3>Things i'm familiar with</h3>
          <div class="logos">
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              alt="html"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/css3.png"
              alt="css"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt="javascript"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
              alt="c++"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/react-native.png"
              alt="react"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
              alt="vscode"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/git.png"
              alt="git"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/firebase.png"
              alt="firebase"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/android-studio--v1.png"
              alt="android"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/docker.png"
              alt="docker"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/python--v1.png"
              alt="python"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
              alt="java"
            />
            <img
              class="logo2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg"
              alt="qt"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/postgreesql.png"
              alt="postgresql"
            />
            <img
              class="logo2"
              src="https://img.icons8.com/color/48/000000/typescript.png"
              alt="typescript"
            />
          </div>
        </div>
      </div>

      <div class="projects" id="projects">
        <h1>Projects</h1>
        <div class="WMS">
          <h2>Warehouse Management System</h2>
          <p>
            A Warehouse Management System (WMS) is a software application or
            system that facilitates the efficient management and control of
            warehouse operations and logistics. It plays a critical role in
            optimizing the storage, movement, and tracking of goods within a
            warehouse or distribution center.
          </p>
          <button
            onClick={() => {
              window.open(
                "https://github.com/VinskyStrauss/warehouse-management-system"
              );
            }}
          >
            Link to the Github
          </button>
          <div class="project-carousel">
            <button onClick={prevImage} className="prev-button">
              &#9665;
            </button>
            <div className="carousel-image">
              <img src={images[currentImageIndex]} alt="WMS" />
            </div>
            <button onClick={nextImage} className="next-button">
              &#9655;
            </button>
          </div>
        </div>
        <div class="pizza">
          <h2>Pizza Service</h2>
          <p>
            A web pizza service refers to an online platform or website that
            enables customers to order and enjoy pizza from the comfort of their
            own homes.With the help of a web pizza service, customers can also
            track their orders and receive them at their doorstep, and also help
            the restaurant to manage their orders.
          </p>
          <button
            onClick={() => {
              window.open("https://github.com/VinskyStrauss/PizzaService");
            }}
          >
            Link to the Github
          </button>
          <div class="project-carousel">
            <button onClick={prevImage2} className="prev-button">
              &#9665;
            </button>
            <div className="carousel-image">
              <img src={pizzaImages[currentPizzaImageIndex]} alt="WMS" />
            </div>
            <button onClick={nextImage2} className="next-button">
              &#9655;
            </button>
          </div>
        </div>

        <div class="hci">
          <h2>O'Click-nic</h2>
          <p>
            O'Click-nic, short for "Online Clickable Clinic," is a virtual
            healthcare platform designed to provide accessible and convenient
            medical services. This innovative platform leverages the power of
            technology to connect healthcare professionals with patients,
            offering a wide range of medical services from the comfort of one's
            home. Doctors can easily monitor their patients' health and provide
            treatment recommendations, while patients can conveniently receive
            medical advice and prescriptions.
          </p>
          <button
            onClick={() => {
              window.open("https://github.com/VinskyStrauss/OClickNic");
            }}
          >
            Link to the Github
          </button>
          <div class="project-carousel">
            <button onClick={prevImage3} className="prev-button">
              &#9665;
            </button>
            <div className="carousel-image">
              <img
                class="hciImg"
                src={hciImages[currentHciImageIndex]}
                alt="WMS"
              />
            </div>
            <button onClick={nextImage3} className="next-button">
              &#9655;
            </button>
          </div>
        </div>

        <div class="contact" id="contact">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="name"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="message"
              rows="4"
              required
            ></textarea>
            <button class="submit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
