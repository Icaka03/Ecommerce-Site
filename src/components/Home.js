import Header from "./Header.js";
import About from "./About.js";
import Collection from "./Collection.js";
import Popular from "./Popular.js";
import Review from "./Review.js";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Collection />
      <Popular />
      <Review />
    </>
  );
}
