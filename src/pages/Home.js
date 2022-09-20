import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

import { PageBody, PageContent, PageFooter } from "../components/PageBody";

const Home = () => {
  return (
    <Layout>
      <PageBody>
        <PageContent title="Q and Sons"></PageContent>
        {/* Footer Region */}
        <PageFooter />
      </PageBody>
    </Layout>
  );
};

export default Home;
