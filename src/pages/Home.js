import React, { useState } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Footer from "../components/Footer";
import CleanUp from "../images/svg-1.svg";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import { PageBody, PageContent, PageFooter } from "../components/PageBody";

import "../styles/pages/_home.scss";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  // look in to adding this into an AppContext
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} img={<CleanUp />} />
      <Services />
      <InfoSection {...homeObjTwo} />
      <Footer />
    </>
    // <Layout>
    //   <PageBody>
    //     <PageContent title=""></PageContent>

    //     {/* Footer Region */}
    //     <PageFooter />
    //   </PageBody>
    // </Layout>
  );
};

export default Home;
