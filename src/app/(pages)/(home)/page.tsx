import React from "react";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/services";
import ChooseLens from "@/app/components/chooselens";
import Vision from "@/app/components/vision";
import FAQ from "@/app/components/faq";
import Numbers from "@/app/components/Numbers";
import Blogs from "@/app/components/blogs";
import Connect from "@/app/components/Connect";
import MeetAi from "@/app/components/meetAi";

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <MeetAi />
      <div id="lens">
        <ChooseLens />
      </div>
      <div>
        <Vision />
      </div>
      <div id="blog">
        <Blogs />
      </div>
      {/* <Numbers /> */}
      <FAQ />
      <Connect />
    </>
  );
};

export default Home;
