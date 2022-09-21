import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import { PageBody, PageContent, PageFooter } from "../components/PageBody";

import "../styles/pages/_home.scss";

const Home = () => {
  return (
    <Layout>
      <PageBody>
        <PageContent title="Q and Sons"></PageContent>
        <div className="home">Welcome page</div>
        {/* Footer Region */}
        <PageFooter />
      </PageBody>
    </Layout>
  );
};

export default Home;
