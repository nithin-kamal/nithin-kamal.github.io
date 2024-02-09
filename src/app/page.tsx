import NavbarComponent from "@/components/main/Navbar/NavbarComponent";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </>
  );
}
