import Facebook from "../components/Facebook";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Quality from "../components/Quality";
import Services from "../components/Services";

function Homepage() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <Facebook />
      <Quality />
      <Services />
      <Footer />
    </div>
  );
}
export default Homepage;
