import NavBar from "./Navbar";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Home from "../pages/Home";

// import "../styles/_home.scss";

export const PageBody = ({ children }) => {
  return <main>{children}</main>;
};

export const PageContent = ({
  className,
  title,
  back,
  extras,
  message,
  children,
}) => {
  return (
    <div>
      {/* Nav Bar */}
      <NavBar />
      <Sidebar />
      {/* Body Content */}
      {/* <Home className="home" /> */}
      <Content>{children}</Content>
    </div>
  );
};

export const PageFooter = ({ children }) => {
  return <div>Footer</div>;
};
