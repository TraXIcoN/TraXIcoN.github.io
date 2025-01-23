import About from "./components/home/About";
import Achievements from "./components/home/Achievements";
import Contact from "./components/home/Contact";
import Education from "./components/home/Education";
import Experience from "./components/home/ExperienceTimeline";
import Interests from "./components/home/Interests";
import Projects from "./components/home/Projects";
import Skills from "./components/home/Skills";
import Background from "./components/layout/Background";
import { ThemeToggle } from "./components/shared/ThemeToggle";
export default function Home() {
  return (
    <main>
      <Background />
      <ThemeToggle />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Interests />
      <Achievements />
      <Contact />
    </main>
  );
}
