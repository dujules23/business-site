import React, { useState } from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
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
