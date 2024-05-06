import React from "react";
import People from "./People";
import About from "@/app/components/About";
import Services from "@/app/components/services";

const page = () => {
  return (
    <div>
      <div className="pt-8">
        <About />
      </div>
      <Services />
      <People />
    </div>
  );
};

export default page;
