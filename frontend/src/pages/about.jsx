import Navbar from "../components/common/navbar";
import About from "../components/landing_page/about";
import Footer from "../components/footer";

/**
 * This component renders the About page, which includes the Navbar at the top,
 * the About section in the main content area, and the Footer at the bottom.
 */

function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="main_layout">
        <About />
      </main>
        <Footer />
    </>
  );
}

export default AboutPage;
