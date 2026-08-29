import { generateMetadata } from "@/lib/seo-utils";
import Hero from "@/mainPages/portfolioPages/Hero";
import AboutUs from "@/mainPages/AboutUs";
import TechStackNew from "@/components/TechStackNew";
import Projects from "@/mainPages/portfolioPages/Projects";
import Experience from "@/mainPages/portfolioPages/Experience";
import Services from "@/mainPages/portfolioPages/Services";
import Resume from "@/mainPages/portfolioPages/Resume";
import Contact from "@/mainPages/portfolioPages/Contact";

export const metadata = generateMetadata({
  title: "Ganesh Sherkar | UI Developer",
  description:
    "Welcome to the portfolio of Ganesh Sherkar, a skilled UI Developer with 1+ years of experience. Explore projects, skills, and experience in building scalable web and mobile applications.",
  path: "/",
  keywords: [
    "Ganesh Sherkar Portfolio",
    "UI Developer Portfolio",
    "React Developer Portfolio",
    "MERN Stack Developer Portfolio",
    "Hyderabad Web Developer",
  ],
  type: "website",
});

export default function Home() {
  return (
    <>
      {/* SEO Heading - Visible to users and search engines */}
      <section className="sr-only" aria-hidden="false">
        <h1>
          Ganesh Sherkar - Full Stack Developer
        </h1>
        <p>
          Welcome to the portfolio of Ganesh Sherkar, a skilled Full Stack Developer with 1+ years of experience.
          Specializing in building scalable web applications, and modern UI/UX design. Based in Hyderabad, India.
        </p>
      </section>

      {/* 1. Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. About Me Section (Includes About Details & Technical Expertise with id="skills") */}
      <section id="about">
        <AboutUs />
      </section>

      {/* 3. My Projects Section */}
      <section id="projects">
        <TechStackNew />
      </section>

      {/* 4. Experience Section */}
      <section id="experience">
        <Experience />
      </section>

      {/* 6. Services Section */}
      {/* <section id="services">
        <Services />
      </section> */}

      {/* 7. Resume Section */}
      <section id="resume">
        <Resume />
      </section>

      {/* 8. Contact Section */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
