import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// import AnimatedCursor from "react-animated-cursor";
import "./globals.css";

export default function Home() {
  return (
    <>
      <main className="max-[320px]:hidden">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        {/* <AnimatedCursor
          color="0, 160, 0"
          innerSize={10}
          outerSize={50}
          outerAlpha={0.2}
          innerScale={0.9}
          outerScale={1.4}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        /> */}
      </main>
      <main className="min-[320px]:hidden flex flex-col items-center justify-center w-svw min-h-svh p-4">
        <p className="text-xl font-semibold">
          Your device resolution is too small to view this page.
        </p>
        <p className="text-xl font-semibold">
          Open this page on device larger than 320px.
        </p>
      </main>
    </>
  );
}
