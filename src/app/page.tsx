import Navbar from "@/components/Navbar";
import Image from "next/image";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Interests from "./sections/Interests";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Interests />
    </>
  );
}
