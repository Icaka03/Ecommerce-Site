import Header from "./Header.js";
import About from "./About.js";
import Collection from "./Collection.js";
import Popular from "./Popular.js";
import Review from "./Review.js";
import Navbar from "./Navbar.js";
export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Collection />
      <Popular />
      <Review />
    </>
  );
}
