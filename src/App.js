import React from "react";
import Header from "components/header/Header";
import Navbar from "components/navbar/Navbar";
import About from "components/about/About";
import Experience from "components/experience/Experience";
import Footer from "components/footer/Footer";
import Testimonial from "components/testimonial/Testimonial";
import Portfolio from "components/portfolio/Porfolio";
import Contact from "components/contact/Contact";


function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Testimonial />
      <Portfolio />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
