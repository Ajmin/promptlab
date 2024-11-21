import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        {" "}
        Discover and Share
        <br />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
        dolores nostrum itaque, voluptatibus odit necessitatibus autem sunt ex
        molestiae? Vel, ut quas. Enim earum autem exercitationem illo repellat
        sint!
      </p>
      <Feed />
    </section>
  );
};

export default Home;
