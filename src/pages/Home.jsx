import React, { useRef } from "react";
import { Hero, About, Books, DVD } from "../components/index";

const Home = () => {
  const sectionBRef = useRef(null);

  return (
    <div className="App">
      <Hero targetRef={sectionBRef} />
      <About forwardedRef={sectionBRef} />
      <Books heading="ספרים" active={0} hideActive={false} />
      <DVD />
    </div>
  );
};

export default Home;
